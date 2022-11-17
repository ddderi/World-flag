import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loggingUser } from '../requests/RequestUser';
import { useNavigate } from 'react-router-dom';
import {
  StyledFormCont,
  StyledForm,
  StyledInputForm,
  StyledFormHeading,
  StyledInputContainer
}
  from '../components/styles/GeneralElements';
import { Btnlog } from '../components/styles/ButtonElements'

function Login({ setUser, logged, setLogged }) {

  const { register, handleSubmit, reset } = useForm()
  const [message, setMessage] = useState('')
  const navigate = useNavigate();


  const navigateToHome = () => {
    navigate('/home')
  };


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
          navigateToHome()
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
      {message !== undefined ? <span style={{ color: 'red' }}>{message.message}</span> : null}
      <StyledForm onSubmit={handleSubmit((data) => {
        logInUser(data)
        reset()
      })}>
        <StyledInputContainer>
          <StyledInputForm {...register('username', { required: true })}  type="text" required />
          <label htmlFor='username'>Username</label>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputForm {...register('password')} type="password"  required />
          <label htmlFor="password" >Password</label>
        </StyledInputContainer>
        <Btnlog type='submit' >submit</Btnlog>
      </StyledForm>

    </StyledFormCont>
  )

}

export default Login