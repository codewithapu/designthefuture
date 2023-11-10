import { useState } from 'react';
import styles from "@/styles/Pages/designscape.module.scss";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import QRCode from 'qrcode.react';
import Head from 'next/head'

export default function DesignScape() {


    return (
        <>
            <Head>
                <title>
                    Design Scape
                </title>
            </Head>
            <div className={styles.Wraper}>

                <div className={styles.ScreenContainer}>
                    <div className={styles.ContainerOne}>
                        <img className={styles.SwagsPic} src="/Images/Swags.png" />
                        <div className={styles.CardLabel}>
                            <p className={styles.CardSubHeading}>GET CHANCE TO WIN</p>
                            <h1 className={styles.CardTitle}>
                                exclusive rewards
                                <br />
                                on the event day
                            </h1>
                        </div>
                    </div>

                    <div className={styles.ContainerOne}>
                        <img className={styles.SwagsPic} src="/Images/Headphone.png" />
                        <div className={styles.CardLabel}>
                            <p className={styles.CardSubHeading}>challenge to win</p>
                            <h1 className={styles.CardTitle}>
                                a brand new <br />
                                sony headphone
                            </h1>
                        </div>
                    </div>

                    <div className={styles.ContainerTwo}>

                        <div className={styles.CardLabel}>
                            <p className={styles.CardSubHeading}>REGISTER NOW</p>
                            <h1 className={styles.CardTitle}>
                                secure your spot
                                <br />
                            </h1>


                        </div>

                        <div className={styles.InputBox}>
                            <input className={styles.InputBar} type="text" placeholder='enter your name' />
                            <input className={styles.InputBar} type="tel" placeholder='enter your contact number' />
                        </div>


                        <button className={styles.SubmitButton}>
                            pay securely
                        </button>

                    </div>
                </div>

                <div className={styles.ScreenContainer}>
                    <div className={styles.ContainerTwo}>
                        <img className={styles.SwagPic} draggable="false" src="/Images/Swag.png" />
                        <div className={styles.CardLabel}>
                            <p className={styles.CardSubHeading}>JOIN US AND TAKE AWAY</p>
                            <h1 className={styles.CardTitle}>
                                exclusive swags
                                <br />
                                for everyone
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
