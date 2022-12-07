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
import { Hub } from 'aws-amplify';
import { registerScores } from '../requests/RequestUser';



export default function ConfirmationCode({ setExistscore, setBestscoreuser, setLogged, navigateTo }) {

    const { register, handleSubmit, reset } = useForm()
    const [message, setMessage] = useState('')


    function listenToAutoSignInEvent() {
        Hub.listen('auth', ({ payload }) => {
            const { event } = payload;
            if (event === 'autoSignIn') {
                const user = payload.data;
                registerScores(user.username, setExistscore, setBestscoreuser)
                setLogged(true)
                console.log(user)
                // assign user
                setTimeout(() => {
                    navigateTo('')
                }, 1000);
            } else if (event === 'autoSignIn_failure') {
                setMessage('Logging failed')
            }
        })
    }

    async function confirmSignUp(data) {
        try {
            const user = await Auth.confirmSignUp(data.username, data.code);
            listenToAutoSignInEvent()
            return user
        } catch (error) {
            setMessage('Error in the code')
            console.log('error confirming sign up', error);
        }
    }



    async function resendConfirmationCode(username) {
        try {
            await Auth.resendSignUp(username);
            setMessage('code resent successfully')
            console.log('A code has been sent successfully');
        } catch (err) {
            setMessage('Please fill your username')
            console.log('error resending code: ', err);
        }
    }


    const fade = useSpring({
        from: { opacity: 0 }, opacity: 1
    })


    return (
        <StyledFormCont as={animated.div} style={fade}>
            <StyledFormHeading>Confirmation code</StyledFormHeading>
            {message !== undefined ? <StyledSpanMessage>{message}</StyledSpanMessage> : null}
            <StyledForm onSubmit={handleSubmit((data) => {
                confirmSignUp(data)
                // reset()
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
            <StyledForm onSubmit={handleSubmit((data) => {
                resendConfirmationCode(data.username)
                console.log(data)
            })}>
                <StyledSpan>You didn't receive any code ? <BtnLinkLog type='submit'>Click here</BtnLinkLog> to receive a new code</StyledSpan>
            </StyledForm>
        </StyledFormCont>
    )
}
