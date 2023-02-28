import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loggingUser } from "../requests/RequestUser";
import {
  StyledFormCont,
  StyledForm,
  StyledInputForm,
  StyledFormHeading,
  StyledInputContainer,
  StyledSpan,
  StyledSpanMessage,
  StyledImgPassword,
} from "../components/styles/GeneralElements";
import { Btnlog, BtnLinkLog } from "../components/styles/ButtonElements";
import eyepassword from "../images/eyepassword.png";
import eyepasswordclose from "../images/eyepasswordclose.png";

function Login({
  setUser,
  setLogged,
  navigateTo,
  message,
  setMessage,
  setToken,
}) {
  const { register, handleSubmit, reset } = useForm();
  const [revealed, setRevealed] = useState(false);

  const logInUser = async (data) => {
    try {
      const result = await loggingUser(data, setMessage, setToken);
      // if (result.login) {
      //   setMessage(result.message)
      //   localStorage.setItem('score', JSON.stringify(result.user.bestscores))
      // localStorage.setItem('user', JSON.stringify(result.user.username))
      //   setUser(result.user.username)
      if (result.token) {
        setLogged(true);
        // console.log(result);
        localStorage.setItem("token", JSON.stringify(result.token));
        // localStorage.setItem('user', JSON.stringify(result.user.username))
        // console.log(result.);
        // setUser(result.user);
        setTimeout(() => {
          navigateTo("home");
        }, 1000);
      }
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledFormCont>
      <StyledFormHeading>Login</StyledFormHeading>

      {message !== undefined ? (
        <StyledSpanMessage>{message}</StyledSpanMessage>
      ) : null}
      <StyledForm
        onSubmit={handleSubmit((data) => {
          logInUser(data);
          reset();
        })}
      >
        <StyledInputContainer>
          <StyledInputForm
            {...register("email", { required: true })}
            type="text"
            autoComplete="off"
            required
          />
          <label htmlFor="email">Email</label>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputForm
            {...register("password")}
            type={!revealed ? "password" : "text"}
            required
          />
          <StyledImgPassword
            src={!revealed ? eyepasswordclose : eyepassword}
            onClick={() => {
              setRevealed(!revealed);
            }}
          />
          <label htmlFor="password">Password</label>
        </StyledInputContainer>
        <StyledSpan>
          You don't have an account ? Click{" "}
          <BtnLinkLog type="button" onClick={() => navigateTo("signup")}>
            here
          </BtnLinkLog>
        </StyledSpan>
        <Btnlog type="submit">submit</Btnlog>
      </StyledForm>
    </StyledFormCont>
  );
}

export default Login;
