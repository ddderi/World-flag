import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { changePassword } from '../requests/RequestUser';
import {
  StyledFormCont,
  StyledForm,
  StyledInputForm,
  StyledFormHeading,
  LabelAccount
}
  from '../components/styles/GeneralElements';
import { Btnlog } from './styles/ButtonElements';

export default function Account({ user }) {

  const { register, handleSubmit, reset } = useForm()
  const [message, setMessage] = useState('')


  const changePw = async (info) => {
    try {
      const result = await changePassword(info, setMessage)
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
          {message ? <span style={{ color: 'red' }}>{message}</span> : null}
          <StyledFormHeading>{user}</StyledFormHeading>
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
