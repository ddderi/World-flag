import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
import { Btnlog, BtnLinkLog } from '../components/styles/ButtonElements';
import { Auth } from 'aws-amplify';
import { useSpring, animated } from 'react-spring';

export default function ConfirmationCode({ navigateTo }) {

    const { register, handleSubmit, reset } = useForm()


    async function confirmSignUp(data) {
        try {
            const user = await Auth.confirmSignUp(data.username, data.code);
            console.log(user)
            setTimeout(() => {
                navigateTo('home')
            }, 2000);
            return user
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    const fade = useSpring({
        from: { opacity: 0 }, opacity: 1
    })


    return (
        <StyledFormCont as={animated.div} style={fade}>
            <StyledFormHeading>Confirmation code</StyledFormHeading>
            <StyledForm onSubmit={handleSubmit((data) => {
                confirmSignUp(data)
                console.log(data)
            })}>
                <StyledInputContainer>
                    <StyledInputForm {...register('username')} type="text" required />
                    <label htmlFor='username'>Username</label>
                </StyledInputContainer>
                <StyledInputContainer>
                    <StyledInputForm {...register('code')} autoComplete='off' type="text" required />
                    <label htmlFor='code'>Confirmation code</label>
                </StyledInputContainer>
                <Btnlog type="submit">Confirm</Btnlog>
            </StyledForm>




        </StyledFormCont>
    )
}
