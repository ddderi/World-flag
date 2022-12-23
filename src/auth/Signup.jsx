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
import ClipLoader from "react-spinners/ClipLoader";
// import {
//     createPoint as createPointMutation,
//     updatePoint as updatePointMutation,

// } from '../graphql/mutations';
// import { API } from "aws-amplify";


export default function Signup({ setLoading, loading, color, navigateTo, setUser, setLogged }) {

    const { register, handleSubmit, reset } = useForm()
    const [message, setMessage] = useState('')
    const [revealedone, setRevealedone] = useState(false)
    const [revealedtwo, setRevealedtwo] = useState(false)
    const { t } = useTranslation();

    const fade = useSpring({
        from: { opacity: 0 }, opacity: 1
    })








    async function signUp(data) {
        try {
            const { user } = await Auth.signUp({
                username: data.username.toLowerCase(),
                password: data.password,
                attributes: {
                    email: data.email.toLowerCase()
                },
                autoSignIn: {
                    enabled: true
                }
            });
            setTimeout(() => {
                // createPoint(data.username)
                navigateTo('confirmation')
            }, 1000);
            // createPoint(newuser)
            return user
        } catch (error) {
            setMessage('Password must have one uppercase, one numeric and be eight length longs characters ');
            console.log(error);
            setLoading(false);
        }
    }


    // const firstcon = async(data) => {
    //     try{
    //         const firstconnection = await signUp(data)
    //         // const createfirsttable = await createPoint(data.username)
    //         if(firstconnection){
    //             const createfirsttable = await createPoint(data.username)
    //             console.log(createfirsttable)
    //             return createfirsttable
    //         }else{
    //             console.log('not created yet')
    //         }
    //         console.log(firstconnection)
    //         //console.log(createfirsttable)
    //         return firstconnection
    //     }catch(error){
    //         console.log(error)
    //     }
    // }



    return (
        <>
            <StyledFormCont as={animated.div} style={fade}>
                <StyledFormHeading>{t('signup.heading')}</StyledFormHeading>
                {message !== undefined ? <StyledSpanMessage style={{ marginBottom: "8%" }}>{t(`${message}`)}</StyledSpanMessage> : <></>}
                <StyledForm onSubmit={handleSubmit((data) => {
                    setLoading(true)
                    signUp(data)
                    // reset()
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
                    <StyledSpan>Do you have a confirmation <BtnLinkLog type='button' onClick={() => navigateTo('confirmation')} >code</BtnLinkLog> ?</StyledSpan>
                    {loading && (
                        <Btnlog type="submit" disabled={loading ? true : false} >
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
                        <Btnlog type="submit" disabled={loading ? true : false} >
                            {t('signup.button')}
                        </Btnlog>
                    )}
                </StyledForm>
            </StyledFormCont>
        </>
    )
}
