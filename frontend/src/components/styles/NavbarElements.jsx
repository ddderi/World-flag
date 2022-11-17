import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import dropDownIcon from '../../images/btndropdown.png';

export const Nav = styled.nav`
  display: flex;
  height: 60px;
  justify-content: space-around;
  margin: 0;
  width: 50%;
  @media screen and (max-width: 765px){
    width: 98%;
    justify-content: flex-end;
    align-items: center;  
  }
`;

export const NavLink = styled(Link)`
text-decoration: none;
color: white;
width: 25%;
text-align: center;
display: flex;
height: 100%;
justify-content:center;
align-items: center;
transition: 0.5s;
  @media screen and (max-width: 765px){
    display: none;
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;


export const NavMenuPar = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.89);
  color: white;
 // IMG BACKGROUND TO PUT HERE
`;

export const NavMenu = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 765px){
    padding-left: 40%
  }
`;

export const StyledDropDownParent = styled.div`
  display: none;
  @media screen and (max-width: 765px){
  display: inline-block;
  position: relative;
  float: right;
   width: 30px;
   height: 35px;
}
`;



export const StyledIcone = styled.div`
 display: inline-block;
 background-image: url(${dropDownIcon});
 background-size: contain;
 width: 30px;
 height: 30px;
}
 
`;

export const StyledDropDown = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  border-radius: 3px 3px;
  width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${StyledDropDownParent}:hover &{
    display: flex;
    right: 0;
    flex-direction: column;
    text-align: center;
  }
`;


export const NavLinkDropDown = styled(Link)`
  display: flex;
  padding: 5%;
  text-decoration: none;
  color: black;
  text-align: center;
  transition: 0.5s;
  &:before {
    background-image: url(${props => props.image});
    background-size: 100% 100%;
    display: inline-block;
    content: "";
    color: rgba(0,0,0,0);
    padding-right: 4%;
    width: 20px;
    heigth: 50px;
    position: relative;
  }
 
  &:hover {
    background-color: grey;
  }
`;

