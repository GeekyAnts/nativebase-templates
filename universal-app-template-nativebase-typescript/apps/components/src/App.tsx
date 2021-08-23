import React from "react";
import { VStack } from "native-base";

import {
  AppBackground,
  Greeting,
  LearnNativeBase,
  NativeBaseLogo,
  ToggleDarkMode,
} from "./components";

export function App() {
  return (
    <AppBackground>
      <VStack space={5} alignItems="center">
        <NativeBaseLogo />
        <Greeting filePath="apps/components/src/components/App.tsx" />
        <LearnNativeBase />
        <ToggleDarkMode />
      </VStack>
    </AppBackground>
  );
}
