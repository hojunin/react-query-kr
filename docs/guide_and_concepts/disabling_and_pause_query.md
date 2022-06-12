---
sidebar_position: 10
title: 쿼리 중지 (Disabling/Pausing Queries)
---

# 쿼리 중지하기

만약 useQuery의 기능인 자동 페칭을 사용하고 싶지 않다면 `enabled` 옵션을 `false`로 주면 됩니다.

이렇게 하면 다음과 같은 부수효과가 발생합니다.

-   쿼리할 데이터가 이미 **캐시된 데이터**라면, 쿼리 인스턴스의 상태가 성공으로 변경됩니다. `status === 'success'` or `isSuccess`

-   쿼리할 데이터가 **캐시에 없으면**,쿼리 인스턴스의 상태가 idle로 변경됩니다. `status === 'idle'` or `isIdle`

-   마운트되었을 때 쿼리가 자동으로 실행되지 않습니다.
-   새로운 쿼리 인스턴스가 마운트되었을 때 혹은 생성되었을 때 쿼리는 백그라운드에서 자동으로 리페칭되지 않습니다.
-   The query will ignore query client `invalidateQueries` and `refetchQueries` calls that would normally result in the query refetching.
-   `refetch` 함수가 수동으로 쿼리를 실행하는 트리거 함수 역할을 수행합니다.

```tsx
function Todos() {
    const { isIdle, isLoading, isError, data, error, refetch, isFetching } = useQuery('todos', fetchTodoList, {
        enabled: false,
    });

    return (
        <>
            <button onClick={() => refetch()}>Fetch Todos</button>

            {isIdle ? (
                'Not ready...'
            ) : isLoading ? (
                <span>Loading...</span>
            ) : isError ? (
                <span>Error: {error.message}</span>
            ) : (
                <>
                    <ul>
                        {data.map((todo) => (
                            <li key={todo.id}>{todo.title}</li>
                        ))}
                    </ul>
                    <div>{isFetching ? 'Fetching...' : null}</div>
                </>
            )}
        </>
    );
}
```
