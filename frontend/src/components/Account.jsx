import React from "react";
import { useForm } from "react-hook-form";
import { changePassword } from "../requests/RequestUser";
import {
  StyledFormCont,
  StyledForm,
  StyledInputForm,
  StyledFormHeading,
  LabelAccount,
  StyledSpanMessage,
} from "../components/styles/GeneralElements";
import { Btnlog } from "./styles/ButtonElements";

export default function Account({
  setLogged,
  user,
  message,
  setMessage,
  token,
}) {
  const { register, handleSubmit, reset } = useForm();

  const changePw = async (info) => {
    try {
      const result = await changePassword(setLogged, info, setMessage, token);
      console.log(result);
      if (result) {
        setMessage(result.message);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  return (
    <StyledFormCont>
      {user ? (
        <StyledForm
          onSubmit={handleSubmit((data) => {
            changePw({
              username: user,
              current_password: data.currentpassword,
              new_password: data.newPassword,
              new_password_confirmation: data.newPasswordConfirmation,
            });
            reset();
          })}
        >
          <StyledFormHeading>{user}</StyledFormHeading>
          {message ? <StyledSpanMessage>{message}</StyledSpanMessage> : null}
          <LabelAccount htmlFor="currentpassword">
            current password
          </LabelAccount>
          <StyledInputForm {...register("currentpassword")} required />
          <LabelAccount htmlFor="newPassword">New password</LabelAccount>
          <StyledInputForm {...register("newPassword")} required />
          <LabelAccount htmlFor="newPasswordConfirmation">
            Password confirmation
          </LabelAccount>
          <StyledInputForm {...register("newPasswordConfirmation")} required />

          <Btnlog type="submit">Change your password</Btnlog>
        </StyledForm>
      ) : (
        <StyledFormHeading>
          You need to be connected for accessing your account details
        </StyledFormHeading>
      )}
    </StyledFormCont>
  );
}
