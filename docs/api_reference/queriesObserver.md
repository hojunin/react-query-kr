---
sidebar_position: 14
title: QueriesObserver
---

# 쿼리 옵져버

## **`QueriesObserver`**

`QueriesObserver` 는 여러개의 쿼리를 구독합니다 👀

```tsx
const observer = new QueriesObserver(queryClient, [
    { queryKey: ['post', 1], queryFn: fetchPost },
    { queryKey: ['post', 2], queryFn: fetchPost },
]);

const unsubscribe = observer.subscribe((result) => {
    console.log(result);
    unsubscribe();
});
```

**Options**

`QueriesObserver` 의 옵션은 **`[useQueries](https://react-query.tanstack.com/reference/useQueries)`**의 옵션과 100%일치합니다.
