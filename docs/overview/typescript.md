---
sidebar_position: 6
title: 타입스크립트(typeScript)
---

# 타입스크립트

리액트 쿼리는 타입스크립트로 작성된 프레임워크이고, 이를 지원하기 때문에 리액트 쿼리와 타입스크립트를 함께 사용하시면 type-safe한 코드를 작성하실 수 있습니다.

도입 전에 **생각해보셔야 할 점**은 다음과 같습니다.

-   타입스크립트 3.8버전 이상이 필요합니다.
    -   useQueries의 경우, 4.1버전 이상이 필요합니다. 그 이하의 버전을 사용하는 상태에서 useQuereis를 호출할 경우, 모든 데이터가 unknown 타입으로 리턴될 것입니다.
-   타입 관련된 변경은 지속적으로 변경되고 patch(sementic Versioning의 마지막 숫자)로 릴리즈됩니다. 다 수정되면 정식 릴리즈로 배포될지도 모르고요. 😆
    ![시멘틱 버저닝](./img/semver.png)
-   가급적 리액트 쿼리 버전을 특정 버전으로 고정시켜두세요. 그리고 특정 릴리즈에 types가 명확히 고정될 것 같다면 그 때 업그레이드 하도록 하세요.
-   The non-type-related public API of React Query still follows semver very strictly.

## 커스텀 훅을 정의하기

커스텀 훅을 정의할 땐 결과값과 에러 타입을 명확히 넣어줘야합니다. 다음 예시처럼요.

```tsx
1 function useGroups() {
2   return useQuery<Group[], Error>('groups', fetchGroups)
3 }
```

## 읽을거리

커뮤니티 글 중 이 글(**[React Query and TypeScript](https://react-query.tanstack.com/community/tkdodos-blog#6-react-query-and-typescript)** )을 보세요. 리액트 쿼리를 활용한 타입 추론에 도움이 될 거에요.
