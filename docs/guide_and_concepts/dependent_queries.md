---
sidebar_position: 6
title: 의존적 쿼리 실행(Dependent Queries)
---

# 순차적 쿼리실행

의존적(순차적) 쿼리 실행은 특정 쿼리가 종료된 후에 실행되도록, 이전 상태에 종속된 쿼리입니다. 이를 구현하는 방식은 enabled 옵션에 준비되었을 때 실행하도록 알리는 수준으로 쉽습니다.

```tsx
// 유저 데이터 페칭
const { data: user } = useQuery(['user', email], getUserByEmail);

const userId = user?.id;

// 그 유저의 프로젝트를 가져오는 쿼리
const { isIdle, data: projects } = useQuery(['projects', userId], getProjectsByUser, {
    // 이 쿼리는 userId값이 없으면 실행되지 않는다.
    enabled: !!userId,
});
```

:::info 예시 설명

isIdle 값은 `enabled`가 true면서 쿼리가 페칭을 시작할 때까지 `true`입니다.

그리고 `isLoading` 값이 변하고, 결국 `isSuccess` 값이 변하겠죠? :)

:::
