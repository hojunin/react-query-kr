---
sidebar_position: 1
title: 리액트 쿼리 톺아보기 (overview)
---

# 리액트 쿼리 톺아보기

리액트 쿼리는 흔히 리액트의 missing(?) 데이터 페칭(fetch) 라이브러리로 알려져있습니다. 하지만 기술적인 관점에서 보면, 리액트 쿼리는 데이터를 페칭하는 작업 뿐만 아니라 **캐싱(caching)**, **동기화(synchronizing)** 및 **업데이트**까지 손쉽게 할 수 있는 올인원 툴입니다.

## 리액트 쿼리는 왜 탄생했을까요?

별도의 설치 없이는 리액트 어플리케이션에서 서버에서 데이터를 가져오거나(fetching) 업데이트(updating)시킬 방법이 없습니다. 그래서 개발자들은 스스로 자신만의 방법대로 구현해서 사용하곤 했죠. 컴포넌트 기반 상태(state)와 훅(hooks)를 조합해서 사용하거나, 더 나아가 전역 상태 관리 라이브러리(Redux, Mobx …)를 활용하여 데이터 통신에 관한 비동기 통신을 구현했습니다.

문제는 위에서 설명한 방식들이 **클라이언트 사이드 상태(Client Side State)** 관리를 위한 방법들이지 **서버 사이드 상태(Server Side State)** 관리나 비동기 데이터 처리를 위한 방법이 아니며, 서버 상태 관리에 좋지 않고 방법도 복잡합니다. 클라이언트 사이드 상태와 서버 사이드 상태는 전혀 다른 개념이기 때문입니다. 이 개념들을 처음 들으시는 분들을 위해 서버 사이드 상태란 다음과 같습니다.

-   가지고 있지 않거나 원격 저장소에 저장된 데이터
-   가져오거나 수정할 때 비동기 API가 필요한 상태
-   Implies shared ownership and can be changed by other people without your knowledge
-   신경쓰지 않으면 최신화되지 않는 데이터

위의 예시에서 서버사이드 상태에 대해 대강 파악되셨다면, 다음의 더 아찔한 상황들도 한번 생각해봅시다.

-   캐싱 (아마 웹 프로그래밍에서 제일 힘든 작업 중 하나죠)
-   여러번의 요청에서 데이터 중복을 제거하는 작업
-   백그라운드의 옛날 데이터를 최신화하는 작업
-   어떤 데이터가 최신화되지 않은 데이터인지 확인하는 작업.
-   최대한 빠르게 데이터를 최신화하기
-   페이지네이션이나 레이지 로딩같은 작업에서 성능 향상하기
-   서버 사이드 상태의 메모리 관리나 가비지 콜렉팅
-   쿼리 결과값을 구조적 공유의 측면에서 메모이제이션

만약 위의 예시들을 보고도 별로 놀라지 않으셨다면 이 글을 보고계시는 개발자님은 아마 위의 문제들을 겪어보고 해결해보셨을 것이며, 그만큼 인정받고 있으실 거에요. 하지만 만약 그런 분이 아닌 대부분의 개발자님들은 거의 대부분의 문제로 고통받고 있으실겁니다.

리액트 쿼리는 서버사이드 상태를 관리하는 최고의 라이브러리 중 하나입니다. 설치만 하면 별다른 설정 없이 최고의 퍼포먼스를 낼 수 있어요. 그리고 서비스에 따라 커스터마이징 할 수 있는 장치도 많죠. 위에서 언급한 다양한 문제들도 해결할 수 있습니다. 쏟아지는 서버사이드 데이터들에 휘둘리기 전에 우리가 휘둘러보자구요 🚀

:::info 프로그래밍의 측면에서 리액트 쿼리는 다음과 같은 **장점**이 있습니다.

-   쓸데없이 많고 복잡한, 오해를 일으키는 코드들을 제거하고, **간단하고 사용하기 쉬운 코드**로 대체해드립니다.
-   **서버사이드 상태 관리**의 걱정 없이 당신의 서비스를 유지보수가능하고 구축하기 쉬운 어플리케이션으로 만들어드려요.
-   서비스 사용자들은 **빠른 속도**와 **반응성**을 체감하게 될거에요.
-   Potentially help you save on bandwidth and increase memory performance

:::

## 설명은 그만하고, 코드를 보여줘! 👀

---

아래 예시에서, 리액트 쿼리로 구현된 가장 기본적이고 단순한 로직을 볼 수 있습니다. 리액트 쿼리 깃허브의 스탯(구독자 수, 스타 수, 포크된 횟수)를 가져와 렌더링하는 페이지입니다.

**[코드 샌드박스에서 테스트해보기](https://codesandbox.io/s/github/tannerlinsley/react-query/tree/master/examples/simple)**

```tsx
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    );
}

function Example() {
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.json()),
    );

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    );
}
```

## 잘 들었습니다. 다음은 뭘 해야하나요?

-   공식 과정인 **[React Query Course](https://ui.dev/react-query?from=tanstack)** 를 들어보셔도 좋을 것 같습니다.
-   저희가 제공하는 문서인 **[가이드 문서](https://react-query.tanstack.com/installation)**  와  **[API 문서](https://react-query.tanstack.com/reference/useQuery) 를 활용하여 스스로 학습해보세요.**
