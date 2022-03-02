import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";

function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
