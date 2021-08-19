import * as React from "react";
import Head from "next/head";
import { NativeBaseProvider } from "native-base";

import { theme } from "universal-components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NativeBase Universal App</title>
        <meta
          name="description"
          content="NativeBase starter kit with Next.js and React Native for rapid setup and easy development experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NativeBaseProvider theme={theme}>
        <Component {...pageProps} />
      </NativeBaseProvider>
    </>
  );
}

export default MyApp;
