---
sidebar_position: 3
title: 쿼리 키(Query Keys)
---

# 쿼리 키

리액트 쿼리 코어는 우리를 대신해 unique key를 기반으로 캐시를 관리해줍니다. 쿼리 키는 간단한 문자열만으로도 충분하지만 string 배열이나 여러 뎁스를 가진 객체가 들어와도 됩니다. 특정 데이터에 대해 유일하고 직렬화 가능한 키라면 어떤 키를 써도 무방합니다.

## 단일 쿼리 키

가장 간단한 키의 형태는 그냥 string입니다. 쿼리 키로 string이 주어지면 리액트 쿼리는 내부적으로 이를 배열로 변경합니다. 그 배열 안에는 데이터가 그 string 하나만 존재합니다. 이렇게 사용하면 다음의 경우에 있어 요긴합니다.

-   일반적인 리스트 데이터, 단일 객체 데이터
-   계층화나 중첩된 데이터가 아닐 때

```tsx
// 간단한 TODO 리스트 데이터
useQuery('todos', ...)// queryKey === ['todos']

// 그 밖의 데이터들
useQuery('somethingSpecial', ...)// queryKey === ['somethingSpecial']
```

## 키 배열

어떤 데이터의 키를 묘사하기 위해 더 많은 데이터가 필요한 경우엔 배열을 사용하실 수 있습니다. 이렇게 하면 다음의 경우 요긴합니다.

-   계층화(Hierarchical) 되어있거나 중첩된(nested) 데이터를 묘사할 때
    -   보통 이런 경우엔 id나 index 혹은 그 아이템을 묘사할 유일한 값을 넘겨줍니다.
-   쿼리에 추가 파라미터가 포함되는 경우
    -   보통 이런 경우엔 그 파라미터를 포함시킵니다.

```tsx
// id로 데이터를 불러오는 경우 (parameter로)
useQuery(['todo', 5], ...)
// queryKey === ['todo', 5]

// 특정 key가 포함된 경우
useQuery(['todo', 5, { preview: true }], ...)
// queryKey === ['todo', 5, { preview: true }]

// done 타입으로 필터링된 경우
useQuery(['todos', { type: 'done' }], ...)
// queryKey === ['todos', { type: 'done' }]

```

## 쿼리 키는 결정론적으로(**deterministically**) 해시된다.

쿼리 키가 결정론적으로 해쉬된다는 뜻은 키 객체 내의 프로퍼티 순서와 상관없이 내용만 동일하면 쿼리는 동일한 것으로 간주된다는 것입니다.

```tsx
useQuery(['todos', { status, page }], ...)
useQuery(['todos', { page, status }], ...)
useQuery(['todos', { page, status, other: undefined }], ...)
```

아래의 경우는 조금 다릅니다. 배열 내부 순서가 다르기 때문입니다.

```tsx
useQuery(['todos', status, page], ...)
useQuery(['todos', page, status], ...)
useQuery(['todos', undefined, page, status], ...)
```

## 쿼리 함수가 특정 변수에 의존한다면, 그 변수도 키에 넘겨주세요.

쿼리 키가 페칭한 데이터를 구별하는 유일한 값이기 때문에, 쿼리를 할 때 넘겨줬던 variable는 key에 포함되어야 합니다.

```tsx
function Todos({ todoId }) {
    const result = useQuery(['todos', todoId], () => fetchTodoById(todoId));
}
```

## 레퍼런스

**[이 게시글](https://react-query.tanstack.com/community/tkdodos-blog#8-effective-react-query-keys)** 을 통해 더 자세한 내용을 이해할 수 있습니다.
