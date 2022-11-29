import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import dropDownIcon from '../../images/btndropdown.png';
import Select from 'react-select';

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
width: 100%;
padding: 0% 1.5% 0% 1.5%;
    white-space: nowrap;
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
  width: 175px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${StyledDropDownParent}:active &{
    display: flex;
    right: 0;
    flex-direction: column;
    text-align: center;
   
  }
  ${StyledDropDownParent}:hover &{
    display: flex;
    right: 0;
    flex-direction: column;
    text-align: center;
   
  }

//   @media(hover: hover) and (pointer: fine) {
//     ${StyledDropDownParent}:hover &{
//       display: flex;
//       right: 0;
//       flex-direction: column;
//       text-align: center;
     
//     }
// }


`;


// @media(hover: hover) and (pointer: fine) {
//   .menu-link:hover {
//       /* Targeting devices with mouse cursor and :hover */
//   }
// }



export const NavLinkDropDown = styled(Link)`
  display: flex;
  padding: 5%;
  text-decoration: none;
  color: black;
  text-align: center;
  border-radius: 3px 3px;
  //display: inline-block;
  position: relative;
  //transition: 0.5s;
  &:before {
    background-image: url(${props => props.image});
    background-size: 100% 100%;
    display: inline-block;
    content: "";
    color: rgba(0,0,0,0);
    margin-right: 5%;
    width: 20px;
    heigth: 50px;
    position: relative;
  }
 
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FA8072;
    transform-origin: bottom right;
    transition: transform 0.25s ease-in-out;
  }

    &:hover::after {
      
      transform: scaleX(1);
      transform-origin: bottom left;
    }
`;

export const StyledSelect = styled.div`
position: relative;

right: 11%;

@media screen and (max-width: 765px){
  position: absolute;
  left: 5px;
}


`;

export const StyledSelectChild = styled(Select)`
.react-select-container {
  color: white;
}

.react-select__single-value{
color: white;
}

.react-select__menu{
width: 100px;
margin-top: 5px;
}


.react-select__indicators {
  display: none;
}

`;
