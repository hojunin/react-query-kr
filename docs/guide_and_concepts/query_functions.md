---
sidebar_position: 4
title: 쿼리 함수(Query Function)
---

# 쿼리 함수

쿼리함수는 말 그대로 프로미스를 리턴하는 함수입니다.

:::info

대신 그 프로미스는 꼭 **resolve**와 **reject**에서 각각 데이터와 에러객체를 리턴해줘야합니다.

:::

예를 들어 아래 쿼리들은 전부 유효한 쿼리함수입니다.

```tsx
useQuery(['todos'], fetchAllTodos);
useQuery(['todos', todoId], () => fetchTodoById(todoId));
useQuery(['todos', todoId], async () => {
    const data = await fetchTodoById(todoId);
    return data;
});
useQuery(['todos', todoId], ({ queryKey }) => fetchTodoById(queryKey[1]));
```

## 에러 핸들링

리액트 쿼리가 에러가 발생했는지 알기 위해선 쿼리함수에서 반드시 에러 객체를 던져야(**throw**)합니다. 쿼리함수에서 뱉은 에러객체는 `error` state에 저장됩니다.

```tsx
const { error } = useQuery(['todos', todoId], async () => {
    if (somethingGoesWrong) {
        throw new Error('Oh no!');
    }

    return data;
});
```

## **`fetch` API는 에러객체를 자동으로 던져주지 않아요.**

흔히 사용되는 HTTP Client인 `axios`나 `graphql-request`의 경우 별다른 설정 없이도 request가 실패하면 에러 객체를 던져줍니다. 하지만 fetch같은 API는 그렇지 않아요. 이런 경우엔 별도로 에러객체를 던져주셔야 합니다. 아래 예시처럼요.

```tsx
useQuery(['todos', todoId], async () => {
    const response = await fetch('/todos/' + todoId);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
});
```

## 쿼리 함수 변수

쿼리 키는 받아온 데이터의 유일성을 보증하는 값이기도 하지만, 편리하게 파라미터를 쿼리 함수에 넘기는 용도로도 사용할 수 있습니다. 필요하다면 함수를 확장해서 다음과 같이 사용해보세요.

```tsx
function Todos({ status, page }) {
    const result = useQuery(['todos', { status, page }], fetchTodoList);
}

// Access the key, status and page variables in your query function!
function fetchTodoList({ queryKey }) {
    const [_key, { status, page }] = queryKey;
    return new Promise();
}
```

## **파라미터 대신 쿼리 객체 사용하기**

리액트 쿼리의 API를 통해 쿼리 키와 쿼리함수, 옵션을 넘기는 방식은 다음과 같이 쓰셔도 좋습니다.

-   `[queryKey, queryFn, config]`

```tsx
import { useQuery } from 'react-query';

useQuery({
    queryKey: ['todo', 7],
    queryFn: fetchTodo,
    ...config,
});
```
