// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Center, NativeBaseProvider, VStack } from "native-base";
import {
  Greeting,
  LearnNativeBase,
  NativeBaseIcon,
  theme,
  ToggleDarkMode,
} from "universal-components";

function HomeScreen() {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Greeting filePath="apps/mobile/App.js" />
        <LearnNativeBase />
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
