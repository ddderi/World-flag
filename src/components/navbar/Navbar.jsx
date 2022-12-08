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
  StyledSelect,
  NavLinkLadder
} from '../styles/NavbarElements';
// import homelogo from '../../images/homelogo.png';
// import loginlogo from '../../images/loginlogo.png';
// import signuplogo from '../../images/signuplogo.png';
// import aboutlogo from '../../images/aboutlogo.png';
// import logoutlogo from '../../images/logoutlogo.png';
import { useTranslation } from 'react-i18next';
import SelectNav from './SelectNav';
import { useSpring, animated } from 'react-spring';
import { Auth } from 'aws-amplify';



export default function Navbar({ ladderNavbar, setMessage, navigateTo, logged, setUser, setLogged, user }) {

  const { t } = useTranslation();

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })

  async function signOut() {
    try {
      var connected = await Auth.currentUserInfo()
      if (connected) {
        await Auth.signOut();
        setUser('')
        setLogged(false)
        setMessage('')
        navigateTo('login')
        localStorage.removeItem('userscore')
        localStorage.removeItem('scoreid')
        localStorage.removeItem('existscore')
      } else {
        setUser('')
        setLogged(false)
        setMessage('')
        navigateTo('login')
        localStorage.removeItem('userscore')
        localStorage.removeItem('scoreid')
        localStorage.removeItem('existscore')
      }
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const userCapitalize = (user) => {
    return user.charAt(0).toUpperCase() + user.slice(1)
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
                {userCapitalize(user)}
              </NavLink>
              {/* {ladderNavbar ? */}
              <NavLinkLadder display={!ladderNavbar ? 'none' : ''} to='/records' >
                Ladder
              </NavLinkLadder>
              {/* : 
                  <>
                  </>
                  } */}
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
