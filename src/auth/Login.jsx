import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerScores, loggingUser } from '../requests/RequestUser';
import {
  StyledFormCont,
  StyledForm,
  StyledInputForm,
  StyledFormHeading,
  StyledInputContainer,
  StyledSpan,
  StyledSpanMessage,
  StyledImgPassword
}
  from '../components/styles/GeneralElements';
import { Btnlog, BtnLinkLog } from '../components/styles/ButtonElements';
import eyepassword from '../images/eyepassword.png';
import eyepasswordclose from '../images/eyepasswordclose.png';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
import { Auth } from 'aws-amplify';
import { createPointTable } from "../requests/RequestUser";



function Login({ navigateTo, setUser, setLogged, message, setMessage, setExistscore }) {

  const { register, handleSubmit, reset } = useForm();
  const [revealed, setRevealed] = useState(false);
  const { t } = useTranslation();



  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })


  //AWS

  async function signIn(data) {
    try {
      const user = await Auth.signIn(data.username, data.password);
      setLogged(true)
      registerScores(data.username, setExistscore)

      setTimeout(() => {
        navigateTo('')
      }, 1000);
      return user
    } catch (error) {
      console.log(error);
    }
  }






  // const getUser = () => {
  //   const user = localStorage.getItem('CognitoIdentityServiceProvider.36jsc3nbg2jfv9stpn91gb9ks0.LastAuthUser.LastAuthUser')
  //   if(user){
  //     console.log(`${user} is connected`)
  //   }else{
  //     console.log('not connected')
  //   }

  // }




  return (
    <StyledFormCont as={animated.div} style={fade} >
      <StyledFormHeading>{t('login.heading')}</StyledFormHeading>
      {message !== undefined ? <StyledSpanMessage>{t(`${message}`)}</StyledSpanMessage> : null}
      <StyledForm onSubmit={handleSubmit((data) => {
        signIn(data)
        reset()
      })}>
        <StyledInputContainer>
          <StyledInputForm {...register('username', { required: true })} type="text" autoComplete="off" required />
          <label htmlFor='username'>{t('login.username')}</label>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputForm {...register('password')} type={!revealed ? 'password' : 'text'} required />
          <StyledImgPassword src={!revealed ? eyepasswordclose : eyepassword} onClick={() => { setRevealed(!revealed) }} />
          <label htmlFor="password" >{t('login.password')}</label>
        </StyledInputContainer>
        <StyledSpan>{t('login.account')}<BtnLinkLog type='button' onClick={() => navigateTo('signup')} >{t('login.here')}</BtnLinkLog></StyledSpan>
        <Btnlog type='submit' >{t('login.button')}</Btnlog>
      </StyledForm>
    </StyledFormCont>
  )
}

export default Login