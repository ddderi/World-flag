import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loggingUser } from '../requests/RequestUser';
import {
  StyledFormCont,
  StyledForm,
  StyledInputForm,
  StyledFormHeading,
  StyledInputContainer,
  StyledSpan,
  StyledSpanMessage,
  StyledImgPassword,

} from '../components/styles/GeneralElements';
import { StyledLinkNavBar } from '../components/styles/NavbarElements';
import { Btnlog, BtnLinkLog } from '../components/styles/ButtonElements';
import eyepassword from '../images/eyepassword.png';
import eyepasswordclose from '../images/eyepasswordclose.png';
// import { useSpring, animated } from 'react-spring';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web'





function Login({ open, set, setUser, setLogged, navigateTo, message, setMessage }) {

  const { register, handleSubmit, reset } = useForm()
  const [revealed, setRevealed] = useState(false)



  const logInUser = async (data) => {
    try {
      const result = await loggingUser(data, setMessage)
      if (result.login) {
        setMessage(result.message)
        localStorage.setItem('score', JSON.stringify(result.user.bestscores))
        localStorage.setItem('user', JSON.stringify(result.user.username))
        setUser(result.user.username)
        setLogged(true)
        setTimeout(() => {
          navigateTo('home')
        }, 1000);
      }
      return result
    } catch (error) {
      console.log(error)
    }
  }


// const position = useSpring({
// // opacity: open ? 0 : 1,
// // marginTop: open ? -540 : 0,
// marginLeft: open ? -100 : 0,
// width: open ? 50 : '',
// height: open ? 50 : '',
// //marginTop: open ? -565 : 0,
//   config: {duration: 200}
// })

const springApi = useSpringRef()

const {size, ...rest} = useSpring({
  ref: springApi,
    config: config.stiff,
    from: { size: '20%',
    
    // background: 'hotpink' 
  },
    to: {
      size: open ? '60%' : '20%',
      
      // background: open ? 'white' : 'hotpink',
    },
})


const transApi = useSpringRef()
const transition = useTransition(open, {
  ref: transApi,
  // from: {x: -1500 , y: -1000, opacity: 0, config: { duration: 1000 }},
  // enter: {x:  -200, y: -200, opacity: 1, config: { duration: 1000 }},
  // leave: {opacity: 0, config: { duration: 1000 }},
  from: {x: -100 , y: 0, opacity: 1 },
    enter: {x:  0, y: 0, opacity: 1 },
    leave: {x:  0, y: 0, opacity: 1 },
  })


useChain(open ? [springApi, transApi] : [transApi, springApi], [
  0,
  open ? 0.1 : 0.6
] )


  return (
   < StyledLinkNavBar as={animated.div} style={{...rest, width: size, height: size}}>
      {transition((style, item) => 
        item ? 
      <StyledFormCont as={animated.div} style={style} >
           <StyledLinkNavBar >
      {/* </StyledFormCont> */}
        <StyledFormHeading>Login</StyledFormHeading>

        {message !== undefined ? <StyledSpanMessage>{message}</StyledSpanMessage> : null}
        <StyledForm onSubmit={handleSubmit((data) => {
          logInUser(data)
          reset()
        })}>
          <StyledInputContainer >
            <StyledInputForm {...register('username', { required: true })} type="text" autoComplete="off" required />
            <label htmlFor='username'>Username</label>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledInputForm {...register('password')} type={!revealed ? 'password' : 'text'} required />
            <StyledImgPassword src={!revealed ? eyepasswordclose : eyepassword} onClick={() => { setRevealed(!revealed) }} />
            <label htmlFor="password" >Password</label>
          </StyledInputContainer>
          <StyledSpan>You don't have an account ? Click <BtnLinkLog type='button' onClick={() => navigateTo('signup')} >here</BtnLinkLog></StyledSpan>
          <Btnlog type='submit' >submit</Btnlog>
        </StyledForm>
        </StyledLinkNavBar>
         </StyledFormCont>
         :''
         )}
         </StyledLinkNavBar>
  )
}

export default Login