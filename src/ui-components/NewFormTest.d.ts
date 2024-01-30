/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewFormTestInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type NewFormTestValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewFormTestOverridesProps = {
    NewFormTestGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type NewFormTestProps = React.PropsWithChildren<{
    overrides?: NewFormTestOverridesProps | undefined | null;
} & {
    onSubmit: (fields: NewFormTestInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: NewFormTestInputValues) => NewFormTestInputValues;
    onValidate?: NewFormTestValidationValues;
} & React.CSSProperties>;
export default function NewFormTest(props: NewFormTestProps): React.ReactElement;
