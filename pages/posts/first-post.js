import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";

function FirstPost({ countries, time }) {
  console.log("These are the countries", countries, " fetched at ", time);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>This is the first post</h1>

      <h2>
        <Link href={"/"}>Go back to HomePage</Link>
      </h2>
    </Layout>
  );
}

export default FirstPost;