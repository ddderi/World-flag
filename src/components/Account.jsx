import React from 'react';
import { useForm } from 'react-hook-form';
import { changePassword } from '../requests/RequestUser';
import {
  StyledFormCont,
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

export default function Account({ navigateTo, setLogged, setUser, user, message, setMessage }) {

  const { register, handleSubmit, reset } = useForm();
  const { t } = useTranslation();

  const changePw = async (info) => {
    try {
      const result = await changePassword(navigateTo, setLogged, setUser, info, setMessage)
      console.log(result)
      if (result) {
        setMessage(result.message)
        setTimeout(() => {
          navigateTo('home')
        }, 2000);
      }
      return result
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
          changePw({
            username: user,
            password: data.currentpassword,
            newPassword: data.newPassword
          })
          reset()
        })}>
          <StyledFormHeading>{user}</StyledFormHeading>
          {message ? <StyledSpanMessage>{t(`${message}`)}</StyledSpanMessage> : null}
          <LabelAccount htmlFor="currentpassword">{t('account.currentpassword')}</LabelAccount>
          <StyledInputForm style={{ marginBottom: '4%' }} {...register("currentpassword")} required />
          <LabelAccount htmlFor="password">{t('account.newpassword')}</LabelAccount>
          <StyledInputForm {...register("newPassword")} required />
          <Btnlog type='submit'>{t('account.button')}</Btnlog>
        </StyledForm>
        : <StyledFormHeading>{t('account.errormessage')}</StyledFormHeading>}
    </StyledFormContAccount>
  )
}

