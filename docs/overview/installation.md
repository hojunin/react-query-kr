---
sidebar_position: 2
title: 설치 (installation)
---

# 설치

3가지 방법으로 리액트 쿼리를 설치하실 수 있습니다. npm, yarn 아니면 **[unpkg.com](https://unpkg.com/) 를 통해** script로 설치하는 방법입니다.

### **NPM**

```bash
1 $ npm i react-query
2# or
3 $ yarn add react-query
```

React Query is compatible with React v16.8+ and works with ReactDOM and React Native.

리액트 쿼리는 16.8버전 이상의 React에서 동작합니다. React Dom 및 React Native에서도 동작하고요.

:::tip
다운로드 받기 전에 간단히 테스트해보고 싶으시다면 예제를 구동해보세요!
:::

### **CDN**

만약 모듈 번들러나 패키지 매니져를 사용하지 않으신다면 unpkg.com의 CDN을 통해 다운받는 방법이 있습니다. 다음의 script 태그를 HTML 파일에 끼워넣으세요

```html
<script src="https://unpkg.com/react-query/dist/react-query.production.min.js"></script>
```

잘 넣으셨다면, 다음과 같이 window 객체를 통해 접근하실 수 있습니다.

```tsx
window.ReactQuery;
```

:::info
CDN 설치 및 사용 방식엔 React CDN 스크립트 번들이 필요합니다.
:::
