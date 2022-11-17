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
	margin-top:25px;
	border-radius:2px;
	cursor:pointer;
	position:relative;
  transition: 0.5s;
  &:hover {
    background-color: #d62c1a;
  }
`;

export const BtnlogGame = styled(Btnlog)`
  width: 50%;
  position: relative;
  left: 50%;
  @media screen and (max-width: 1300px){
    left: 25%;
  }
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