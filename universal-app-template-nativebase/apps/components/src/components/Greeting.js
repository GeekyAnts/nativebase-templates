import React from "react";
import { Code, Heading, Text } from "native-base";

export function Greeting({ filePath }) {
  return (
    <>
      <Heading size="lg">Welcome to NativeBase</Heading>
      <Text>
        Edit <Code>{filePath}</Code> and save to reload.
      </Text>
    </>
  );
}
