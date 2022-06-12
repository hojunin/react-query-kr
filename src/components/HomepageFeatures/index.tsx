import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Declarative & Automatic',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                서버에서 데이터를 가져오는 로직을 손쉽게 작성하세요. 간단히 리액트 쿼리에게 데이터가 어디있는지와 어떻게
                처리할지만 말해주면, 나머지는 자동으로 동작합니다. 리액트 쿼리는 별다른 설정 없이도 캐시와 백그라운드
                업데이트 등의 동작을 수행해줍니다.
            </>
        ),
    },
    {
        title: 'Simple & Familiar',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                비동기 로직이 어떻게 동작하는 지 알고 계신가요? 그렇다면 리액트 쿼리를 사용하실 준비가 된겁니다.
                관리해야 할 전역 상태도, 리듀서도, 정규화 시스템도, 복잡한 설정도 필요 없어요. 간단히 데이터를
                가져오는(또는 오류를 뱉는) 함수만 넘겨주면 됩니다.
            </>
        ),
    },
    {
        title: 'Powerful & Configurable',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                React Query is configurable down to each observer instance of a query with knobs and options to fit
                every use-case. It comes wired up with dedicated devtools, infinite-loading APIs, and first class
                mutation tools that make updating your data a breeze. Don't worry though, everything is pre-configured
                for success!
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
