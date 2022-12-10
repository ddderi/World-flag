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
  StyledImgPassword,
}
  from '../components/styles/GeneralElements';
import { Btnlog, BtnLinkLog } from '../components/styles/ButtonElements';
import eyepassword from '../images/eyepassword.png';
import eyepasswordclose from '../images/eyepasswordclose.png';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { NavLinkLogin, StyledDivLogin } from '../components/styles/NavbarElements';



function Login({ setLoading, loading, color, setBestscoreuser, navigateTo, setUser, setLogged, message, setMessage, setExistscore }) {

  const { register, handleSubmit, reset } = useForm();
  const [revealed, setRevealed] = useState(false);
  const { t } = useTranslation();




  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })


  async function signIn(data) {
    try {
      const usernickname = data.username.toLowerCase()
      const user = await Auth.signIn(usernickname, data.password);
      setLogged(true)

      registerScores(usernickname, setExistscore, setBestscoreuser)
      setTimeout(() => {
        navigateTo('')
      }, 1000);
      return user
    } catch (error) {
      setMessage('Error while signing-in, incorrect username or password.');
      console.log(error);
      setLoading(false);
    }
  }


  return (
    <StyledFormCont as={animated.div} style={fade} >
      <StyledFormHeading>{t('login.heading')}</StyledFormHeading>
      {message !== undefined ? <StyledSpanMessage>{t(`${message}`)}</StyledSpanMessage> : null}
      <StyledForm onSubmit={handleSubmit((data) => {
        setLoading(true)
        signIn(data)
        // reset()
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
        <StyledDivLogin>
          <NavLinkLogin to='/forgotpassword' >Forgot your password ?</NavLinkLogin>
        </StyledDivLogin>
        <StyledSpan>{t('login.account')}<BtnLinkLog type='button' onClick={() => navigateTo('signup')} >{t('login.here')}</BtnLinkLog></StyledSpan>
        {/* <Btnlog type='submit' >{t('login.button')}</Btnlog> */}

        <Btnlog type='submit' disabled={loading ? true : false} >{
          loading ?
            <ClipLoader
              color={color}
              loading={loading}
              // cssOverride={override}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            :
            <>{t('login.button')}</>
        }
        </Btnlog>



      </StyledForm>


    </StyledFormCont>
  )
}

export default Login