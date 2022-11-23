import React, { useState } from 'react';
import { logout } from '../../requests/RequestUser';
import {
  Nav,
  NavLink,
  NavMenu,
  StyledIcone,
  NavMenuPar,
  StyledDropDown,
  StyledDropDownParent,
  NavLinkDropDown,
  StyledSelect,
  DivNavBar

} from '../styles/NavbarElements';
import homelogo from '../../images/homelogo.png';
import loginlogo from '../../images/loginlogo.png';
import signuplogo from '../../images/signuplogo.png';
import aboutlogo from '../../images/aboutlogo.png';
import logoutlogo from '../../images/logoutlogo.png';
import { useTranslation } from 'react-i18next';
import SelectNav from './SelectNav';
import { useSpring, animated } from 'react-spring';
import Login from '../../auth/Login';

export default function Navbar({  logged, setUser, setLogged, user }) {

  const [open, set] = useState(false)



  const fade = useSpring({
    from: { opacity: 0, backgroundColor: 'white' },
    opacity: 1, backgroundColor: 'rgba(0, 0, 0, 0.89)'
  })

  const { t } = useTranslation();

  return (
    <NavMenuPar as={animated.div} style={fade}>
      <Nav>
        <NavMenu>
          <StyledSelect>
            <SelectNav />
          </StyledSelect>
          <NavLink to='/home' >
            {t('home')}
          </NavLink>
          <NavLink to='/about' >
            {t('about')}
          </NavLink>
          {logged ?
            <>
              <NavLink to='/login' onClick={() => logout(setUser, setLogged)} >
                {t('logout')}
              </NavLink>
              <NavLink to='/account' >
                {user}
              </NavLink>
            </>
            :
            <>
              {/* <NavLink onClick={() => { set(!open) }} to='' >
                {t('login')}
              </NavLink> */}
              <DivNavBar onClick={() => {set(!open)}}>
              
              <Login  set={set} open={open} />
              </DivNavBar>
              <NavLink to='/signup' >
                {t('signup')}
              </NavLink>
            </>
          }
        </NavMenu>
        <StyledDropDownParent>

          <StyledIcone>
          </StyledIcone>

          <StyledDropDown>

            <NavLinkDropDown to='/home' image={homelogo} >
              Home
            </NavLinkDropDown>
            <NavLinkDropDown to='/about' image={aboutlogo} >
              About
            </NavLinkDropDown>
            {logged ?
              <>
                <NavLinkDropDown to='/account' image={loginlogo} >
                  {user}
                </NavLinkDropDown>
                <NavLinkDropDown to='/login' image={logoutlogo} onClick={() => logout(setUser, setLogged)} >
                  Log-out
                </NavLinkDropDown>
              </>
              :
              <>
                <NavLinkDropDown to='/login' image={loginlogo} >
                  Login
                </NavLinkDropDown>
                <NavLinkDropDown to='/signup' image={signuplogo} >
                  Sign-up
                </NavLinkDropDown>
              </>
            }
          </StyledDropDown>



        </StyledDropDownParent>
      </Nav>
    </NavMenuPar>

  )
}
