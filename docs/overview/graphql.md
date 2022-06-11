---
sidebar_position: 7
title: 그래프큐엘 (GraphQL)
---

# 그래프큐엘

리액트 쿼리의 페칭 메커니즘이 프로미스 기반이다보니 어떤 비동기 데이터 페칭 클라이언트도 사용 가능합니다. 그래프큐엘도 마찬가지에요.

:::info
다만 주의하실 점은, 리액트 쿼리가 **정규화된 캐시**(normalized cache)를 제공하진 않는다는 점입니다. 생각보다 많은 사람들이 정규화된 캐시에서 이점을 얻지 못하고 있고 이점을 가질만한 환경이 드뭅니다. 그러므로 꼭 정규화된 캐시가 필요한지 다시 한번 생각해보세요!
:::

## 타입 안정성 및 코드 제너레이터

그래프큐엘의 [코드 제너레이터](https://graphql-code-generator.com/)를 사용하시면 그래프큐엘 명세서를 기반으로 **즉각 사용 가능한** 쿼리 훅을 생성해줍니다. 궁금하신 분들은 다음 링크에서 [예제 코드](https://www.graphql-code-generator.com/docs/plugins/typescript-react-query) 를 실행해보실 수 있습니다.

## 예시

[basic-graphql-request](https://react-query.tanstack.com/docs/examples/basic-graphql-request) 기본예제([graphql-request](https://github.com/prisma-labs/graphql-request)를 활용한)
