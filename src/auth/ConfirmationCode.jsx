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
import ClipLoader from "react-spinners/ClipLoader";
import {
    createPoint as createPointMutation,
    updatePoint as updatePointMutation,

} from '../graphql/mutations';
import { API } from "aws-amplify";



export default function ConfirmationCode({ setLoading, loading, color, setExistscore, setBestscoreuser, setLogged, navigateTo }) {

    const { register, handleSubmit, reset } = useForm()
    const [message, setMessage] = useState('')


    async function createPoint(newuser) {
        const data = {
            score: 0,
            owner: newuser,
            typedate: "date",
            typescore: "score"
        }
        try {
            // var connected = await Auth.currentUserInfo()
            // if (connected !== null) {
            const result = await API.graphql({
                query: createPointMutation,
                variables: { input: data }
            })
            localStorage.setItem('userscore', JSON.stringify(0))
            localStorage.setItem('scoreid', JSON.stringify(result.data.createPoint.id))
            //   setExistscore(true)
            setBestscoreuser(0)
            console.log(result)
            return result
        } catch (error) {
            alert('user not connected, couldnt create score')
            console.log('user not connected, couldnt create score')
        }
    }

    function listenToAutoSignInEvent() {
        Hub.listen('auth', ({ payload }) => {
            const { event } = payload;
            if (event === 'autoSignIn') {
                const user = payload.data;
                //registerScores(user.username, setExistscore, setBestscoreuser)
                setLogged(true)

                // assign user
                setTimeout(() => {
                    createPoint(user.username)
                    navigateTo('')
                }, 1000);
            } else if (event === 'autoSignIn_failure') {
                setMessage('Logging failed');

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
            setLoading(false);
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
                setLoading(true)
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
                            Confirm
                        </>
                }</Btnlog>
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
