import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home/Home.module.scss'
import React, { useState } from "react";
import { auth } from '../supabase';
import Footer from './components/Footer';

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
              </h1>
              <p className={styles.HeroDescription}>
                future of design awaits at this epic creative gathering.
              </p>
              <div className={styles.MoreDetails}>
                <Link target='_blank' href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=N2U4a2RydmE3NDc2ODI3NW44cXU4c3ZqZ2wgbWFoYXRvc3Vwcml5YS5vdXRsb29rQG0&amp;tmsrc=mahatosupriya.outlook%40gmail.com" className={styles.Details}>
                  <div className={styles.Date}>
                    <svg className={styles.Logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" fill="none">
                      <path d="M6.85714 0.5V2.78575H0V32.5H32V2.78575H25.1429V0.5H22.8571V2.78575H9.14286V0.5H6.85714ZM2.28571 5.0715H6.85714V7.35726H9.14286V5.0715H22.8571V7.35726H25.1429V5.0715H29.7143V9.64288H2.28571V5.0715ZM2.28571 11.9286H29.7143V30.2144H2.28571V11.9286ZM6.85714 16.5V18.7858H9.14286V16.5H6.85714ZM14.8571 16.5V18.7858H17.1429V16.5H14.8571ZM22.8571 16.5V18.7858H25.1429V16.5H22.8571ZM6.85714 23.3571V25.6429H9.14286V23.3571H6.85714ZM14.8571 23.3571V25.6429H17.1429V23.3571H14.8571ZM22.8571 23.3571V25.6429H25.1429V23.3571H22.8571Z" fill="black" />
                    </svg>

                    26 NOV
                  </div>
                </Link>

                <Link target='_blank' href="https://maps.app.goo.gl/37fuRxHy5qtnfLkz7" className={styles.Details}>
                  <div className={styles.Date}>

                    <svg className={styles.Logo} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M15.8725 1C9.32826 1 4 6.3283 4 12.8725C4 17.6395 6.87363 22.1078 9.64743 25.4363C12.4212 28.7649 15.1979 30.9848 15.1979 30.9848L15.8725 31.5244L16.547 30.9848C16.547 30.9848 19.3237 28.7649 22.0975 25.4363C24.8713 22.1078 27.7449 17.6395 27.7449 12.8725C27.7449 6.3283 22.4167 1 15.8725 1ZM15.8725 3.15866C21.2501 3.15866 25.5863 7.4949 25.5863 12.8725C25.5863 16.7401 23.0634 20.9062 20.4406 24.0535C18.3581 26.5524 16.6411 28.053 15.8725 28.7038C15.1038 28.053 13.3868 26.5524 11.3044 24.0535C8.68157 20.9062 6.15863 16.7401 6.15863 12.8725C6.15863 7.4949 10.4949 3.15866 15.8725 3.15866ZM15.8725 7.47599C12.9048 7.47599 10.4759 9.90483 10.4759 12.8725C10.4759 15.8402 12.9048 18.2691 15.8725 18.2691C18.8401 18.2691 21.269 15.8402 21.269 12.8725C21.269 9.90483 18.8401 7.47599 15.8725 7.47599ZM15.8725 9.63453C17.6735 9.63453 19.1104 11.0715 19.1104 12.8725C19.1104 14.6736 17.6735 16.1105 15.8725 16.1105C14.0714 16.1105 12.6345 14.6736 12.6345 12.8725C12.6345 11.0715 14.0714 9.63453 15.8725 9.63453Z" fill="black" />
                    </svg>

                    RABINDRA BHAWAN, PURULIA
                  </div>
                </Link>
              </div>


              <Link href="/designscape" className={styles.Register}>
                grab YOUR seat
              </Link>
            </div>
            <img src="/Images/HeroBanner.png" draggable="false" className={styles.HeroBanner} />

          </div>
          <div className={styles.Marquee}>
            <Link className={styles.Link} href="/designscape">
              <p className={styles.MarqueeText}>
                {'Win prizes of worth over $1000 USD ‎ ‎ ‎ ‎ ‎ | ‎ ‎ ‎ ‎ ‎ '.repeat(10)}
              </p>
            </Link>
          </div>


        </div>

        <div className={styles.DesignAssets}>

          <div className={styles.Container}>
            <div className={styles.Asset}>
              <p className={styles.AssetName}>fonts</p>
              <div className={styles.AssetBannerContainer}>
                <img src="/Images/AssetBanner.png"  draggable="false" className={styles.AssetBanner} />
              </div>
            </div>

            <div className={styles.Asset}>
              <p className={styles.AssetName}>design trends</p>
              <div className={styles.AssetBannerContainer}>
                <img src="/Images/AssetBanner.png" draggable="false" className={styles.AssetBanner} />
              </div>
            </div>

            <div className={styles.Asset}>
              <p className={styles.AssetName}>design trends</p>
              <div className={styles.AssetBannerContainer}>
                <img src="/Images/AssetBanner.png" draggable="false" className={styles.AssetBanner} />
              </div>
            </div>

            <div className={styles.Asset}>
              <p className={styles.AssetName}>design trends</p>
              <div className={styles.AssetBannerContainer}>
                <img src="/Images/AssetBanner.png" draggable="false" className={styles.AssetBanner} />
              </div>
            </div>

          </div>

        </div>

        <div className={styles.Products}>
          <div className={styles.Container}>
            <img className={styles.Banner} draggable="false" src="/Images/HistoryShow.png" />
          </div>

          <div className={styles.Container}>
            <img className={styles.Banner} draggable="false" src="/Images/HistoryShow.png" />
          </div>
        </div>
      </div>


      <Footer/>
    </>
  )
}
