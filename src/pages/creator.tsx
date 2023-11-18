import { signIn, signOut, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/router'

import styles from '@/styles/Components/Creator.module.scss'

import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import AtomLoader from "@/pages/components/AtomLoader/AtomLoader"


const prisma = new PrismaClient();


const HomePage: React.FC = () => {

  const router = useRouter();
  const { data: session, status } = useSession();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [hasProfile, setHasProfile] = useState(false);
  const [creator, setHasCreator] = useState("");

  // input validation
  const [validationMessage, setValidationMessage] = useState("");

  const validateInput = () => {
    if (typeof name !== 'string' || name.length > 60) {
      return "Name must be a string with less than 60 characters.";
    }

    if (/\s/.test(username) || /[0-9]/.test(username) || username !== username.toLowerCase() || username.length > 50) {
      return "Username must have no whitespaces, contain only letters, be in lowercase, and have a maximum length of 50 characters.";
    }

    if (typeof creator !== 'string' || creator.length > 60) {  // I assume "creator" is the variable holding the profession info
      return "Profession must be a string with less than 60 characters.";
    }

    return "";
  }

  // input validation



    // Overlay using framer
    const [isOverlayOpen, setOverlayOpen] = useState(false);
    const overlayVariants = {
      hidden: {
        opacity: 0,
        scale: 0.95
      },
      visible: {
        opacity: 1,
        scale: 1
      },
      exit: {
        opacity: 0,
        scale: 0.95
      }
    };

    // overlay using framer




    // update user


    const [componentLoading, setComponentLoading] = useState(false);
    const handleUpdate = async () => {
      setComponentLoading(true);  // Set loading status to true before making the API request

      const errorMessage = validateInput();

      if (errorMessage) {
        setValidationMessage(errorMessage);
        setComponentLoading(false); // Reset loading status if validation error occurs
        return;
      }

      if (!session || !session.user || !session.user.email) {
        console.error("Session or user email is missing.");
        setComponentLoading(false); // Reset loading status if there's an error with the session or user email
        return;
      }

      try {
        const response = await fetch('/api/Account/updateUser', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: session.user.email,
            name,
            username,
            creator,
          }),
        });

        const data = await response.json();

        if (data && data.name) {
          setIsEditing(false);
          setHasProfile(true);
          setOverlayOpen(false);
        } else {
          console.error("Failed to update user: ", data.error);
          setValidationMessage(data.error);
        }
      } catch (error) {
        console.error("Error during fetch:", error);
        setValidationMessage("An unexpected error occurred. Please try again.");
      } finally {
        setComponentLoading(false);  // Reset loading status regardless of outcome
      }
    };


    //update user code ends here



    useEffect(() => {
      // If no session exists, navigate to the root directory
      if (!session) {
        router.push('/')
      }

    }, [session, router])

    useEffect(() => {

      const fetchUserProfile = async () => {
        if (session?.user?.email) {
          const response = await fetch('/api/Account/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: session.user.email,
            }),
          });

          const data = await response.json();
          if (data && data.name) {
            setHasProfile(true);
            setName(data.name);
            setUsername(data.username);
            setHasCreator(data.creator);
          }
        }
      };
      fetchUserProfile();
    }, [session]);

    // Create User code starts
    const [serverError, setServerError] = useState("");


    const handleSubmit = async () => {
      try {
        const response = await fetch('/api/Account/createUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            username,
            creator,
            email: session?.user?.email ?? '',
          }),
        });

        const data = await response.json();

        // Check for server-side validation errors or other issues
        if (response.status !== 200) {
          setServerError(data.error);
          return;  // Stops here if there's an error
        }

        // If there's no server error and data contains a name, then update the profile state
        if (data && data.name) {
          setHasProfile(true);
        }

      } catch (error) {
        console.error("Error during fetch:", error);
        setServerError("An unexpected error occurred. Please try again.");
      }
    }
    // reate user code ends here



    const [isEditing, setIsEditing] = useState(false);


    const handleEdit = () => {
      // setIsEditing(true);
      setOverlayOpen(true);
    }


    return (
      <div>

        <Head>
          <title>Edu Burner | Burner Creator</title>
        </Head>

        {/* overlay */}

        <AnimatePresence>
          {isOverlayOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              transition={{ duration: 0.15 }}
              className={styles.OverlayContainer}


              style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                // backgroundColor: 'rgba(0, 0, 0, 0.8)', // semi-transparent background
                display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 200 // centering the content
              }}
              onClick={() => setOverlayOpen(false)} // close on background click
            >

              <div
                onClick={e => e.stopPropagation()}

                className={styles.EditOverlay}// prevent the overlay from closing when clicking on the content
              >


                <img className={styles.BurnerCreatorLogo} src="/images/burnercreators.png" alt="Burner Creator Logo" />


                <div className={styles.InputFields}>
                  <input className={styles.InputBar} value={name} onChange={(e) => setName(e.target.value)} placeholder="enter your name" />
                  <input className={styles.InputBar} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="enter your username" />
                  <input className={styles.InputBar} value={creator} onChange={(e) => setHasCreator(e.target.value)} placeholder="profession" />
                </div>

                {validationMessage && <span className={styles.validationError}>{validationMessage}</span>}

                <div className={styles.Btns}>
                  <button
                    className={styles.UpdateBtn}
                    disabled={componentLoading}
                    onClick={() => {
                      handleUpdate();
                    }}
                  >
                    {componentLoading ? <AtomLoader /> : 'Update'}
                  </button>
                  <button className={styles.Cancel} onClick={() => setOverlayOpen(false)}>close</button>
                </div>

                <p className={styles.Terms}>
                  By continuing, you acknowledge that you have read and understood, and agree to eduburner's <a className={styles.InlineLink} href="#">Terms of Service</a>.
                </p>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* overlay */}



        {status === "loading" ? (

<p className={styles.Terms}>
By continuing, you acknowledge that you have read and understood, and agree to eduburner's <a className={styles.InlineLink} href="#">Terms of Service</a>.
</p>

        ) : !session ? (

          <>login</>

        ) : hasProfile ? (

          <>
            {isEditing ? (
              <div>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input value={creator} onChange={(e) => setHasCreator(e.target.value)} placeholder="Creator" />
                <button onClick={handleUpdate}>Update</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            ) : (
              <div className={styles.Wraper}>
                <div
                  className={styles.Header}
                >

                  <div className={styles.Top}>
                    <Link href="/" className={styles.BackBtn}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 26.4383L18.2978 20.4818L23.9637 14.4891L22.4746 13L15.2107 20.4455L22.4383 28L24 26.4383Z" fill="white" fill-opacity="0.6" />
                      </svg>
                    </Link>
                    <button className={styles.EditButton}>
                      <svg className={styles.EditButtonIcon} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M26.8602 8L15.6982 19.162L14.859 24.9827L20.7741 24.2507L31.9488 13.0836L26.8602 8ZM19.8253 22.3121L17.2745 22.6284L17.6316 20.1236L26.8602 10.8874L29.0563 13.0836L19.8253 22.3121Z" fill="black" />
                        <path d="M20.6032 10.76V8.71938H9V32.186H30.9362V18.731H28.8956V30.1455H11.0406V10.76H20.6032Z" fill="black" />
                      </svg>
                    </button>
                  </div>

                  <div className={styles.ImageContainer}>
                    <img className={styles.UserAvatar} src={session?.user?.image || ''} alt={name || 'User'} />
                  </div>

                </div>

                <div className={styles.About}>
                  <h3 className={styles.Badge}>{creator}</h3>

                  <p className={styles.UserName}>
                    {username}
                    {/* <img className={styles.Verified} src="./images/verified.png" /> */}
                    <svg className={styles.Verified} aria-label="Verified" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="18" role="img" viewBox="0 0 40 40" width="18"><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>
                  </p>

                  <h2 className={styles.Name}>{name}</h2>

                </div>

                <div className={styles.ActionButtons}>
                  <button className={styles.EditBtn} onClick={handleEdit}>Edit Profile</button>

                </div>

              </div>
            )}
          </>

        ) : (

          <>

            <div className={styles.CreateOverlayContainer}>
              <div
                className={styles.OverlayContainer}
              >

                <div className={styles.EditOverlay}>

                  <img className={styles.BurnerCreatorLogo} src="/images/burnercreators.png" alt="Burner Creator Logo" />


                  <div className={styles.InputFields}>
                    <input className={styles.InputBar} onChange={(e) => setName(e.target.value)} placeholder="enter your name" />
                    <input className={styles.InputBar} onChange={(e) => setUsername(e.target.value)} placeholder="enter your username" />
                    <input className={styles.InputBar} onChange={(e) => setHasCreator(e.target.value)} placeholder="profession" />
                  </div>

                  {serverError && <span className={styles.validationError}>{serverError}</span>}

                  <div className={styles.Btns}>
                    <button
                      className={styles.UpdateBtn}
                      onClick={() => {
                        handleSubmit();
                        setOverlayOpen(false);
                      }}
                    >
                      Create profile
                    </button>
                  </div>

                  <p className={styles.Terms}>
                    By continuing, you acknowledge that you have read and understood, and agree to eduburner's <a className={styles.InlineLink} href="#">Terms of Service</a>.
                  </p>

                </div>
              </div>
            </div>
          </>

        )}
        
      </div>
    );

  };

  export default HomePage;