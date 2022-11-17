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
  NavLinkDropDown
} from '../styles/NavbarElements';
import homelogo from '../../images/homelogo.png';
import loginlogo from '../../images/loginlogo.png';
import signuplogo from '../../images/signuplogo.png';
import aboutlogo from '../../images/aboutlogo.png';
import logoutlogo from '../../images/logoutlogo.png';

export default function navbar({ logged, setUser, setLogged, user }) {



  return (
    <NavMenuPar>
      <Nav >
        <NavMenu>
          <NavLink to='/home' >
            Home
          </NavLink>
          <NavLink to='/about' >
            About
          </NavLink>
          {logged ?
            <>
              <NavLink to='/login' onClick={() => logout(setUser, setLogged)} >
                Log-out
              </NavLink>
              <NavLink to='/account' >
                {user}
              </NavLink>
            </>
            :
            <>
              <NavLink to='/login' >
                Login
              </NavLink>
              <NavLink to='/signup' >
                Signup
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
                  Account
                </NavLinkDropDown>
                <NavLinkDropDown to='/login' image={logoutlogo} onClick={() => logout(setUser, setLogged)} >
                  Log-out
                </NavLinkDropDown>
                <NavLinkDropDown to='/' >
                  {user}
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
