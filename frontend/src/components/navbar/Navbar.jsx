import React from "react";
import { logout } from "../../requests/RequestUser";
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
} from "../styles/NavbarElements";
import homelogo from "../../images/homelogo.png";
import loginlogo from "../../images/loginlogo.png";
import signuplogo from "../../images/signuplogo.png";
import aboutlogo from "../../images/aboutlogo.png";
import logoutlogo from "../../images/logoutlogo.png";
import { useTranslation } from "react-i18next";
import SelectNav from "./SelectNav";

export default function Navbar({
  languages,
  logged,
  setUser,
  setLogged,
  user,
  token,
  setToken,
}) {
  const { t } = useTranslation();

  return (
    <NavMenuPar>
      <Nav>
        <NavMenu>
          <StyledSelect>
            <SelectNav />
          </StyledSelect>
          <NavLink to="/home">
            {/* <Trans i18nKey='description.part1'>
            Home
            </Trans> */}
            {t("home")}
          </NavLink>
          <NavLink to="/about">{t("about")}</NavLink>
          {logged ? (
            <>
              <NavLink
                to="/login"
                onClick={() => logout(setUser, setLogged, token, setToken)}
              >
                {t("logout")}
              </NavLink>
              <NavLink to="/account">{user}</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">{t("login")}</NavLink>
              <NavLink to="/signup">{t("signup")}</NavLink>
            </>
          )}
        </NavMenu>
        <StyledDropDownParent>
          <StyledIcone></StyledIcone>

          <StyledDropDown>
            <NavLinkDropDown to="/home" image={homelogo}>
              Home
            </NavLinkDropDown>
            <NavLinkDropDown to="/about" image={aboutlogo}>
              About
            </NavLinkDropDown>
            {logged ? (
              <>
                <NavLinkDropDown to="/account" image={loginlogo}>
                  {user}
                </NavLinkDropDown>
                <NavLinkDropDown
                  to="/login"
                  image={logoutlogo}
                  onClick={() => logout(setUser, setLogged)}
                >
                  Log-out
                </NavLinkDropDown>
              </>
            ) : (
              <>
                <NavLinkDropDown to="/login" image={loginlogo}>
                  Login
                </NavLinkDropDown>
                <NavLinkDropDown to="/signup" image={signuplogo}>
                  Sign-up
                </NavLinkDropDown>
              </>
            )}
          </StyledDropDown>
        </StyledDropDownParent>
      </Nav>
    </NavMenuPar>
  );
}
