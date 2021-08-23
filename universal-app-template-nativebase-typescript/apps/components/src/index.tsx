import React from "react";
import ReactDOM from "react-dom";
import { NativeBaseProvider } from "native-base";
import { App } from "./App";

import "./index.css";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
