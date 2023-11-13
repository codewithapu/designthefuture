import '../styles/Globals.scss'
import { SessionProvider } from 'next-auth/react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function DTF({ Component, pageProps, router }) {
  const baseUrl = "https://designthefuture.in";
  return (
    <>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      <meta property="og:image" content={`${baseUrl}/og.png`} />
      <meta property="og:title" content="Explore the next generation of learning experience" />
      <meta property="og:description" content="exclusively for the learners" />
      <link rel='icon' href="./favicon.ico" />

      <SessionProvider session={pageProps.session}>
        <NavBar />
        <Component {...pageProps} key={router.route} />

      </SessionProvider>
      <Footer />
    </>
  );
}

export default DTF;
