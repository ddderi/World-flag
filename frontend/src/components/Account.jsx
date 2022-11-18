import React from 'react';
import { useForm } from 'react-hook-form';
import { changePassword } from '../requests/RequestUser';
import {
  StyledFormCont,
  StyledForm,
  StyledInputForm,
  StyledFormHeading,
  LabelAccount,
  StyledSpanMessage
}
  from '../components/styles/GeneralElements';
import { Btnlog } from './styles/ButtonElements';

export default function Account({ setLogged, user, message, setMessage }) {

  const { register, handleSubmit, reset } = useForm()

  const changePw = async (info) => {
    try {
      const result = await changePassword(setLogged, info, setMessage)
      console.log(result)
      if (result) {
        setMessage(result.message)
      }
      return result
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <StyledFormCont>
      {user ?
        <StyledForm onSubmit={handleSubmit((data) => {
          changePw({
            username: user,
            password: data.currentpassword,
            newPassword: data.newPassword
          })
          reset()
        })}>
          <StyledFormHeading>{user}</StyledFormHeading>
          {message ? <StyledSpanMessage>{message}</StyledSpanMessage> : null}
          <LabelAccount htmlFor="currentpassword">Current password</LabelAccount>
          <StyledInputForm {...register("currentpassword")} required />
          <LabelAccount htmlFor="password">New password</LabelAccount>
          <StyledInputForm {...register("newPassword")} required />
          <Btnlog type='submit'>Change your password</Btnlog>
        </StyledForm>
        : <StyledFormHeading>You need to be connected for accessing your account details</StyledFormHeading>}
    </StyledFormCont>
  )
}
