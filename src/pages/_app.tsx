import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Next.js PWA Example</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
