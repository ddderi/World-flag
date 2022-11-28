import React from 'react';
import {
  StyledCont,
  StyledCoreAbout,
  StyledFooter
} from './styles/GeneralElements';
import { useSpring, animated } from 'react-spring';

export default function About() {

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })

  return (
    <StyledCont as={animated.div} style={fade}>
      <StyledCoreAbout>
        more info
      </StyledCoreAbout>
      <StyledFooter>
        footer
      </StyledFooter>
    </StyledCont>
  )
}
