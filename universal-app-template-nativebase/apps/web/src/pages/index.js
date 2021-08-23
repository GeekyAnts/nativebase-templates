import React from "react";
import { VStack } from "native-base";

import {
  AppBackground,
  Greeting,
  LearnNativeBase,
  NativeBaseIcon,
  ToggleDarkMode,
} from "universal-components";

// Start editing here, save and see your changes.
export default function App() {
  return (
    <AppBackground>
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Greeting filePath="apps/web/src/pages/index.js" />
        <LearnNativeBase />
        <ToggleDarkMode />
      </VStack>
    </AppBackground>
  );
}
