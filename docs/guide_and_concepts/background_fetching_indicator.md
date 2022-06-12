---
sidebar_position: 7
title: 백그라운드 페칭 확인 변수 (Background Fetching Indicators)
---

# 백그라운드에서 데이터를 가져오고 있는 경우

보통의 경우엔 쿼리가  `status === 'loading'` 상태이면 로딩중임을 알려주는 모달을 띄워주면 됩니다.

하지만 몇몇 경우에서는 데이터를 **백그라운드에**서 가져오고 있다고 알려야할 경우가 있습니다.

이런 경우를 위해 `isFetching`이라는 상태값을 제공합니다. status 값에 관계없이 데이터를 가져오고 있는 상태인겁니다.

```tsx
function Todos() {
    const { status, data: todos, error, isFetching } = useQuery('todos', fetchTodos);

    return status === 'loading' ? (
        <span>Loading...</span>
    ) : status === 'error' ? (
        <span>Error: {error.message}</span>
    ) : (
        <>
            {isFetching ? <div>Refreshing...</div> : null}

            <div>
                {todos.map((todo) => (
                    <Todo todo={todo} />
                ))}
            </div>
        </>
    );
}
```

# 전역에서 백그라운드 페칭 상태 접근하기

개별 쿼리에 적용하는것도 좋지만, **_어떤 쿼리가 지금 백그라운드에서 호출중이다_**라는 사실을 알려야할 경우도 있어요. 이럴 땐 `useIsFetching` 훅을 활용해서, 전역에서 `isFetching` 상태를 확인하세요.

```tsx
import { useIsFetching } from 'react-query';

function GlobalLoadingIndicator() {
    const isFetching = useIsFetching();

    return isFetching ? <div>Queries are fetching in the background...</div> : null;
}
```
