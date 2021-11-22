import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import { theme } from "../theme";

// extend the theme
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NaitveBase + NextJS Starter Kit</title>
        <meta
          name="description"
          content="NativeBase and NextJS starter kit for rapid setup and easy development experience with NativeBase."
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
