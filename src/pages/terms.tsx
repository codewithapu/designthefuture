import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Pages/Terms.module.scss'
import React, { useState } from "react";


export default function Home() {

  return (
    <>
      <Head>
        <title>Design The Future</title>
      </Head>

      <div className={styles.Wraper}>
        <div className={styles.Container}>
          <h1 className={styles.Heading}>
            Terms and Conditions
          </h1>

          <div className={styles.SubPart}>
            <p className={styles.Description}>
              Welcome to Design the Future. These terms and conditions outline the relationship between our users and Design the Future in regard to the use of our website and services. By accessing our platform, you acknowledge and agree to comply with these terms and conditions. If you do not agree with any part of these terms, please refrain from using our services.
            </p>
          </div>

          <div className={styles.SubPart}>
            <h3 className={styles.SubHeading}>
              User Data and Security
            </h3>
            <p className={styles.Description}>
              Upon registration and utilization of our services, Design the Future collects and securely stores user-provided information including usernames, contact numbers, and email addresses. This data is stored for the sole purpose of enhancing user experience and ensuring the security of our platform. We are committed to protecting this information in accordance with our Privacy Policy.
            </p>
          </div>

          <div className={styles.SubPart}>
            <h3 className={styles.SubHeading}>
              Payments and Refunds
            </h3>
            <p className={styles.Description}>
              All payments made for services offered by Design the Future are considered non-refundable. Users understand and acknowledge that once a payment is completed, it is irreversible and non-refundable. Should any issues arise regarding the services provided, users are encouraged to contact our customer support team for resolution.            </p>
          </div>

          <div className={styles.SubPart}>
            <h3 className={styles.SubHeading}>
              Changes to Terms and Conditions
            </h3>
            <p className={styles.Description}>
              Design the Future retains the right to modify these terms and conditions at any time. Users are responsible for regularly reviewing these terms.
            </p>
          </div>


        </div>
      </div>
    </>
  )
}
