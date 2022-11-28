import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loggingUser } from '../requests/RequestUser';
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


function Login({ navigateTo, setUser, setLogged, message, setMessage }) {

  const { register, handleSubmit, reset } = useForm();
  const [revealed, setRevealed] = useState(false);
  const { t } = useTranslation();



  // const logInUser = async (data) => {
  //   try {
  //     const result = await loggingUser(data, setMessage)
  //     if (result.login) {
  //       setMessage(result.message)
  //       localStorage.setItem('score', JSON.stringify(result.user.bestscores))
  //       localStorage.setItem('user', JSON.stringify(result.user.username))
  //       setUser(result.user.username)
  //       setLogged(true)
  //       setTimeout(() => {
  //         navigateTo('home')
  //       }, 2000);
  //     }
  //     return result
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })


//AWS

async function signIn(data) {
  try {
      const user = await Auth.signIn(data.username, data.password);
      setLogged(true)
      setTimeout(() => {
        navigateTo('')
    }, 1000);
      return user
  } catch (error) {
      console.log(error);
  }
}




const getToken = async ()=>{
  var data = await Auth.currentSession()
  // console.log(data)
  // console.log(data.idToken.jwtToken)

  if(data){
    console.log('user CONNECTED')
  }else if(!data){
    console.log('UN CONNECTED')
  }


  return data.idToken.jwtToken
}

const getUser = () => {
  const user = localStorage.getItem('CognitoIdentityServiceProvider.36jsc3nbg2jfv9stpn91gb9ks0.LastAuthUser.LastAuthUser')
  if(user){
    console.log(`${user} is connected`)
  }else{
    console.log('not connected')
  }

}



async function signOut() {
  try {
      await Auth.signOut();
      setLogged(false)
      setUser('')
  } catch (error) {
      console.log('error signing out: ', error);
  }
}


  return (
    <StyledFormCont as={animated.div} style={fade} >
      <StyledFormHeading>{t('login.heading')}</StyledFormHeading>
      <button onClick={() => {
        getToken()
      }} >testtttt</button>

      <button onClick={() => {signOut()}} >logout </button>
      <button onClick={() => {
        getUser()
      }}>test userrr </button>
      {message !== undefined ? <StyledSpanMessage>{t(`${message}`)}</StyledSpanMessage> : null}
      <StyledForm onSubmit={handleSubmit((data) => {
        // logInUser(data)
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