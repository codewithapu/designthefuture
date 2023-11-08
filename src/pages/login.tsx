import React, { MouseEvent } from 'react';
import { signIn } from 'next-auth/react';
import styles from '@/styles/Components/Login.module.scss'
import Link from 'next/link';
import Head from 'next/head';

const LoginPage = () => {
    const handleLogin = (e: MouseEvent, provider: string) => {
        e.preventDefault();
        signIn(provider, { callbackUrl: `${window.location.origin}/` });
    };

    return (
        <>

            <Head>
                <meta name="robots" content="noindex" />
                <meta name="googlebot" content="noindex" />
            </Head>
            <div className={styles.Wraper}>
                <div className={styles.Container}>
                    <div className={styles.OnBoardingBanner}>
                        <img className={styles.Banner} src="/Images/dtf.png" />
                    </div>

                    <div className={styles.LoginBtns}>
                        <div className={styles.Providers}>
                            <button className={styles.GithubBtn} onClick={(e) => handleLogin(e, 'github')}>
                                <div className={styles.Label}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02832 3 3 7.02832 3 12C3 15.9756 5.57813 19.3506 9.15527 20.54C9.60645 20.6221 9.77051 20.3467 9.77051 20.1064C9.77051 19.8926 9.76172 19.3271 9.75879 18.5771C7.25391 19.1191 6.72656 17.3701 6.72656 17.3701C6.31641 16.3301 5.72754 16.0518 5.72754 16.0518C4.91016 15.4951 5.78906 15.5068 5.78906 15.5068C6.69141 15.5713 7.16602 16.4326 7.16602 16.4326C7.96875 17.8096 9.27246 17.4111 9.78516 17.1826C9.86719 16.5996 10.1016 16.2041 10.3564 15.9785C8.3584 15.7529 6.25781 14.9795 6.25781 11.5312C6.25781 10.5469 6.60938 9.74414 7.18359 9.11426C7.09277 8.88867 6.78223 7.97168 7.27149 6.73242C7.27149 6.73242 8.02734 6.49219 9.74707 7.65527C10.4648 7.45605 11.2354 7.35645 12 7.35352C12.7646 7.35645 13.5352 7.45605 14.2529 7.65527C15.9727 6.49219 16.7256 6.73242 16.7256 6.73242C17.2178 7.97168 16.9102 8.88867 16.8164 9.11426C17.3936 9.74414 17.7393 10.5469 17.7393 11.5312C17.7393 14.9883 15.6357 15.7471 13.6318 15.9727C13.9541 16.248 14.2412 16.7988 14.2412 17.6367C14.2412 18.8408 14.2324 19.8105 14.2324 20.1064C14.2324 20.3467 14.3936 20.6279 14.8506 20.54C18.4248 19.3477 21 15.9756 21 12C21 7.02832 16.9717 3 12 3Z" fill="#515151" />
                                    </svg>
                                    Login with GitHub

                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                                    <path d="M0.400024 0.0484153L0.400024 1.75604C0.400024 2.55962 0.584186 3.24602 0.952493 3.81523C1.33755 4.40119 1.88164 4.79461 2.58478 4.9955L2.58479 7.00447C1.88165 7.20537 1.33755 7.59042 0.952493 8.15964C0.584186 8.74558 0.400024 9.44036 0.400024 10.2439L0.400024 11.9516H2.55967L2.55967 10.47C2.55967 9.43198 2.8359 8.58655 3.38837 7.93362C3.94084 7.2807 4.71094 6.95425 5.69868 6.95425H6.00002L6.00002 5.04573H5.69868C4.71094 5.04573 3.94084 4.71926 3.38837 4.06635C2.8359 3.41343 2.55967 2.568 2.55967 1.53003V0.0484153H0.400024Z" fill="#515151" />
                                </svg>
                            </button>

                            <button className={styles.GoogleBtn} onClick={(e) => handleLogin(e, 'google')}>

                                <div className={styles.Label}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M14.545 12.239V16.06H19.99C19.278 18.375 17.343 20.032 14.545 20.032C11.213 20.032 8.51197 17.331 8.51197 14C8.51197 10.669 11.213 7.968 14.545 7.968C16.043 7.968 17.411 8.517 18.466 9.421L21.28 6.607C19.503 4.988 17.139 4 14.545 4C9.02097 4 4.54297 8.477 4.54297 14C4.54297 19.523 9.02097 24 14.545 24C22.941 24 24.794 16.15 23.971 12.252L14.545 12.239Z" fill="#515151" />
                                    </svg>
                                    Login with Google
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                                    <path d="M0.400024 0.0484153L0.400024 1.75604C0.400024 2.55962 0.584186 3.24602 0.952493 3.81523C1.33755 4.40119 1.88164 4.79461 2.58478 4.9955L2.58479 7.00447C1.88165 7.20537 1.33755 7.59042 0.952493 8.15964C0.584186 8.74558 0.400024 9.44036 0.400024 10.2439L0.400024 11.9516H2.55967L2.55967 10.47C2.55967 9.43198 2.8359 8.58655 3.38837 7.93362C3.94084 7.2807 4.71094 6.95425 5.69868 6.95425H6.00002L6.00002 5.04573H5.69868C4.71094 5.04573 3.94084 4.71926 3.38837 4.06635C2.8359 3.41343 2.55967 2.568 2.55967 1.53003V0.0484153H0.400024Z" fill="#515151" />
                                </svg>
                            </button>
                        </div>
                        {/* <Link className={styles.GuestLink} href="/">continue <span>without login</span></Link> */}
                    </div>
                </div>




            </div>

        </>
    );
};

export default LoginPage;
