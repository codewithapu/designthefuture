import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home/Home.module.scss'
import NavBar from '@/pages/components/NavBar'
import React from 'react'


export default function Home() {
  return (
    <>
      <Head>
        <title>Design The Future</title>
      </Head>

      <div className={styles.Wraper}>
        <div className={styles.Hero}>

          <div className={styles.HeroContent}>
            <div className={styles.Title}>
              <h1 className={styles.HeroTitle}>
                designscape
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" fill="none">
                  <path d="M2 2V25.5H25.5V11.9423H23.6923V23.6923H3.80769V3.80772H15.5577V2H2ZM18.2692 2V3.80772H22.4142L13.1109 13.111L14.389 14.389L23.6923 5.08584V9.23076H25.5V2H18.2692Z" fill="black" />
                </svg>
              </h1>
              <p className={styles.HeroDescription}>
                future of design awaits at this epic creative gathering.
              </p>
              <div className={styles.Details}>
                <div className={styles.Date}>
                  <svg className={styles.DateLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" fill="none">
                    <path d="M6.85714 0.5V2.78575H0V32.5H32V2.78575H25.1429V0.5H22.8571V2.78575H9.14286V0.5H6.85714ZM2.28571 5.0715H6.85714V7.35726H9.14286V5.0715H22.8571V7.35726H25.1429V5.0715H29.7143V9.64288H2.28571V5.0715ZM2.28571 11.9286H29.7143V30.2144H2.28571V11.9286ZM6.85714 16.5V18.7858H9.14286V16.5H6.85714ZM14.8571 16.5V18.7858H17.1429V16.5H14.8571ZM22.8571 16.5V18.7858H25.1429V16.5H22.8571ZM6.85714 23.3571V25.6429H9.14286V23.3571H6.85714ZM14.8571 23.3571V25.6429H17.1429V23.3571H14.8571ZM22.8571 23.3571V25.6429H25.1429V23.3571H22.8571Z" fill="black" />
                  </svg>

                  19 NOVEMBER 2023
                </div>
              </div>

              <Link href="/" className={styles.Register}>
                grab YOUR seat
              </Link>
            </div>
            <img src="/Images/HeroBanner.png" className={styles.HeroBanner} />

          </div>
          <div className={styles.Marquee}>
            <Link className={styles.Link} href="/register">
              <p className={styles.MarqueeText}>
                {'Win prizes of worth over $1,000 USD ‎ ‎ ‎ ‎ ‎ | ‎ ‎ ‎ ‎ ‎ '.repeat(10)}
              </p>
            </Link>
          </div>


        </div>

        <div className={styles.DesignAssets}>

          <div className={styles.Container}>
            <div className={styles.Asset}>
              <p className={styles.AssetName}>design trends</p>
              <img src="/Images/AssetBanner.png" className={styles.AssetBanner} />
            </div>

            <div className={styles.Asset}>
              <p className={styles.AssetName}>fonts</p>
              <img src="/Images/AssetBanner.png" className={styles.AssetBanner} />
            </div>

            <div className={styles.Asset}>
              <p className={styles.AssetName}>ux checklist</p>
              <img src="/Images/AssetBanner.png" className={styles.AssetBanner} />
            </div>

            <div className={styles.Asset}>
              <p className={styles.AssetName}>magazines</p>
              <img src="/Images/AssetBanner.png" className={styles.AssetBanner} />
            </div>

            <div className={styles.Asset}>
              <p className={styles.AssetName}>inspiration</p>
              <img src="/Images/AssetBanner.png" className={styles.AssetBanner} />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
