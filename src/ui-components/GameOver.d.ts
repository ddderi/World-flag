/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameOverOverridesProps = {
    GameOver?: PrimitiveOverrideProps<ViewProps>;
    "Linked Path Group"?: PrimitiveOverrideProps<ViewProps>;
    "[Copy] Game over51841"?: PrimitiveOverrideProps<TextProps>;
    "[Copy] Game over51842"?: PrimitiveOverrideProps<TextProps>;
    "[Copy] Game over51843"?: PrimitiveOverrideProps<TextProps>;
    "[Copy] Game over51844"?: PrimitiveOverrideProps<TextProps>;
    "[Copy] Game over51845"?: PrimitiveOverrideProps<TextProps>;
    "[Copy] Game over51846"?: PrimitiveOverrideProps<TextProps>;
    "[Copy] Game over51847"?: PrimitiveOverrideProps<TextProps>;
    "[Copy] Game over51848"?: PrimitiveOverrideProps<TextProps>;
    "[Copy] Game over51849"?: PrimitiveOverrideProps<TextProps>;
    "Your score :"?: PrimitiveOverrideProps<TextProps>;
    "[Linked] Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type GameOverProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GameOverOverridesProps | undefined | null;
}>;
export default function GameOver(props: GameOverProps): React.ReactElement;
