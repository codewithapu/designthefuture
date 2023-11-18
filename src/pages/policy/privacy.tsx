import Link from 'next/link'
import Head from 'next/head'
import styles from '@/styles/Pages/Terms.module.scss'
import React, { useState } from "react";


export default function Home() {

  return (
    <>
      <Head>
        <title>Design The Future | Privacy Policy</title>
      </Head>

      <div className={styles.Wraper}>
        <div className={styles.Container}>
          <h1 className={styles.Heading}>
            Privacy Policy
          </h1>

          <div className={styles.SubPart}>
            <p className={styles.Description}>
              Last Updated on <b>19th Nov 2023</b>
            </p>
          </div>

          <div className={styles.SubPart}>
            <p className={styles.Description}>
              This privacy policy sets out how Edu Burner uses and protects any information that you give Edu Burner when you use this website.

              Edu Burner is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.

              Edu Burner may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.
            </p>
          </div>

          <div className={styles.SubPart}>
            <h3 className={styles.SubHeading}>
              We may collect the following information:
            </h3>
            <div className={styles.Description}>
              <ul className={styles.List}>
                <li>
                  Name and job title
                </li>
                <li>
                  Contact information including email address
                </li>
                <li>
                  Demographic information such as postcode, preferences and interests
                </li>
                <li>
                  Other information relevant to customer surveys and/or offers
                </li>
              </ul>

            </div>
          </div>

          <div className={styles.SubPart}>
            <h3 className={styles.SubHeading}>
              What we do with the information we gather
            </h3>
            <div className={styles.Description}>
              We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
              <ul className={styles.List}>
                <li>
                  Internal record keeping.
                </li>
                <li>
                  We may use the information to improve our products and services.
                </li>
                <li>
                  We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
                </li>
                <li>
                  From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.
                </li>

                We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.
              </ul>

            </div>
          </div>

          <div className={styles.SubPart}>
            <h1 className={styles.SubHeading}>
              How we use cookies
            </h1>
            <p className={styles.Description}>
              A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyses web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
              <br />
              We use traffic log cookies to identify which pages are being used. This helps us analyses data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
              <br />
              Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
              <br />
              You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
            </p>
          </div>

          <div className={styles.SubPart}>
            <h1 className={styles.SubHeading}>
              Controlling your personal information
            </h1>
            <div className={styles.Description}>
              You may choose to restrict the collection or use of your personal information in the following ways:
              <ul className={styles.List}>
                <li>
                  whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes
                </li>
                <li>
                  if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at designthefuturemail@gmail.com
                </li>
              </ul>

              We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
              <br />
              If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.
            </div>
          </div>



        </div>
      </div>
    </>
  )
}
