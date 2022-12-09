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
import ClipLoader from "react-spinners/ClipLoader";


export default function Account({ setLoading, loading, color, navigateTo, setLogged, setUser, user, message, setMessage }) {

  const { register, handleSubmit, reset } = useForm();
  const { t } = useTranslation();

  //autre methode
  // const client = new AWS.CognitoIdentityProvider({ region: "us-west-2" });
  // client.changePassword(params, (err, data) => {})

  const changeCred = (data) => {

    Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.changePassword(user, data.currentpassword, data.newPassword);
      })
      .then((data) => {
        setLoading(false)
        navigateTo('')
      })
      .catch((err) => {
        setMessage(err)
        console.log(err)
      });
  }


  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })

  return (
    <StyledFormContAccount as={animated.div} style={fade}>
      {user ?
        <StyledForm onSubmit={handleSubmit((data) => {
          setLoading(true)
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
          <Btnlog type="submit" disabled={loading ? true : false} >{
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
              <>
                {t('account.button')}
              </>
          }</Btnlog>
        </StyledForm>
        : <StyledFormHeading>{t('account.errormessage')}</StyledFormHeading>}
    </StyledFormContAccount>
  )
}

