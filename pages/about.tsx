import Footer from "@components/Footer";
import Header from "@components/Header";
import Layout from "@components/Layout";
import Head from "next/head";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About Next JS</title>
        <meta name="description" content="Tutorials on web development." />
      </Head>
      <div className="content">
        <h1>About</h1>
      </div>
    </>
  );
};

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
