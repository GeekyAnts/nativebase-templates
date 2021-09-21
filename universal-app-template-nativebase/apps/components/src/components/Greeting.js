import React from "react";
import { Code, Heading, HStack, Text } from "native-base";

export function Greeting({ filePath }) {
  return (
    <>
      <Heading size="lg">Welcome to NativeBase</Heading>
      <HStack space={2} alignItems="center">
        <Text>Edit</Text>
        <Code>{filePath}</Code>
        <Text>and save to reload.</Text>
      </HStack>
    </>
  );
}
