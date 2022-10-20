import Layout from "@components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";

const Home: NextPage = () => {
  return (
    <>
      <div className="content">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};
