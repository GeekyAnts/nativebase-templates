import React from "react";
import ReactDOM from "react-dom";
import { NativeBaseProvider } from "native-base";
import { App } from "./App";

import "./index.css";
import { theme } from "./theme";

// extend the theme
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
ReactDOM.render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
