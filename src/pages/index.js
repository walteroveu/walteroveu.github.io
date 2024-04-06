import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SVG  from '@site/static/img/life-key.svg';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     <Heading as="h1" className="hero__title">
    //       {siteConfig.title}
    //     </Heading>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/blog">
    //         博客传送门
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <div class="hero shadow--lw">
      <div class="container">
        <h1 class="hero__title hero--primary">wh</h1>
        <p class="hero__subtitle tracking-in-contract">高山峡谷人为尺 九州四海名为峰</p>
        <SVG role="img" width={50} height={100} className='my-life-key' />
        <div>
          <Link class="button button--secondary button--outline button--lg" to="/blog">
            我的博客
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎浏览 ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
