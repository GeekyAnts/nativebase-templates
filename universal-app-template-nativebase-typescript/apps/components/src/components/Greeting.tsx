import React from "react";
import { Code, Heading, Text } from "native-base";

interface GreetingProps {
  filePath: string;
}

export function Greeting({ filePath }: GreetingProps) {
  return (
    <>
      <Heading size="lg">Welcome to NativeBase</Heading>
      <Text>
        Edit <Code>{filePath}</Code> and save to reload.
      </Text>
    </>
  );
}
