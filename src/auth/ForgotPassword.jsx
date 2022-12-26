import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useForm } from 'react-hook-form';
import {
    StyledForm,
    StyledInputForm,
    StyledFormHeading,
    StyledSpanMessage,
    StyledFormContAccount,
    StyledInputContainer,
}
    from '../components/styles/GeneralElements';
import { Btnlog } from '../components/styles/ButtonElements';
import { useTranslation } from 'react-i18next';
import { Auth } from 'aws-amplify';
import ClipLoader from "react-spinners/ClipLoader";
import { NavLinkLogin, StyledDivLogin } from '../components/styles/NavbarElements';


export default function ForgotPassword({ setMessage, setLoading, loading, color, navigateTo }) {

    const [stage, setStage] = useState(1)
    const { register, handleSubmit, reset } = useForm();
    const { t } = useTranslation();
    const [messageForgot, setMessageForgot] = useState('')

    const sendCode = async (username) => {
        try {
            const code = await Auth.forgotPassword(username)
            setStage(2)
            setMessageForgot(`Email sent to ${code.CodeDeliveryDetails.Destination}`)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setMessageForgot('Username incorrect')
            console.log(error)
        }
    };


    const confirmCode = async (data) => {
        try {
            const change = await Auth.forgotPasswordSubmit(data.username, data.code, data.new_password)
            if (change === 'SUCCESS') {
                navigateTo('login')
                setMessage('Succes, you can now login with your new credentials')
                setLoading(false)
            }
            return change
        } catch (error) {
            setLoading(false)
            setMessageForgot(error)
            console.log(error)
        }
    }


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
                    {messageForgot ? <StyledSpanMessage>{t(`${messageForgot}`)}</StyledSpanMessage> : null}
                    <StyledInputContainer>
                        {/* <LabelAccount htmlFor="currentpassword">{t('account.currentpassword')}</LabelAccount> */}
                        <StyledInputForm style={{ marginBottom: '4%' }} {...register("username")} required />
                        <label htmlFor='username'>Your username</label>
                    </StyledInputContainer>
                    <StyledDivLogin>
                        <NavLinkLogin onClick={() => setStage(2)} >Already have a code ?</NavLinkLogin>
                    </StyledDivLogin>
                    {loading && (
                        <Btnlog type='submit' disabled={loading ? true : false} >
                            <ClipLoader
                                color={color}
                                loading={loading}
                                // cssOverride={override}
                                size={15}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </Btnlog>
                    )}
                    {!loading && (
                        <Btnlog type='submit' disabled={loading ? true : false} >Send code</Btnlog>

                    )}
                </StyledForm>
            )}
            {stage === 2 && (
                <StyledForm onSubmit={handleSubmit((data) => {
                    setLoading(true)
                    confirmCode(data)
                    reset()

                })}>
                    <StyledFormHeading>Forget password</StyledFormHeading>
                    {messageForgot ? <StyledSpanMessage>{t(`${messageForgot}`)}</StyledSpanMessage> : null}
                    <StyledInputContainer>
                        <StyledInputForm style={{ marginBottom: '4%' }} {...register("username")} required />
                        <label htmlFor='username'>Username</label>
                        {/* {setLoading(false)} */}
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <StyledInputForm style={{ marginBottom: '4%' }} {...register("code")} required />
                        <label htmlFor='code'>Code</label>
                    </StyledInputContainer>
                    <StyledInputContainer>
                        <StyledInputForm style={{ marginBottom: '4%' }} {...register("new_password")} required />
                        <label htmlFor='new_password'>New password</label>
                    </StyledInputContainer>
                    {loading && (
                        <Btnlog type='submit' disabled={loading ? true : false} >
                            <ClipLoader
                                color={color}
                                loading={loading}
                                // cssOverride={override}
                                size={15}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </Btnlog>
                    )}
                    {!loading && (
                        <Btnlog type='submit' disabled={loading ? true : false} >Change password</Btnlog>
                    )}
                </StyledForm>
            )}
        </StyledFormContAccount >
    )
}
