import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpUser } from '../requests/RequestUser';
import { useNavigate } from 'react-router-dom';
import { Btnlog } from '../components/styles/ButtonElements';
import {
    StyledFormCont,
    StyledForm,
    StyledInputForm,
    StyledFormHeading,
    StyledInputContainer
}
    from '../components/styles/GeneralElements';

export default function Signup({ setUser, setLogged }) {

    const { register, handleSubmit, reset } = useForm()
    const [message, setMessage] = useState('')
    const navigate = useNavigate();


    const navigateToHome = () => {
        navigate('/')
    };


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
                navigateToHome()
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
                    <StyledInputForm {...register('password')} type="text" required />
                    <label htmlFor='password'>Password</label>
                </StyledInputContainer>
                <StyledInputContainer>
                    <StyledInputForm {...register('passwordConfirmation')} type="text" required />
                    <label htmlFor='passwordConfirmation'>Password confirmation</label>
                </StyledInputContainer>
                <Btnlog type="submit">Submit</Btnlog>
            </StyledForm>
        </StyledFormCont>
    )
}
