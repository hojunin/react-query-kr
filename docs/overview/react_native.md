---
sidebar_position: 8
title: 리액트 네이티브(React Native)
---

# 리액트 네이티브

리액트 쿼리는 리액트 네이티브에서도 개발자 도구를 제외하곤 전부 작동하도록 설계되었습니다.

:::info
개발자 도구를 쓰려면 React Dom을 사용해야하는데, 리액트 네이티브는 그렇지 않기 때문입니다. 그 대안으로 Flipper를 쓰시면 됩니다. [플러그인](https://github.com/bgaleotti/react-query-native-devtools)이 있으니 같이 활용해보세요. 만약에 개발자 도구 리액트 네이티브 버전을 만드시게 된다면 저희한테 꼭 알려주시고요.
:::

## 서버 상태 관리

리액트 쿼리는 이미 네트워크 상태에 따라 재시도 로직이나 네트워크 재연결 로직이 구축되어 있습니다. 해당 기능을 추가하시려면 저희가 제공하는 onlineManager를 활용한 다음 코드를 참고해보세요

```tsx
1 import NetInfo from '@react-native-community/netinfo'
2 import { onlineManager } from 'react-query'
3
4 onlineManager.setEventListener(setOnline => {
5   return NetInfo.addEventListener(state => {
6     setOnline(state.isConnected)
7   })
8 })

```

## 앱이 포커스되었을 때 리프레시

리액트 네이티브 앱에서 앱이 포커스되었을 때 리페칭해야하는 경우엔 저희가 제공하는 focusManager를 쓰셔야 합니다.

```tsx
1 import { focusManager } from 'react-query'
2
3 function onAppStateChange(status: AppStateStatus) {
4   if (Platform.OS !== 'web') {
5     focusManager.setFocused(status === 'active')
6   }
7 }
8
9 useEffect(() => {
10   const subscription = AppState.addEventListener('change', onAppStateChange)
11
12   return () => subscription.remove()
13 }, [])

```

## 스크린 포커스 시 리프레시

리액트 네이티브 스크린이 다시 포커스되었을 때만 리페칭해야하는 상황이 있을 수 있습니다. 아래 커스텀 훅을 사용하면 해당 기능을 구현하실 수 있습니다.

```tsx
1 import React from 'react'
2 import { useFocusEffect } from '@react-navigation/native'
3
4 export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
5   const firstTimeRef = React.useRef(true)
6
7   useFocusEffect(
8     React.useCallback(() => {
9       if (firstTimeRef.current) {
10          firstTimeRef.current = false;
11          return;
12       }
13
14       refetch()
15     }, [refetch])
16   )
17 }
```

위 코드에서 effect 훅 내의 로직이 ref를 통해 마운트 되었을 땐 void를 return하기 때문에 refetch함수는 스크린이 포커스되었을 때만 호출합니다.

:::tip
일반적인 useEffect였다면 refetch()함수는 2회 호출됩니다(mount 시 1회, refetch함수 생성 시 1회)
:::
