import "../styles/globals.css";
import "../styles/App.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HeartRover — Explore new romances. </title>
        <meta
          name="title"
          content="HeartRover — Explore new romances."
        />
        <meta
          name="description"
          content="AI-generated pickup lines for the modern romantic"
        />
        <link rel="icon" href="https://flirtify.vercel.app/icon.png"></link>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://heartrover.vercel.app/" />
        <meta
          property="og:title"
          content="HeartRover — Explore new romances."
        />
        <meta
          property="og:description"
          content="AI-generated pickup lines for the modern romantic"
        />
        <meta
          property="og:image"
          content="https://flirtify.vercel.app/meta.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://heartrover.vercel.app/" />
        <meta
          property="twitter:title"
          content="HeartRover — Explore new romances."
        />
        <meta
          property="twitter:description"
          content="AI-generated pickup lines for the modern romantic"
        />
        <meta
          property="twitter:image"
          content="https://flirtify.vercel.app/meta.png"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
