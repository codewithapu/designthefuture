import Link from 'next/link'
import styles from "../../styles/Components/NavBar.module.scss"
import { useSession, signIn } from 'next-auth/react'
import React from 'react';
import Image from 'next/image';

export default function NavBar() {
    const { data: session } = useSession()

    const handleAvatarClick = () => {
        if (!session) {
            signIn()
        }
    }
    return (

        <div className={styles.NavBar}>
            <nav className={styles.NavBarContent}>
                <Link href="/" className={styles.HomeLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.Logo} viewBox="0 0 70 74" fill="none">
                        <path d="M69.4853 26.2757L69.5557 0L52.4342 9.51242L52.339 16.1191L52.3816 16.0953L51.9532 69.6571L57.7155 73.0332L57.8188 42.3326L69.7047 42.2713L69.676 36.7144L57.8375 36.7755L57.9174 13.0017L63.9135 9.65089L63.9474 26.2515L69.4853 26.2757Z" fill="#141115" />
                        <path d="M50.6723 10.5538L50.6406 17.1226L44.1064 20.7738L43.9578 64.9372L38.1634 61.5424L38.5152 23.898L31.8207 27.6387L31.8771 21.0606L50.6723 10.5538Z" fill="#141115" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2178 22.036L0 39.1439L30.0685 56.7602L30.2178 22.036ZM25.3919 30.2732L9.59793 39.215L25.3138 48.4225L25.3919 30.2732Z" fill="#141115" />
                    </svg>
                </Link>



                <div className={styles.Buttons}>

                    <Link href="/" className={styles.Button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 58 58" fill="none">
                            <circle cx="29.5" cy="29.5" r="17.25" stroke="#111111" stroke-width="2.5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5 20.5L25.5 25L20.5 38.5L34 33.5L38.5 20.5ZM29.5 32C30.8807 32 32 30.8807 32 29.5C32 28.1193 30.8807 27 29.5 27C28.1193 27 27 28.1193 27 29.5C27 30.8807 28.1193 32 29.5 32Z" fill="#111111" />
                        </svg>
                    </Link>

                    {/* <Link href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 58 58" fill="none">
                            <path d="M38.6601 36.8487C46.5799 27.6044 39.7252 12.8987 27.5273 13.0005C23.676 13.0048 19.9837 14.5367 17.2604 17.2599C14.5372 19.9832 13.0054 23.6755 13.0011 27.5268C12.8552 39.701 27.6291 46.5862 36.8458 38.6572L44.1886 46L46 44.1886L38.6601 36.8487ZM19.0796 35.996C11.5457 28.6183 16.9752 15.4901 27.5277 15.5625C30.6997 15.5661 33.7408 16.8277 35.9837 19.0707C38.2267 21.3137 39.4883 24.3548 39.4918 27.5268C39.5948 38.052 26.4564 43.5007 19.0796 35.996Z" fill="#111111" />
                        </svg>
                    </Link> */}

                    {/* <Link href="#" className={styles.Button}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 58 58" fill="none">
                            <path d="M20.4646 15.0002C18.0405 15.0002 15.6165 15.9233 13.7699 17.7699C10.0767 21.4631 10.0767 27.4662 13.7699 31.1594L29 46.3894L44.2301 31.1594C47.9233 27.4662 47.9233 21.4631 44.2301 17.7699C40.5369 14.0767 34.5339 14.0767 30.8407 17.7699L29 19.6106L27.1593 17.7699C25.3127 15.9233 22.8887 15.0002 20.4646 15.0002ZM20.4646 17.5515C22.2236 17.5515 23.9826 18.2293 25.3413 19.588L29 23.2468L32.6587 19.588C35.3761 16.8707 39.6947 16.8707 42.412 19.588C45.1294 22.3053 45.1294 26.6239 42.412 29.3413L29 42.7533L15.588 29.3413C12.8706 26.6239 12.8706 22.3053 15.588 19.588C16.9466 18.2293 18.7057 17.5515 20.4646 17.5515Z" fill="black" />
                        </svg>
                    </Link> */}


                    <div onClick={handleAvatarClick}>
                        {session?.user?.image ? (
                            <Link href="/profile" className={styles.Button}>
                                <Image
                                    draggable="false"
                                    className={styles.Avatar}
                                    src={session.user.image}
                                    alt="User avatar"
                                    width={35}
                                    height={35}
                                />
                            </Link>
                        ) : (
                            <Link href="/login" className={styles.Button}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 58 58" fill="none">
                                    <path d="M28.3989 11.2256C23.4136 11.2256 19.3446 15.2947 19.3446 20.2799C19.3446 25.2651 23.4136 29.3341 28.3989 29.3341C33.3841 29.3341 37.4531 25.2651 37.4531 20.2799C37.4531 15.2947 33.3841 11.2256 28.3989 11.2256ZM28.3989 13.8126C31.986 13.8126 34.8662 16.6927 34.8662 20.2799C34.8662 23.867 31.986 26.7472 28.3989 26.7472C24.8117 26.7472 21.9315 23.867 21.9315 20.2799C21.9315 16.6927 24.8117 13.8126 28.3989 13.8126ZM19.3446 31.9211C14.3509 31.9211 10.2903 35.9817 10.2903 40.9754V47.4427H11.5838H46.5074V40.9754C46.5074 35.9817 42.4469 31.9211 37.4531 31.9211H19.3446ZM19.3446 34.5081H37.4531C41.0584 34.5081 43.9205 37.3701 43.9205 40.9754V44.8559H12.8772V40.9754C12.8772 37.3701 15.7393 34.5081 19.3446 34.5081Z" fill="#151515" />
                                </svg>
                            </Link>
                        )}

                    </div>

                </div>


            </nav>
        </div>

    );
}