import React from 'react';
import { useForm } from 'react-hook-form';
import { loggingUser } from '../requests/RequestUser';
import {
  StyledFormCont,
  StyledForm,
  StyledInputForm,
  StyledFormHeading,
  StyledInputContainer,
  StyledSpan,
  StyledSpanMessage
}
  from '../components/styles/GeneralElements';
import { Btnlog, BtnLinkLog } from '../components/styles/ButtonElements';

function Login({ setUser, setLogged, navigateTo, message, setMessage }) {

  const { register, handleSubmit, reset } = useForm()

  const logInUser = async (data) => {
    try {
      const result = await loggingUser(data, setMessage, setUser)
      if (result.success) {
        setMessage(result.message)
        localStorage.setItem('score', JSON.stringify(result.user.bestscores))
        localStorage.setItem('user', JSON.stringify(result.user.username))
        setUser(result.user.username)
        setLogged(true)
        setTimeout(() => {
          navigateTo('home')
        }, 1000);
      }
      return result
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <StyledFormCont>
      <StyledFormHeading>Login</StyledFormHeading>
      {message !== undefined ? <StyledSpanMessage>{message.message}</StyledSpanMessage> : null}
      <StyledForm onSubmit={handleSubmit((data) => {
        logInUser(data)
        reset()
      })}>
        <StyledInputContainer>
          <StyledInputForm {...register('username', { required: true })} type="text" required />
          <label htmlFor='username'>Username</label>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputForm {...register('password')} type="password" required />
          <label htmlFor="password" >Password</label>
        </StyledInputContainer>
        <StyledSpan>You don't have an account ? Click <BtnLinkLog type='button' onClick={() => navigateTo('signup')} >here</BtnLinkLog></StyledSpan>
        <Btnlog type='submit' >submit</Btnlog>
      </StyledForm>
    </StyledFormCont>
  )
}

export default Login