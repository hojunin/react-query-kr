---
sidebar_position: 12
title: 페이지네이션 (Paginated Queries)
---

# 페이지네이션 & 지연쿼리

페이지네이션된 데이터를 보여주는 UI 패턴은 굉장히 흔합니다. 이를 구현하기 위해 리액트 쿼리에서는 그저 쿼리 키에 page 데이터를 넣어서 호출하면 됩니다.

```tsx
const result = useQuery(['projects', page], fetchProjects);
```

근데 만약 이 간단한 예제를 실행해보면, UI의 측면에서 뭔가 이상한 점을 느낄 수 있습니다.

:::note 위와 같은 경우 발생하는 _이상한_ 현상

🧑🏼‍💻 다음 페이지 값을 넘긴 쿼리는 새로운 인스턴스로 간주되어 `data` 객체 초기화, `loading`, `success`를 오가며 UI의 측면에서 불편하게 보인다

:::

새로운 페이지에서는 페이지만 바뀐 쿼리가 새로운 쿼리로 간주되어 쿼리 인스턴스의 `status`가 `success`와 `loading` 상태를 UI가 그에 맞게 변경되기 때문입니다(loading, skeleton …)

이와 같은 상황은 최적화가 되지 못한 상황이고 불행히도 수많은 툴들에서 그대로 사용되고 있습니다. 하지만 저희는 다릅니다. 예상하셨다시피 리액트 쿼리에서는 `keepPreviousData` 라는 훌륭한 기능으로 이 문제를 해결했습니다.

## **`keepPreviousData` 를 활용한 페이지네이션**

다음 예시를 통해 생각해봅시다. 이상적으로 페이지 인덱스(혹은 커서)를 증가시켜 쿼리에 전달합니다. 늘 하던대로 `useQurey`를 쓴다면 잘 동작은 하겠지요. 하지만 UI는 각 페이지마다 쿼리 인스턴스가 제거되고 다시 생성되는 바람에 `status`가 `loading`과 `success`를 오고가며 불편하게 보이게 됩니다.

:::tip 이 때  `keepPreviousData` 를 true로 주면 다음의 이점들을 얻을 수 있습니다.

-   쿼리키를 바꿔서 새로 요청한 다음 페이지 데이터가 도착하기 전까지 이전에 성공적으로 받아왔던 데이터를 활용할 수 있습니다.
-   새롭게 요청한 데이터가 도착하면, 이전의 `data` 객체는 부드럽게 새로운 `data` 객체로 대체됩니다.
-   `isPreviousData` 는 어떤 데이터가 현재 쿼리가 제공하는 `data` 객체인지를 알 수 있게 해줍니다.

:::

예시에서 이해해봅시다.

```tsx
function Todos() {
    const [page, setPage] = React.useState(0);

    const fetchProjects = (page = 0) => fetch('/api/projects?page=' + page).then((res) => res.json());

    const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
        ['projects', page],
        () => fetchProjects(page),
        { keepPreviousData: true },
    );

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    {data.projects.map((project) => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </div>
            )}
            <span>Current Page: {page + 1}</span>
            <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 0}>
                Previous Page
            </button>{' '}
            <button
                onClick={() => {
                    if (!isPreviousData && data.hasMore) {
                        setPage((old) => old + 1);
                    }
                }}
                // Disable the Next Page button until we know a next page is available
                disabled={isPreviousData || !data?.hasMore}
            >
                Next Page
            </button>
            {isFetching ? <span> Loading...</span> : null}{' '}
        </div>
    );
}
```

## **`keepPreviousData` 로 무한쿼리(Infinite Query) 결과 지연시키기**

`keepPreviousData` 는 `useInfiniteQuery` 훅 에서도 흠잡을 곳 없이 잘 동작합니다. 그래서 쿼리 키가 변경되는 상황에서도 원활하게 캐시된 데이터를 제공할 수 있습니다.
