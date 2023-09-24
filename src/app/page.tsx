import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home/page.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>DTF Home</title>
      </Head>
      <main>
        <section className={styles.HeroContainer}>

          <div className={styles.OverlayText}>
            <h1 className={styles.Title}> Design The Future</h1>

          </div>

          <div className={styles.AnimatedBackground}>
            <div className={styles.BlurCover}>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
              <div className={styles.BlurComponent}></div>
            </div>
            <img src="/Elipse.png"  className={styles.Ellipse}/>

          </div>
        </section>
      </main>
    </>
  )
}
