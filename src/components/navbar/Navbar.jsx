import React from 'react';
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
  StyledSelect
} from '../styles/NavbarElements';
import homelogo from '../../images/homelogo.png';
import loginlogo from '../../images/loginlogo.png';
import signuplogo from '../../images/signuplogo.png';
import aboutlogo from '../../images/aboutlogo.png';
import logoutlogo from '../../images/logoutlogo.png';
import { useTranslation } from 'react-i18next';
import SelectNav from './SelectNav';
import { useSpring, animated } from 'react-spring';
import { Auth } from 'aws-amplify';



export default function Navbar({ navigateTo, logged, setUser, setLogged, user }) {

  const { t } = useTranslation();

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })

  async function signOut() {
    try {
      await Auth.signOut();
      setUser('')
      setLogged(false)
      navigateTo('login')
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }


  return (
    <NavMenuPar as={animated.div} style={fade}>
      <Nav >
        <NavMenu>
          <StyledSelect>
            <SelectNav />
          </StyledSelect>
          <NavLink to='/' >
            {t('homenavbar')}
          </NavLink>
          {/* <NavLink to='/about' >
            {t('aboutnavbar')}
          </NavLink> */}
          {logged ?
            <>
              {/* <NavLink to='/login' onClick={() => logout(setUser, setLogged)} > */}
              <NavLink to='/login' onClick={() => signOut()} >
                {t('logoutnavbar')}
              </NavLink>
              <NavLink to='/account' >
                {user}
              </NavLink>
            </>
            :
            <>
              <NavLink to='/login' >
                {t('loginnavbar')}
              </NavLink>
              <NavLink to='/signup' >
                {t('signupnavbar')}
              </NavLink>
            </>
          }
        </NavMenu>
        {/* <StyledDropDownParent>

          <StyledIcone>
          </StyledIcone>

          <StyledDropDown>

            <NavLinkDropDown to='/' image={homelogo} >
              {t('homenavbar')}
            </NavLinkDropDown>
            {logged ?
              <>
                <NavLinkDropDown to='/account' image={loginlogo} >
                  {user}
                </NavLinkDropDown>
                <NavLinkDropDown to='/login' image={logoutlogo} onClick={() => signOut()} >
                  {t('logoutnavbar')}
                </NavLinkDropDown>
              </>
              :
              <>
                <NavLinkDropDown to='/login' image={loginlogo} >
                  {t('loginnavbar')}
                </NavLinkDropDown>
                <NavLinkDropDown to='/signup' image={signuplogo} >
                  {t('signupnavbar')}
                </NavLinkDropDown>
              </>
            }
          </StyledDropDown>
        </StyledDropDownParent> */}
      </Nav>
    </NavMenuPar>
  )
}
