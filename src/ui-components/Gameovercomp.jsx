/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import GameOver from "./GameOver";
import { View } from "@aws-amplify/ui-react";
export default function Gameovercomp(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="400px"
      height="600px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Gameovercomp")}
      {...rest}
    >
      <GameOver
        width="400px"
        height="red"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="35px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0.89)"
        {...getOverrideProps(overrides, "Frame 2")}
      ></GameOver>
    </View>
  );
}
