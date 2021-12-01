import React from "react";
import { Center, NativeBaseProvider, VStack } from "native-base";

import {
  Greeting,
  LearnNativeBase,
  NativeBaseIcon,
  theme,
  ToggleDarkMode,
} from "universal-components";
// extend the theme
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Greeting filePath="apps/mobile/App.tsx" />
          <LearnNativeBase />
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
