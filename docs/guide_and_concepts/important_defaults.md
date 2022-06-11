---
sidebar_position: 1
title: 기본값
---

# 기본 설정

기본적으로 리액트 쿼리는 강제성(agressive)을 띄지만 동시에 상식적(sane)인 기본 설정을 제공합니다. 종종 이런 기본 설정은 리액트 쿼리를 처음 접하는 유저들에겐 **경계심을 유발**할 수 있고, **괴랄한 러닝커브**나 **디버깅의 어려움**을 유발할 수 있지만, 리액트 쿼리를 계속 사용하실 생각이라면 다음 사실들을 알고계셔야 합니다.

useQuery나 useInfiniteQuery를 통해 생성된 쿼리 인스턴스는 기본적으로 캐시된 데이터를 stale하다고 간주합니다.

:::note staleTime 옵션

이 기본동작을 변경하려면 staleTime 옵션을 특정 쿼리나 전역에서 적용되도록 설정할 수 있습니다. staleTime이 길어진다는 뜻은 쿼리들이 리페칭되는 간격도 넓어진다는 뜻이에요.

:::

- stale상태인 데이터들은 다음의 조건을 만족할 때 리페칭됩니다.
  - 새 쿼리 인스턴스가 마운트되었을 때
  - 화면이 포커스되었을 때
  - 네트워크가 다시 연결되었을 때
  - 쿼리가 리페칭 인터벌에 도달했을 때

만약 의도하지 않은 리페칭 동작이 수행되었을 때, 높은 확률로 그건 화면이 포커스되어서 **refetchOnWindowFocus** 메소드가 실행되었을겁니다. 개발환경에서 이 현상은 더 잘 나타나요. 특히 브라우저 개발자 도구와 개발중인 서비스를 왔다갔다 하다보면 지속적으로 리페칭이 일어날 수 있다는 뜻입니다.

:::note refetch 옵션

이를 제어하시려면 refetchOnMount, refetchOnWindowFocus, refetchOnReconnect and refetchInterval와 같은 옵션을 변경하시면 됩니다.

:::

- 유효하지 않은 useQuery와 useInfiniteQuery 혹은 query observer의 인스턴스의 쿼리 결과는 **_inactive_**라고 라벨링됩니다. 다만, 해당 데이터들은 나중에 사용될지도 모르니 캐시에 남아있게 됩니다.
- 기본적으로 inactive한 쿼리 인스턴스는 5분 뒤에 가비지 컬렉팅됩니다. (데이터는 남아있습니다.)

:::note cacheTime
기본을 설정된 시간을 변경하시려면, cacheTime을 수정하시면 됩니다. 기본값은 1000 x 60 x 5입니다. (5분)
:::

- 실패한 쿼리들은 UI가 에러 객체를 렌더링하기 전, 알아서 3번 재시도합니다. (**with exponential backoff delay**) → 아마도 isError를 true로 변경하기 전에 3번 재시도한다는 뜻 같습니다.

:::note retry 옵션
이 부분을 변경하려면, retry(횟수)와 retryDelay(시간)을 변경해주시면 됩니다.
:::

- 기본적으로 쿼리 결과는 **구조적(structually)**으로 공유되어 데이터가 실제로 변경되었는지 감지하고 변경되지 않은 경우 데이터 참조가 변경되지 않은 상태로 유지되어 useMemo 및 useCallback과 관련된 값 안정화에 더 도움이 됩니다. 이 개념이 생소하게 들린다면 걱정하지 마세요! 대부분의 경우 이 기능을 비활성화할 필요가 없으며 비용 없이 앱의 성능이 향상됩니다

:::note 구조적 값 공유
구조적 값 공유 기능은 JSON에만 적용됩니다. 다른 타입 데이터들은 항상 변화되었다고 간주되요. 만약 성능 이슈를 발견해서, config.structualSharing 플래그에서 이 기능을 꺼버렸다고 합시다. 그럼에도 데이터가 변했다는 사실을 감지해야한다고 한다면, config.isDataEqual에 compare function을 커스텀해서 세팅해주시면 됩니다.
:::

## 레퍼런스

이와 관련하여 더 풍부한 설명을 원하신다면 다음 게시글들을 참고해주세요.

- **[Practical React Query](https://react-query.tanstack.com/community/tkdodos-blog#1-practical-react-query)**
- **[React Query as a State Manager](https://react-query.tanstack.com/community/tkdodos-blog#10-react-query-as-a-state-manager)**
