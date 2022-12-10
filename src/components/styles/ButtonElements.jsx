import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  color: #63D471;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #63D471;
  border-radius: 3px;
  cursor: pointer;
 
`;


export const Btnlog = styled.button`
  color:#fff;
	background-color:#e74c3c;
	outline: none;
  border: 0;
  color: #fff;
	padding:10px 20px;
	text-transform:uppercase;
	margin: 4%;
	border-radius:2px;
	cursor:pointer;
	position:relative;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    background-color: #d62c1a;
  }
`;

export const BtnlogGame = styled(Btnlog)`
  width: 45%;
  margin-top: 8%;
  // position: relative;
  // left: 50%;
  // @media screen and (max-width: 1300px){
  //   left: 25%;
  // }
`;

export const BtnLink = styled.button`
  background: none!important;
  border: none;
  padding: 0!important;
  color: #069;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 32px;

`;

export const BtnLinkLog = styled(BtnLink)`
    font-size: 16px;
    color: #069;
    text-transform: none;
    display: inline-block;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #0087ca;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;


export const ButtonError = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
`;