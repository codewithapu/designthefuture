import { SessionProvider } from 'next-auth/react';
import NavBar from './components/NavBar';
import '../styles/Globals.css' 

function DTF({ Component, pageProps, router }) {
  const baseUrl = "https://designthefuture.in";
  return (
    <>
      <meta property="og:image" content={`${baseUrl}/og.png`} />
      <meta property="og:title" content="Explore the next generation of learning experience" />
      <meta property="og:description" content="exclusively for the learners" />
      <SessionProvider session={pageProps.session}>
        <NavBar/>
        <Component {...pageProps} key={router.route} />

      </SessionProvider>
    </>

  );
}

export default DTF;
