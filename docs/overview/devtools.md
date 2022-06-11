---
sidebar_position: 4
title: 개발자 도구 (devtools)
---

# 개발자 도구

리액트 쿼리가 엄청난 개발자 도구를 가져왔어요. 환영의 인사로 손 한번 흔들어줍시다 🙋🏼

리액트 쿼리와 한배를 탄 이상, 저희가 제공하는 개발자 도구를 항상 곁에 두시는게 좋을거에요. 이 툴을 사용하면 리액트 쿼리가 내부적으로 동작되는 과정을 손쉽게 볼 수 있거든요. 아마 디버깅하는 시간도 획기적으로 줄여줄거에요

## 중요한 점

:::danger
리액트 네이티브에는 개발자 도구가 지원되지 않습니다. 쓰시려거든 만들어서 쓰세요… 😇
:::

개발자 도구는 react-query/devtools라는 모듈로 분리되었지만 따로 더 뭘 설치할 필요는 없습니다. 다음과 같이 import해서 사용합니다.

```tsx
import { ReactQueryDevtools } from 'react-query/devtools';
```

기본 설정으로 리액트 쿼리 개발자도구는 process.env.NODE_ENV === ‘development’일 때만 동작합니다. 그러므로 프로덕션 빌드 때 실행되는 상황은 신경쓰지 않으셔도 되요.

## 플로팅 모드

플로팅 모드를 통해 개발자 도구를 붙혔다 땠다 할 수 있어요. 스크린의 우측 하단에 리액트 쿼리 로고를 통해 토글할 수 있습니다. 그리고 이 동작은 로컬스토리지에 기록되어 다음에 다시 구동할 때 동일한 동작을 합니다.

다음 코드를 리액트 앱의 최상단에 위치시키세요. 구조적으로 높으면 높을수록 잘 동작합니다.

```tsx
1 import { ReactQueryDevtools } from 'react-query/devtools'
2
3 function App() {
4   return (
5     <QueryClientProvider client={queryClient}>
6       {/* The rest of your application */}
7       <ReactQueryDevtools initialIsOpen={false} />
8     </QueryClientProvider>
9   )
10 }
```

### 옵션

-   `initialIsOpen: Boolean`
    -   어플리케이션을 시작할 때 개발자 도구를 켜려면 이 옵션을 `true`로 주세요.
-   `panelProps: PropsObject`
    -   추적하고 싶은 props를 개발자 도구 패널에 추가하려면 이 필드에 PropsObject 타입 객체를 넣어주세요. 예를 들어 className, style같은 값이요.
-   `closeButtonProps: PropsObject`
    -   Use this to add props to the close button. For example, you can add `className`, `style` (merge and override default style), `onClick` (extend default handler), etc.
    -
-   `toggleButtonProps: PropsObject`
    -   Use this to add props to the toggle button. For example, you can add `className`, `style` (merge and override default style), `onClick` (extend default handler), etc.
    -
-   `position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"`
    -   기본값은 `bottom-left` 입니다.
    -   플로팅 모드를 토글해주는 리액트 쿼리 로고의 위치입니다.

## 임베딩 모드

임베디드 모드는 리액트 컴포넌트로써 어플리케이션에 임베딩됩니다.

```tsx
1 import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
2
3 function App() {
4   return (
5     <QueryClientProvider client={queryClient}>
6       {/* The rest of your application */}
7       <ReactQueryDevtoolsPanel style={styles} className={className} />
8     </QueryClientProvider>
9   )
10 }

```

### 옵션(임베딩 모드)

다음의 옵션들로 임베딩된 개발자 도구를 스타일링할 수 있습니다.

-   `style: StyleObject`
    -   React 컴포넌트를 스타일링할 때 쓰는 기본 스타일 객체입니다.
-   `className: string`
    -   React 컴포넌트를 스타일링할 때 쓰는 className(css) 입니다.
