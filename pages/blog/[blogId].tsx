import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

const Blog = ({
  title,
  description,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>Article</h1>
    </>
  );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
};
