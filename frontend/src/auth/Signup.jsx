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
    StyledImgPassword
}
    from '../components/styles/GeneralElements';
import eyepassword from '../images/eyepassword.png';
import eyepasswordclose from '../images/eyepasswordclose.png';

export default function Signup({ setUser, setLogged, navigateTo }) {

    const { register, handleSubmit, reset } = useForm()
    const [message, setMessage] = useState('')
    const [revealedone, setRevealedone] = useState(false)
    const [revealedtwo, setRevealedtwo] = useState(false)



    const signup = async (info) => {
        try {
            const result = await signUpUser(info)
            console.log(result)
            setMessage(result.message)
            localStorage.setItem('score', JSON.stringify(result.user.bestscores))
            localStorage.setItem('user', JSON.stringify(result.user.username))
            setUser(result.user.username)
            setLogged(true)
            setTimeout(() => {
                navigateTo('home')
            }, 1000);
            return result
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <StyledFormCont>
            <StyledFormHeading>Registration</StyledFormHeading>
            {message !== undefined ? <StyledFormHeading>{message.message}</StyledFormHeading> : null}
            <StyledForm onSubmit={handleSubmit((data) => {
                signup({
                    username: data.username,
                    password: data.password,
                    passwordConfirmation: data.passwordConfirmation
                })
                reset()
            })}>

                <StyledInputContainer>
                    <StyledInputForm {...register('username')} type="text" required />
                    <label htmlFor='username'>Username</label>
                </StyledInputContainer>
                <StyledInputContainer>
                    <StyledInputForm {...register('password')} type={!revealedone ? 'password' : 'text'} required />
                    <StyledImgPassword src={!revealedone ? eyepasswordclose : eyepassword} onClick={() => { setRevealedone(!revealedone) }} />
                    <label htmlFor='password'>Password</label>
                </StyledInputContainer>
                <StyledInputContainer>
                    <StyledInputForm {...register('passwordConfirmation')} type={!revealedtwo ? 'password' : 'text'} required />
                    <StyledImgPassword src={!revealedtwo ? eyepasswordclose : eyepassword} onClick={() => { setRevealedtwo(!revealedtwo) }} />
                    <label htmlFor='passwordConfirmation'>Password confirmation</label>
                </StyledInputContainer>
                <StyledSpan>You already have an account ? Click <BtnLinkLog type='button' onClick={() => navigateTo('login')} >here</BtnLinkLog></StyledSpan>
                <Btnlog type="submit">Submit</Btnlog>
            </StyledForm>
        </StyledFormCont>
    )
}
