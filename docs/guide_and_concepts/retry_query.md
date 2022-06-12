---
sidebar_position: 10
title: 쿼리 재시도 (Query Retries)
---

# 쿼리 재시도 (retry)

useQuery 훅에서 쿼리함수가 에러객체를 던진다면, 리액트 쿼리는 재시도 최대횟수(기본값 3)까지 자동적으로 재시도 로직을 수행합니다.

:::tip 재시도 과정은 실패한 상태가 아닙니다.
이 과정에서 `status` 값은 `error`가 아닙니다. 즉, 쿼리 인스턴스가 error 상태임은 알지만 error라고 말하기 전에 알아서 다시 시도해보는 과정입니다.
:::

### 재시도 로직 세팅

아래 설정은 글로벌하게 혹은 개별 쿼리에 각각 넣을 수 있습니다.

-   `retry = false` → 재시도 로직을 수행하지 않습니다.
-   `retry = 6` 에러가 발생했을 때 재시도 로직을 6회 수행합니다.
-   `retry = true` 실패한 쿼리를 성공할 때까지 재시도합니다. (infinitely)
-   `retry = (failureCount, error) => ...` 에러 상황(**현재까지의 재시도 횟수**, **에러 코드**)에 따라 재시도 로직을 커스텀할 수 있습니다.

```tsx
import { useQuery } from 'react-query';

// 특정 쿼리에 특정 횟수만큼의 재시도 로직 설정
const result = useQuery(['todos', 1], fetchTodoListPage, {
    retry: 10, // 실제 에러 상태가 될 때까지 10회 다시시도합니다.
});
```

## 재시도 지연시간(retryDelay)

기본적으로 리액트 쿼리는 실패하자마자 즉시 재시도 로직을 수행하지 않습니다. 약간의 딜레이를 가지고 있고, 이 딜레이는 점진적으로 각 실행 횟수에 따라 증가합니다.

기본 `retryDelay` 옵션 설정은 최초 1초이고 각 실행마다 두배씩 증가합니다. 하지만 30초를 넘기진 않습니다.

```tsx
// 모든 쿼리에 대한 재시도 지연시간 설정
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        },
    },
});

function App() {
    return <QueryClientProvider client={queryClient}>...</QueryClientProvider>;
}
```

권장되는 방법은 아닌데, retryDelay에 함수 대신 **특정 시간**으로 강제할 수 있습니다. 이렇게 되면 재시도할 횟수가 얼마나 많은지에 관계없이 항상 동일한 시간지연 이후 실행될 것입니다.

```tsx
const result = useQuery('todos', fetchTodoList, {
    retryDelay: 1000, // 항상 1초 뒤에 재시도 로직이 수행된다.
});
```
