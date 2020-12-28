import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mateus Pandino | pandino.me</title>
      </Head>
      <Component {...pageProps}></Component>
    </>
  );
}

export default MyApp;
