import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '站在球场',
    Svg: require('@site/static/img/fun-ball.svg').default,
    description: (
      <>
        无论身处何地 总有一种想去站在球场上的冲动 尽情感受奔跑 跳跃 挥洒汗水
      </>
    ),
  },
  {
    title: '戴上耳机',
    Svg: require('@site/static/img/fun-music.svg').default,
    description: (
      <>
        无论状态如何 戴上耳机 音符会带着你飞跃神圣高原 潜入无底深海 穿过人声鼎沸 领略四季变换
      </>
    ),
  },
  {
    title: '开黑集合',
    Svg: require('@site/static/img/fun-games.svg').default,
    description: (
      <>
        曾经少年 如今依旧 从小霸王的魂斗罗 到 外设齐全的cs 变的是外在 不变的是热爱 你喊我就来
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center main-color-font">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className="main-color-font">{title}</Heading>
        <p className="main-color-font">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
