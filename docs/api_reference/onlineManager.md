---
sidebar_position: 18
title: onlineManager
---

# 온라인 매니져

`OnlineManager` 는 리액트 쿼리에서 네트워크 상태를 관리합니다.

앱 시작할 때 이벤트 리스너를 등록해서 네트워크 동작의 기본값을 제어할 수도 있고, 쿼리마다 수동으로 조작해줄 수도 있습니다.

:::info 다음의 3가지 메소드를 활용하시면 됩니다.

-   [setEventListener](https://react-query.tanstack.com/reference/onlineManager#onlinemanagerseteventlistener)
-   [setOnline](https://react-query.tanstack.com/reference/onlineManager#onlinemanagersetonline)
-   [isOnline](https://react-query.tanstack.com/reference/onlineManager#onlinemanagerisonline)

:::

## **`onlineManager.setEventListener`**

`setEventListener` 를 활용하시면 커스텀 이벤트 리스너를 등록하실 수 있습니다.

```tsx
import NetInfo from '@react-native-community/netinfo';
import { onlineManager } from 'react-query';

onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
        setOnline(state.isConnected);
    });
});
```

## **`onlineManager.setOnline`**

`setOnline` 를 활용하시면 true나 false를 부여해서 수동으로 온라인 상태를 조절할 수 있습니다. undefined을 주시면 기본 온라인 체크로 로직을 타게 됩니다.

```tsx
import { onlineManager } from 'react-query';

// Set to online
onlineManager.setOnline(true);

// Set to offline
onlineManager.setOnline(false);

// Fallback to the default online check
onlineManager.setOnline(undefined);
```

**Options**

-   `online: boolean | undefined`

## **`onlineManager.isOnline`**

`isOnline` 현재 온라인 상태를 알 수 있습니다.

```tsx
const isOnline = onlineManager.isOnline();
```
