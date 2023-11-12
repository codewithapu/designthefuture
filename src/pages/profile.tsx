
import styles from '@/styles/Pages/Account.module.scss';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import { MouseEvent } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link';

const defaultAvatar = '/images/avatar.jpg';

const Profile: React.FC = () => {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        // If no session exists, navigate to the root directory
        if (!session) {
            router.push('/')
        }
    }
    
    , [session, router])

    const handleSignout = (e: MouseEvent) => {
        e.preventDefault()
        signOut()
    }

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <title>Design The Future | Account</title>
                <meta name="robots" content="noindex"/>
                <meta name="googlebot" content="noindex"/>
            </Head>

            <link rel="icon" href="./favicon.ico" type="image/x-icon" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >

                <div>
                    <section className={styles.Wraper}>
                        <div className={styles.UserBadge}>
                            <div className={styles.Badge}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                    <path d="M19.8424 40.3461C19.1055 39.1513 18.3687 38.1737 18.2213 38.1737C18.074 38.1737 17.1897 38.8254 16.2687 39.622C15.3476 40.4186 14.4266 41.0703 14.2424 41.0703C14.0213 41.0703 13.6529 39.9117 13.4318 38.5358C12.9529 35.7117 13.1003 35.7841 10.1529 36.9427C9.48974 37.2323 8.60553 37.4496 8.20027 37.4496C7.53711 37.4496 7.50027 37.3048 7.75816 36.1099C7.90553 35.3496 8.0529 34.1548 8.0529 33.4668C8.08974 32.1996 8.08974 32.1996 5.58448 32.091C4.22132 32.0186 3.11606 31.8375 3.11606 31.6203C3.11606 31.4392 3.63185 30.3892 4.25816 29.2668C4.88448 28.1806 5.36342 27.2392 5.28974 27.203C5.21606 27.1306 4.22132 26.8048 3.11606 26.4427C-0.0523644 25.3927 -0.0892063 25.2841 2.195 23.4375C3.30027 22.5323 4.22132 21.6634 4.22132 21.5186C4.22132 21.3737 3.37395 20.5772 2.37921 19.7444C1.34764 18.9117 0.537109 18.0789 0.537109 17.8979C0.537109 17.753 1.45816 17.3186 2.56343 16.9927C5.40027 16.0875 5.58448 15.7617 4.22132 13.6979C3.63185 12.7565 3.11606 11.7789 3.11606 11.5255C3.11606 11.0548 6.395 10.5117 7.31606 10.8737C8.20027 11.1996 8.38448 10.2944 7.94237 7.94097C7.72132 6.78235 7.61079 5.73235 7.72132 5.58752C7.83185 5.44269 8.86343 5.69614 10.0055 6.16683C11.1845 6.63752 12.3266 7.0358 12.5845 7.0358C12.8055 7.0358 13.174 5.94959 13.4318 4.50131C13.6529 3.12545 13.9845 1.96683 14.1687 1.96683C14.3161 1.96683 15.274 2.61855 16.3055 3.41511C17.3003 4.21166 18.2213 4.86338 18.3318 4.86338C18.4424 4.86338 19.1424 3.8858 19.9161 2.69097C20.6529 1.49614 21.3161 0.518555 21.3897 0.518555C21.4266 0.518555 22.0897 1.49614 22.8634 2.69097C23.6003 3.8858 24.3371 4.86338 24.4845 4.86338C24.6318 4.86338 25.5161 4.21166 26.4371 3.41511C27.3582 2.61855 28.2424 1.96683 28.4634 1.96683C28.6476 1.96683 29.0161 3.01683 29.274 4.32028C29.5318 5.62373 29.8634 6.74614 30.0108 6.85476C30.1582 6.92718 31.1529 6.67373 32.2582 6.27545C33.3634 5.87718 34.4318 5.51511 34.6161 5.4789C35.0213 5.40649 35.0582 6.05821 34.6897 8.73752C34.4318 10.5841 34.4318 10.5841 37.195 10.8375C38.7055 10.9823 39.9582 11.1634 39.9582 11.272C39.9582 11.3444 39.3687 12.322 38.6687 13.4082C37.0845 15.7979 37.195 16.0513 40.3266 16.9927C41.5424 17.3548 42.5371 17.753 42.5371 17.8617C42.5003 17.9703 41.5792 18.803 40.5108 19.7082C39.4055 20.5772 38.4845 21.4099 38.4845 21.5186C38.4845 21.6272 39.4055 22.4599 40.5108 23.4013C42.795 25.2841 42.7582 25.4289 39.5161 26.4427C38.3371 26.8048 37.3792 27.1668 37.3792 27.2755C37.3792 27.3841 37.9687 28.4341 38.6687 29.5927C39.3687 30.7513 39.9582 31.7651 39.9582 31.8737C39.9582 31.9461 38.7055 32.0186 37.195 32.0186C34.1003 32.0186 34.2476 31.8375 34.8003 35.0599C34.9845 36.2186 35.0582 37.341 34.9476 37.4858C34.8371 37.6668 33.695 37.4134 32.3687 36.9065C29.974 36.0375 29.974 36.0375 29.6792 36.8341C29.495 37.2686 29.274 38.391 29.1266 39.3686C28.9792 40.3099 28.6845 41.0703 28.4634 41.0703C28.2792 41.0703 27.3582 40.4186 26.4371 39.622C25.5161 38.8254 24.6318 38.1737 24.4476 38.1737C24.3003 38.1737 23.5634 39.1513 22.8266 40.3461C22.0897 41.541 21.4266 42.5186 21.3529 42.5186C21.2792 42.5186 20.6161 41.541 19.8424 40.3461Z" fill="url(#paint0_linear_413_1373)" />
                                    <path d="M19.4003 30.1719C13.7634 29.0857 10.6319 23.6184 12.5477 18.1874C14.2792 13.0822 20.5056 10.4753 25.3687 12.7926C30.1213 15.0736 32.074 18.8753 30.7108 23.2926C29.3108 27.927 24.5582 30.2805 23.2687 26.9857C22.9371 26.0443 22.7529 25.9357 21.6845 26.1167C18.7003 26.5874 16.3792 24.596 16.3792 21.5908C16.3792 18.2236 18.4055 16.0874 21.6477 16.0874C23.1213 16.0874 23.6371 16.2684 24.4477 17.1012C25.0003 17.6443 25.5898 18.3322 25.7003 18.6219C25.8845 19.0201 25.995 19.0564 26.1792 18.7305C26.474 18.0788 27.4319 18.1512 27.4319 18.8029C27.4319 19.1288 26.7687 20.6857 25.9213 22.2788C24.1898 25.6822 24.1161 27.0581 25.6634 27.2391C27.7634 27.4926 30.3792 22.0977 29.6056 19.2012C28.8319 16.2684 25.995 13.8426 22.7898 13.3357C19.3266 12.7926 15.3845 15.0374 13.9845 18.3322C13.2845 20.0339 13.2477 23.4012 13.9477 24.7046C15.1266 26.9132 18.6266 29.0857 21.0213 29.1219C22.3845 29.1219 22.7898 29.4477 22.2371 30.0995C21.7582 30.6064 21.6845 30.6426 19.4003 30.1719ZM25.074 21.1201C25.074 19.0564 23.3792 17.3908 21.2792 17.3908C19.1792 17.3908 17.4845 19.0564 17.4845 21.1201C17.4845 23.1839 19.1792 24.8495 21.2792 24.8495C23.3792 24.8495 25.074 23.1839 25.074 21.1201Z" fill="white" />
                                    <defs>
                                        <linearGradient id="paint0_linear_413_1373" x1="0.537109" y1="0.518555" x2="46.064" y2="4.77252" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#6C5981" />
                                            <stop offset="0.201325" stop-color="#ED6275" />
                                            <stop offset="0.402167" stop-color="#92BD2D" />
                                            <stop offset="0.565944" stop-color="#A237BD" />
                                            <stop offset="0.755208" stop-color="#1756CA" />
                                            <stop offset="1" stop-color="#E3A912" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            {session?.user?.image &&
                                <Image
                                    className={styles.ProfilePIC}
                                    src={session?.user?.image || defaultAvatar}
                                    alt="User avatar"
                                    width={100}
                                    height={100}
                                />
                            }
                        </div>

                        <div className={styles.UserDetails}>
                            <h3 className={styles.BadgeLabel}>CREATOR</h3>
                            {/* <Link href="/creator">Create Creator Account</Link> */}
                            <h1 className={styles.UserName}>
                                {session?.user?.name}
                                <img className={styles.Verified} src="./images/verified.png" />
                            </h1>
                        </div>

                        <button className={styles.LogoutBTN} onClick={handleSignout}>Logout</button>
                    </section>
                </div>
            </motion.div>

        </div>
    );
};

export default Profile;
