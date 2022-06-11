---
sidebar_position: 3
title: 간단하게 시작해보기 (Quick Start)
---

# 간단하게 시작해보기

아래 예제는 간단히 리액트 쿼리의 핵심 컨셉 3개를 설명합니다.

-   **[쿼리](https://react-query.tanstack.com/guides/queries)**
-   **[뮤테이션](https://react-query.tanstack.com/guides/mutations)**
-   **[쿼리 무효화](https://react-query.tanstack.com/guides/query-invalidation)**

```tsx
1 import {
2   useQuery,
3   useMutation,
4   useQueryClient,
5   QueryClient,
6   QueryClientProvider,
7 } from 'react-query'
8 import { getTodos, postTodo } from '../my-api'
9
10// Create a client
11 const queryClient = new QueryClient()
12
13 function App() {
14   return (
15// Provide the client to your App
16     <QueryClientProvider client={queryClient}>
17       <Todos />
18     </QueryClientProvider>
19   )
20 }
21
22 function Todos() {
23// Access the client
24   const queryClient = useQueryClient()
25
26// Queries
27   const query = useQuery('todos', getTodos)
28
29// Mutations
30   const mutation = useMutation(postTodo, {
31     onSuccess: () => {
32// Invalidate and refetch
33       queryClient.invalidateQueries('todos')
34     },
35   })
36
37   return (
38     <div>
39       <ul>
40         {query.data.map(todo => (
41           <li key={todo.id}>{todo.title}</li>
42         ))}
43       </ul>
44
45       <button
46         onClick={() => {
47           mutation.mutate({
48             id: Date.now(),
49             title: 'Do Laundry',
50           })
51         }}
52       >
53         Add Todo
54       </button>
55     </div>
56   )
57 }
58
59 render(<App />, document.getElementById('root'))

```

리액트 쿼리는 위 3개의 컨셉을 기반으로 동작합니다. 다음 섹션에서 이런 기능들을 면밀하게 알아보도록 하겠습니다.
