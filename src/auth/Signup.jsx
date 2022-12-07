import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpUser } from '../requests/RequestUser';
import { Btnlog, BtnLinkLog } from '../components/styles/ButtonElements';
import {
    StyledFormCont,
    StyledForm,
    StyledInputForm,
    StyledFormHeading,
    StyledInputContainer,
    StyledSpan,
    StyledImgPassword,
    StyledSpanMessage
}
    from '../components/styles/GeneralElements';
import eyepassword from '../images/eyepassword.png';
import eyepasswordclose from '../images/eyepasswordclose.png';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
import { Auth } from 'aws-amplify';
import UserPool from "../UserPool";
import { createPoint } from "../graphql/mutations";
import { API } from "aws-amplify";


export default function Signup({  navigateTo, setUser, setLogged }) {

    const { register, handleSubmit, reset } = useForm()
    const [message, setMessage] = useState('')
    const [revealedone, setRevealedone] = useState(false)
    const [revealedtwo, setRevealedtwo] = useState(false)
    const { t } = useTranslation();


    // const signup = async (info) => {
    //     try {
    //         const result = await signUpUser(info)
    //         console.log(result)
    //         setMessage(result.message)
    //         localStorage.setItem('score', JSON.stringify(result.user.bestscores))
    //         localStorage.setItem('user', JSON.stringify(result.user.username))
    //         setUser(result.user.username)
    //         setLogged(true)
    //         setTimeout(() => {
    //             navigateTo('home')
    //         }, 1000);
    //         return result
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const fade = useSpring({
        from: { opacity: 0 }, opacity: 1
    })


    // AWS 



    // async function createPointTable(username) {
    //     try {
    //         const data = {
    //             score: 0,
    //             username: username,
    //         }
    //         const result = await API.graphql({
    //             query: createPoint,
    //             variables: { input: data }
    //         })
    //         console.log(result)
    //         return result
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }



    async function signUp(data) {
        try {
            const { user } = await Auth.signUp({
                username: data.username,
                password: data.password,
                attributes: {
                    email: data.email,          // optional
                    //     phone_number,   // optional - E.164 number convention
                    //     // other custom attributes 
                    // },
                    // autoSignIn: { // optional - enables auto sign in after user is confirmed
                    //     enabled: true,
                },
                autoSignIn: {
                    enabled: true
                }
            });
            // UserPool.signUp(data.username, data.password, {attributes: {email: data.email}}, [], null, (error, data) => {
            //     if(error){
            //         console.log(error)
            //     }
            //     console.log(data)
            // })


            setTimeout(() => {
                navigateTo('confirmation')
            }, 1000);
            // REDIRECT TO ConfirmationCode component
            // console.log(user);
        } catch (error) {
            setMessage('error while signing-up')
            console.log('error signing up:', error);
        }
    }

    // RESEND AUTH CODE 

    async function resendConfirmationCode(data) {
        try {
            await Auth.resendSignUp(data.username);
            console.log('code resent successfully');


            // REDIRECT TO ConfirmationCode component

        } catch (err) {
            console.log('error resending code: ', err);
        }
    }


    async function confirmSignUp(data) {
        try {
            await Auth.confirmSignUp(data.username, data.code);
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    return (
        <StyledFormCont as={animated.div} style={fade}>
            {console.log(message)}
            <StyledFormHeading>{t('signup.heading')}</StyledFormHeading>
            {message !== undefined ? <StyledSpanMessage>{t(`${message}`)}</StyledSpanMessage> : null}
            <StyledForm onSubmit={handleSubmit((data) => {
                // signup({
                //     username: data.username,
                //     password: data.password,
                //     passwordConfirmation: data.passwordConfirmation
                // })
                signUp(data)
                reset()
            })}>
                <StyledInputContainer>
                    <StyledInputForm {...register('username')} type="text" required />
                    <label htmlFor='username'>{t('signup.username')}</label>
                </StyledInputContainer>
                <StyledInputContainer>
                    <StyledInputForm {...register('password')} type={!revealedone ? 'password' : 'text'} required />
                    <StyledImgPassword src={!revealedone ? eyepasswordclose : eyepassword} onClick={() => { setRevealedone(!revealedone) }} />
                    <label htmlFor='password'>{t('signup.password')}</label>
                </StyledInputContainer>
                {/* <StyledInputContainer>
                    <StyledInputForm {...register('passwordConfirmation')} type={!revealedtwo ? 'password' : 'text'} required />
                    <StyledImgPassword src={!revealedtwo ? eyepasswordclose : eyepassword} onClick={() => { setRevealedtwo(!revealedtwo) }} />
                    <label htmlFor='passwordConfirmation'>{t('signup.passwordcon')}</label>
                </StyledInputContainer> */}
                <StyledInputContainer>
                    <StyledInputForm {...register('email')} type="text" required />
                    <label htmlFor='email'>Email</label>
                </StyledInputContainer>
                <StyledSpan>{t('signup.account')}<BtnLinkLog type='button' onClick={() => navigateTo('login')} >{t('signup.here')}</BtnLinkLog></StyledSpan>
                <Btnlog type="submit">{t('signup.button')}</Btnlog>
            </StyledForm>
        </StyledFormCont>
    )
}
