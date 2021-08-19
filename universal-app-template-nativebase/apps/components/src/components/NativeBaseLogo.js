import React from "react";
import { Image } from "native-base";

import { logo } from "../assets";

export function NativeBaseLogo() {
  return (
    <Image
      source={{ uri: logo }}
      resizeMode="contain"
      size={220}
      alt="NativeBase logo"
    />
  );
}
