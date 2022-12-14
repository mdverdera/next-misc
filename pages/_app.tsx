import Footer from "@components/Footer";
import Header from "@components/Header";
import "@styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Next JS APP</title>
        <meta name="description" content="Head component in Next JS." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
