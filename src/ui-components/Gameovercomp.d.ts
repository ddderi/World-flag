/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GameOverProps } from "./GameOver";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameovercompOverridesProps = {
    Gameovercomp?: PrimitiveOverrideProps<ViewProps>;
    "Frame 2"?: GameOverProps;
} & EscapeHatchProps;
export declare type GameovercompProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: GameovercompOverridesProps | undefined | null;
}>;
export default function Gameovercomp(props: GameovercompProps): React.ReactElement;
