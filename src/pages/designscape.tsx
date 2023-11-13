import { useState } from 'react';
import styles from "@/styles/Pages/designscape.module.scss";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import QRCode from 'qrcode.react';
import Head from 'next/head'
import Link from 'next/link';
import React, { useRef } from 'react';

import { useEffect } from 'react';

export default function DesignScape() {



    const [badgeGenerated, setBadgeGenerated] = useState(false);
    const userImageRef = useRef<HTMLImageElement>(null);
    const previewRef = useRef<HTMLImageElement>(null);

    const defaultBadgeImage = '/badge.png';

    useEffect(() => {
        // Initially display the badge.png
        if (previewRef.current) {
            previewRef.current.src = defaultBadgeImage;
        }
    }, []);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (event) {
                userImageRef.current?.setAttribute('src', event.target?.result as string);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const generateBadge = () => {
        if (userImageRef.current) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            if (ctx) {
                const badgeImage = new Image();
                badgeImage.src = '/badge.png'; // Using the badge image from the public folder

                const userImage = userImageRef.current;
                const aspectRatio = userImage.width / userImage.height;

                badgeImage.onload = () => {
                    const badgeWidth = badgeImage.width;
                    const badgeHeight = badgeImage.height;

                    canvas.width = badgeWidth;
                    canvas.height = badgeHeight;

                    // Draw the user image on the canvas
                    const maxUserImageWidth = badgeWidth * 0.8;
                    const maxUserImageHeight = maxUserImageWidth / aspectRatio;

                    const x = (badgeWidth - maxUserImageWidth) / 2;
                    const y = (badgeHeight - maxUserImageHeight) / 2;

                    ctx.drawImage(userImage, x, y, maxUserImageWidth, maxUserImageHeight);

                    // Draw the badge image on top
                    ctx.drawImage(badgeImage, 0, 0, badgeWidth, badgeHeight);

                    if (previewRef.current) {
                        previewRef.current.src = canvas.toDataURL('image/png');
                    }

                    // Set badgeGenerated to true after badge generation
                    setBadgeGenerated(true);
                };
            }
        }
    };

    const downloadBadge = () => {
        if (previewRef.current) {
            const link = document.createElement('a');
            link.href = previewRef.current.src;
            link.download = 'DesignScape.png';
            link.click();
        }
    };


    return (
        <>
            <Head>
                <title>
                    Design Scape
                </title>
                <link rel='icon' href="./favicon.ico" />

            </Head>

            <div className={styles.PaymentOverlay}>
                <div className={styles.Container}>
                    <h1 className={styles.OverlayLabel}>
                        pay <br />
                        securely
                    </h1>

                    <div className={styles.UPI}>
                        <p className={styles.UPILabel}>
                            SCAN AND PAY USING UPI
                        </p>
                        <img className={styles.UPIQR} src="https://ik.imagekit.io/designthefuture/Essentials/UPI.png?updatedAt=1699635404992" draggable="false" />
                    </div>

                    <div className={styles.BottomButtons}>
                        <div className={styles.Buttons}>
                            <button className={styles.WhatsappButton}>
                                <a className={styles.LinkToWhatsapp} href="//wa.me/917029008284/" target='_blank'>
                                    <svg className={styles.WhatsappLogo} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <path d="M16 1.28027C7.88352 1.28027 1.28 7.88379 1.28 16.0003C1.28 18.5347 1.93472 21.0268 3.17632 23.2259L1.30368 29.9075C1.24224 30.127 1.30176 30.3625 1.46048 30.5257C1.58272 30.6518 1.74912 30.7203 1.92 30.7203C1.9712 30.7203 2.02304 30.7139 2.0736 30.7017L9.04704 28.9744C11.1763 30.1174 13.5744 30.7203 16 30.7203C24.1165 30.7203 30.72 24.1168 30.72 16.0003C30.72 7.88379 24.1165 1.28027 16 1.28027ZM23.4048 21.1945C23.0899 22.0662 21.5795 22.8617 20.8538 22.9686C20.2022 23.064 19.3779 23.1049 18.473 22.8208C17.9245 22.648 17.2205 22.4188 16.3187 22.0342C12.528 20.4176 10.0525 16.6486 9.86304 16.3996C9.67424 16.1507 8.32 14.3766 8.32 12.5404C8.32 10.7043 9.296 9.80123 9.64288 9.42747C9.98976 9.05371 10.3987 8.96027 10.6509 8.96027C10.903 8.96027 11.1546 8.96347 11.3754 8.97371C11.6077 8.98523 11.9194 8.88603 12.2259 9.61435C12.5408 10.3619 13.2966 12.198 13.3901 12.3856C13.4848 12.5724 13.5475 12.7907 13.4221 13.0396C13.2966 13.2886 13.2339 13.4441 13.0445 13.6624C12.855 13.8806 12.6477 14.1488 12.4774 14.3164C12.288 14.5027 12.0915 14.7043 12.3117 15.078C12.5318 15.4518 13.2902 16.6736 14.4141 17.663C15.8573 18.934 17.0752 19.3283 17.4528 19.5152C17.8304 19.702 18.0512 19.6707 18.2714 19.4217C18.4915 19.1721 19.216 18.3318 19.4675 17.9587C19.719 17.5856 19.9712 17.647 20.3181 17.7718C20.665 17.896 22.5229 18.7984 22.9005 18.9852C23.2781 19.1721 23.5302 19.2656 23.625 19.4211C23.7197 19.576 23.7197 20.3235 23.4048 21.1945Z" fill="white" />
                                    </svg>
                                    share receipt on whatsapp
                                </a>
                            </button>

                            <button className={styles.PaidButton}>
                                i have paid successfully
                            </button>
                        </div>


                        <p className={styles.Note}>
                            Don't forget to share your receipt on WhatsApp*
                        </p>
                    </div>

                </div>


            </div>
            <div className={styles.Wraper}>
                <div className={styles.Hero}>
                    <div className={styles.Header}>
                        <h2 className={styles.PageSubHeading}>INDIA'S BIGGEST DESIGN EVENT</h2>
                        <h1 className={styles.PageTitle}>design scape</h1>
                    </div>

                    <div className={styles.Features}>
                        <Link target='_blank' href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=N2U4a2RydmE3NDc2ODI3NW44cXU4c3ZqZ2wgbWFoYXRvc3Vwcml5YS5vdXRsb29rQG0&amp;tmsrc=mahatosupriya.outlook%40gmail.com" className={styles.Feature}>
                            <svg className={styles.FeatureIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" fill="none">
                                <path d="M6.85714 0.5V2.78575H0V32.5H32V2.78575H25.1429V0.5H22.8571V2.78575H9.14286V0.5H6.85714ZM2.28571 5.0715H6.85714V7.35726H9.14286V5.0715H22.8571V7.35726H25.1429V5.0715H29.7143V9.64288H2.28571V5.0715ZM2.28571 11.9286H29.7143V30.2144H2.28571V11.9286ZM6.85714 16.5V18.7858H9.14286V16.5H6.85714ZM14.8571 16.5V18.7858H17.1429V16.5H14.8571ZM22.8571 16.5V18.7858H25.1429V16.5H22.8571ZM6.85714 23.3571V25.6429H9.14286V23.3571H6.85714ZM14.8571 23.3571V25.6429H17.1429V23.3571H14.8571ZM22.8571 23.3571V25.6429H25.1429V23.3571H22.8571Z" fill="black" />
                            </svg>
                            26 nov
                        </Link>

                        <Link target='_blank' href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=N2U4a2RydmE3NDc2ODI3NW44cXU4c3ZqZ2wgbWFoYXRvc3Vwcml5YS5vdXRsb29rQG0&amp;tmsrc=mahatosupriya.outlook%40gmail.com" className={styles.Feature}>
                            <svg className={styles.FeatureIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                                <path d="M16 0.5C7.17698 0.5 0 7.67697 0 16.5C0 25.323 7.17698 32.5 16 32.5C24.823 32.5 32 25.323 32 16.5C32 7.67697 24.823 0.5 16 0.5ZM16 2.78562C23.5877 2.78562 29.7143 8.9123 29.7143 16.5C29.7143 24.0877 23.5877 30.2142 16 30.2142C8.41227 30.2142 2.28571 24.0877 2.28571 16.5C2.28571 8.9123 8.41227 2.78562 16 2.78562ZM14.8571 6.21425V17.6429H26.2857V15.3571H17.1429V6.21425H14.8571Z" fill="black" />
                            </svg>
                            8.30 PM TO 5 PM
                        </Link>

                        <Link target='_blank' href="https://maps.app.goo.gl/37fuRxHy5qtnfLkz7" className={styles.Feature}>
                            <svg className={styles.FeatureIcon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M15.8725 1C9.32826 1 4 6.3283 4 12.8725C4 17.6395 6.87363 22.1078 9.64743 25.4363C12.4212 28.7649 15.1979 30.9848 15.1979 30.9848L15.8725 31.5244L16.547 30.9848C16.547 30.9848 19.3237 28.7649 22.0975 25.4363C24.8713 22.1078 27.7449 17.6395 27.7449 12.8725C27.7449 6.3283 22.4167 1 15.8725 1ZM15.8725 3.15866C21.2501 3.15866 25.5863 7.4949 25.5863 12.8725C25.5863 16.7401 23.0634 20.9062 20.4406 24.0535C18.3581 26.5524 16.6411 28.053 15.8725 28.7038C15.1038 28.053 13.3868 26.5524 11.3044 24.0535C8.68157 20.9062 6.15863 16.7401 6.15863 12.8725C6.15863 7.4949 10.4949 3.15866 15.8725 3.15866ZM15.8725 7.47599C12.9048 7.47599 10.4759 9.90483 10.4759 12.8725C10.4759 15.8402 12.9048 18.2691 15.8725 18.2691C18.8401 18.2691 21.269 15.8402 21.269 12.8725C21.269 9.90483 18.8401 7.47599 15.8725 7.47599ZM15.8725 9.63453C17.6735 9.63453 19.1104 11.0715 19.1104 12.8725C19.1104 14.6736 17.6735 16.1105 15.8725 16.1105C14.0714 16.1105 12.6345 14.6736 12.6345 12.8725C12.6345 11.0715 14.0714 9.63453 15.8725 9.63453Z" fill="black" />
                            </svg>
                            RABINDRA BHAWAN, PURULIA
                        </Link>
                    </div>

                </div>

                <div className={styles.Cards}>
                    <div className={styles.ScreenContainer}>
                        <div className={styles.ContainerOne}>
                            <img className={styles.SwagsPic} draggable="false" src="/Images/Swags.png" />
                            <div className={styles.CardLabel}>
                                <p className={styles.CardSubHeading}>GET CHANCE TO WIN</p>
                                <h1 className={styles.CardTitle}>
                                    exclusive rewards
                                    <br />
                                    on the event day
                                </h1>
                            </div>
                        </div>

                        <div className={styles.SonyContainer}>
                            <img className={styles.SwagsPic} draggable="false" src="https://ik.imagekit.io/designthefuture/Essentials/Sony.png?updatedAt=1699729586483" />
                            <div className={styles.CardLabel}>
                                <p className={styles.CardSubHeading}>challenge to win</p>
                                <h1 className={styles.CardTitle}>
                                    a brand new <br />
                                    sony headphone
                                </h1>

                                <Link href="/" className={styles.SubmitButton}>
                                    view challenge
                                </Link>
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
                                <input className={styles.InputBar} type="text" placeholder='your name' />
                                <input className={styles.InputBar} type="tel" placeholder='your whatsapp number' />
                            </div>


                            <button className={styles.SubmitButton}>
                                proceed to payment
                            </button>

                        </div>
                    </div>

                    <div className={styles.ScreenContainer}>
                        <div className={styles.SwagTshirt}>
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

                        <div className={styles.BadgeContainer}>
                            <img ref={userImageRef} className={styles.UserBadgePreview} />
                            <div className={styles.CardLabel}>
                                <p className={styles.CardSubHeading}>#IAMADESIGNER</p>
                                <h1 className={styles.CardTitle}>
                                    share your
                                    <br />
                                    exclusive badge
                                </h1>
                            </div>
                            <img ref={previewRef} draggable="false" className={styles.UserBadge} />

                            <div className={styles.UploadButton}>
                                <button className={styles.SubmitButton}>
                                    upload pic
                                    <input
                                        className={styles.UploadButton}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </button>

                                {badgeGenerated ? (
                                    <button className={styles.SubmitButton} onClick={downloadBadge}>
                                        download
                                    </button>
                                ) : (
                                    <button className={styles.SubmitButton} onClick={generateBadge}>
                                        generate
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className={styles.SwagTshirt}>
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

            </div>
        </>
    );
}
