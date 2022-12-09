import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
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
import { Btnlog } from '../components/styles/ButtonElements';
import { useTranslation } from 'react-i18next';
import poolData from "../UserPool";
import { CognitoUser } from "amazon-cognito-identity-js";
import { Auth } from 'aws-amplify';
import ClipLoader from "react-spinners/ClipLoader";
// import * as AWS from "@aws-sdk/client-cognito-identity-provider";

export default function ForgotPassword({ message, setMessage, setLoading, loading, color, navigateTo }) {

    const [stage, setStage] = useState(1)
    const { register, handleSubmit, reset } = useForm();
    const { t } = useTranslation();


    const sendCode = async (username) => {
        try {
            const code = await Auth.forgotPassword(username)
            console.log(code)
            if (code === 'SUCCESS') {
                setStage(2)
            }
        } catch (error) {
            setLoading(false)
            setMessage('Username incorrect')
            console.log(error)
            
        }
    };


    const confirmCode = async (data) => {
        try {
            const change = await Auth.forgotPasswordSubmit(data.username, data.code, data.new_password)
            // console.log(change)
            if (change === 'SUCCESS') {
                navigateTo('login')
            }
            return change
        } catch (error) {
            setLoading(false)
            setMessage(error)
            console.log(error)
        }
    }


    // setTimeout(() => {
    //     navigateTo('login')
    // })

    const fade = useSpring({
        from: { opacity: 0 }, opacity: 1
    })


    return (
        <StyledFormContAccount as={animated.div} style={fade}>
            {stage === 1 && (
                <StyledForm onSubmit={handleSubmit((data, e) => {
                    setLoading(true)
                    sendCode(data.username)
                    reset()
                })}>
                    <StyledFormHeading>Forget password</StyledFormHeading>
                    {message ? <StyledSpanMessage>{t(`${message}`)}</StyledSpanMessage> : null}
                    <StyledInputContainer>
                        {/* <LabelAccount htmlFor="currentpassword">{t('account.currentpassword')}</LabelAccount> */}
                        <StyledInputForm style={{ marginBottom: '4%' }} {...register("username")} required />
                        <label htmlFor='username'>Your username</label>
                    </StyledInputContainer>
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
                            : <>Send code</>
                    }
                    </Btnlog>
                </StyledForm>
            )}
            {stage === 2 && (
                <StyledForm onSubmit={handleSubmit((data) => {
                    setLoading(true)
                    confirmCode(data)
                    reset()

                })}>
                    <StyledFormHeading>Forget password</StyledFormHeading>
                    {message ? <StyledSpanMessage>{t(`${message}`)}</StyledSpanMessage> : null}
                    <StyledInputContainer>
                        <StyledInputForm {...register("username")} required />
                        <label htmlFor='username'>Username</label>
                        {setLoading(false)}
                    </StyledInputContainer>

                    <StyledInputContainer>
                        <StyledInputForm style={{ marginBottom: '4%' }} {...register("code")} required />
                        <label htmlFor='code'>Code</label>
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <StyledInputForm style={{ marginBottom: '4%' }} {...register("new_password")} required />
                        <label htmlFor='new_password'>New password</label>
                    </StyledInputContainer>

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
                            : <>Change password</>
                    }
                    </Btnlog>
                </StyledForm>
            )}
        </StyledFormContAccount >
    )
}
