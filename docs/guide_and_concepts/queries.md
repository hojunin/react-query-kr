---
sidebar_position: 2
title: 쿼리(Queries)
---

# 쿼리

## 쿼리란 무엇인가

A query is a declarative dependency on an asynchronous source of data that is tied to a **unique key**. (뭔소리야 😇)

쿼리는 프로미스 기반 데이터 페칭 메소드 기반으로 사용 가능합니다. 만약 그저 데이터를 조회하는 요청이 아니고 서버 데이터를 변경해야하는 작업이라면 뒤에서 배울 Mutation을 사용하세요.

컴포넌트나 커스텀 훅에서 쿼리를 호출하려면, 다음의 두가지 조건과 함께 useQuery 훅을 호출하면 됩니다.

- 특정 쿼리에 대한 unique한 key값.
- Promise를 리턴하는 함수
  - resolves 일 때 **데이터**를 리턴하거나
  - reject 일 때 **에러 객체**를 리턴하는.

```tsx
1 import { useQuery } from 'react-query'
2
3 function App() {
4   const info = useQuery('todos', fetchTodoList)
5 }
```

위 예시에서 *todos*로 주어진 unique key는 내부적으로 리페칭, 캐싱, 구조적 값 공유 시에 쓰이는 id값입니다.

useQuery가 리턴하는 값에는 렌더링 로직에 필요한 서버사이드 상태 값이 전부 들어있습니다.

```tsx
const result = useQuery("todos", fetchTodoList);
```

### 쿼리 상태 조회

result 객체에는 렌더링 로직에 필요한, 굉장히 중요한 상태값들이 들어있습니다. 쿼리는 **특정 시점**에 **특정 status**만 가집니다. 즉, 한번에 loading, error, success 등을 가지지 못하고 **단 하나의 상태**만 가진다는 뜻입니다.

- `isLoading` or `status === 'loading'` - 아직 데이터를 페칭중이고, 데이터는 없습니다.
- `isError` or `status === 'error'` - 페칭이 끝났고, 페칭 함수가 에러(reject)를 리턴했습니다.
- `isSuccess` or `status === 'success'` - 페칭이 끝났고, 페칭 함수가 데이터(resolve)를 리턴했습니다. 이제 data 객체에 접근할 수 있습니다.
- `isIdle` or `status === 'idle'` - 쿼리가 현재 불능상태입니다. 다른 도큐먼트에서 더 깊게 알아볼 것입니다.

### 상세 정보 조회

기본적으로 위 상태를 거치고 나면, 이제 각 상태에 맞는 디테일한 정보에 접근이 가능합니다.

- `error` - 만약 쿼리의 `status === 'error'` 이면 error 객체에 접근할 수 있습니다.
- `data` - 만약 쿼리의 `status === 'success'` 이면, data 객체에 접근할 수 있습니다.
- `isFetching` - 만약 데이터를 페칭중이면(Promise가 리턴을 안했으면) 최초 페칭이던 리페칭이던 isFetching 값이 true입니다.

아래 예시처럼, 일단 **isLoading**을 체크해서 Promise가 결과를 반환했는지 확인하고, 이를 통과했는데 Promise가 reject를 반환했는지 **isError**로 확인합니다.

두 경우가 모두 아니라면 데이터가 명확히 있으므로, 렌더링 로직을 수행하면 됩니다.

```tsx
function Todos() {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // 이 시점(로딩도 끝낫고, 에러도 없다)에서 데이터가 있다고 확신할 수 있습니다.
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

boolean으로 확인하지 않아도 `status` 값으로 확인할 수 있습니다.

```tsx
function Todos() {
  const { status, data, error } = useQuery("todos", fetchTodoList);

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  // status === 'success'으로 확인할수 있지만 else 로직 처리가..
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## 레퍼런스

추가적인 이해를 위해 **[이 문서를](https://react-query.tanstack.com/community/tkdodos-blog#4-status-checks-in-react-query)**를 추천드립니다.
