import React from 'react';
import { useForm } from 'react-hook-form';
import {
  StyledForm,
  StyledInputForm,
  StyledFormHeading,
  LabelAccount,
  StyledSpanMessage,
  StyledFormContAccount,
  StyledInputContainer
}
  from '../components/styles/GeneralElements';
import { Btnlog } from './styles/ButtonElements';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
import { Auth } from 'aws-amplify';
import * as AWS from "@aws-sdk/client-cognito-identity-provider";


export default function Account({ navigateTo, setLogged, setUser, user, message, setMessage }) {

  const { register, handleSubmit, reset } = useForm();
  const { t } = useTranslation();
  const client = new AWS.CognitoIdentityProvider({ region: "us-west-2" });


  async function changeCred(data) {
    try {
      let token = localStorage.getItem(`CognitoIdentityServiceProvider.36jsc3nbg2jfv9stpn91gb9ks0.${user}.accessToken`)
      var connected = await Auth.currentUserInfo()
      if (connected) {
        var params = {
          AccessToken: token,
          PreviousPassword: data.currentpassword,
          ProposedPassword: data.newPassword
        }
        client.changePassword(params, (err, data) => {
          if (err) { console.log(err) }
          else {
            setMessage('Your credentials have been successfully updated !')
            setTimeout(() => {
              navigateTo('')
            }, 2000);
          }
        })
      }
      return connected
    } catch (error) {
      console.log(error)
    }
  }

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })

  return (
    <StyledFormContAccount as={animated.div} style={fade}>
      {user ?
        <StyledForm onSubmit={handleSubmit((data) => {
          changeCred(data)
          reset()
        })}>
          <StyledFormHeading>{user}</StyledFormHeading>
          {message ? <StyledSpanMessage>{t(`${message}`)}</StyledSpanMessage> : null}
          <StyledInputContainer>
            {/* <LabelAccount htmlFor="currentpassword">{t('account.currentpassword')}</LabelAccount> */}
            <StyledInputForm style={{ marginBottom: '4%' }} {...register("currentpassword")} required />
            <label htmlFor='currentpassword'>{t('account.currentpassword')}</label>
          </StyledInputContainer>
          <StyledInputContainer>
            {/* <LabelAccount htmlFor="password">{t('account.newpassword')}</LabelAccount> */}
            <StyledInputForm {...register("newPassword")} required />
            <label htmlFor='password'>{t('account.newpassword')}</label>
          </StyledInputContainer>
          <Btnlog type='submit'>{t('account.button')}</Btnlog>
        </StyledForm>
        : <StyledFormHeading>{t('account.errormessage')}</StyledFormHeading>}
    </StyledFormContAccount>
  )
}

