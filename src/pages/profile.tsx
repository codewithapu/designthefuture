
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
                <meta name="robots" content="noindex" />
                <meta name="googlebot" content="noindex" />
            </Head>

            <link rel="icon" href="./favicon.ico" type="image/x-icon" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={styles.AccounPage}
            >

                <div className={styles.WrapContainer}>
                    <div className={styles.PageTitle}>
                        my account
                    </div>
                    <div className={styles.MainContainer}>
                        <section className={styles.Wraper}>
                            <div className={styles.UserBadge}>
                                {session?.user?.image &&
                                    <Image
                                        className={styles.ProfilePIC}
                                        src={session?.user?.image || defaultAvatar}
                                        alt="User avatar"
                                        width={100}
                                        height={100}
                                        draggable="false"
                                    />
                                }
                            </div>

                            <div className={styles.UserDetails}>
                                <h3 className={styles.BadgeLabel}>
                                    {/* <span className={styles.UserID}>
                                        mahatosupriya
                                    </span> */}
                                </h3>
                                <h1 className={styles.UserName}>
                                    {session?.user?.name}
                                </h1>
                            </div>

                        </section>

                        <form className={styles.AccountData}>
                            {/* <input type='text' className={styles.InputBox} placeholder='your new name' />
                            <input type='text' className={styles.InputBox} placeholder='your new username' />
                            <button type="submit" className={styles.SubmitButton}>update profile</button> */}
                        </form>
                        <button className={styles.LogoutBTN} onClick={handleSignout}>sign out</button>

                    </div>
                </div>

            </motion.div>

        </div>
    );
};

export default Profile;
