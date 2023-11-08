import styles from "@/styles/Pages/designscape.module.scss"
import { useSession } from 'next-auth/react'
import Script from "next/script";

export default function DesignScape() {
    const { data: session } = useSession();
    if (!session) {
        return <p>Please log in to access this page.</p>;
    }


    const hasQRCode = false;
    return (
        <>
            <Script>

            </Script>
            <div className={styles.Wraper}>

                <div className={styles.Container}>
                    <img src="/Images/AssetBanner.png" />
                </div>

                <div className={styles.Container}>

                </div>
            </div>
        </>
    )
}