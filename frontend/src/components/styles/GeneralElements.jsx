import styled from 'styled-components';

export const StyledCont = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: space-evenly;
  // justify-content: center;
  text-align: center;
  width: 55%;
  position:absolute;
	left:50%;
	top:60%;
	transform: translate(-50%,-50%);
  @media screen and (max-width: 1300px) and (max-height: 500px){
    width: 75%;
    top:75%;
  }
  @media screen and (max-height: 380px){
    width: 75%;
    top:95%;
  }


`;

export const StyledHeading = styled.h1`
background-color: rgba(0, 0, 0, 0.89);
color: white;
text-transform: uppercase;
border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
`;


export const StyledHome = styled(StyledHeading)`
background-color: rgba(0, 0, 0, 0.89);
color: white;
text-transform: uppercase;
border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
`;


export const StyledHeadingFooter = styled.h3`
width: 100%;
border-bottom: 2px solid white;
`;

export const StyledCore = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
 @media screen and (max-width: 1100px){
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
`;

export const StyledCoreAbout = styled.div`
display: inline-block;
background-color: rgba(0, 0, 0, 0.89);
color: white;
border-radius: 10px 10px;
box-shadow: 1px 1px 3px gray;
margin-top: 1%;
padding: 4%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
`;



export const StyledFooter = styled.div`
  background-color: rgba(0, 0, 0, 0.89);
  color: white;
  border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledFooterDiv = styled.div`
 display: flex;
 margin: 2%;
 width: 100%;
 justify-content: space-between;
  align-items: center;
`;


export const StyledGameCont = styled.div`
  padding: 1%;
  grid-column-start: 1;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: 65% 35%;
  column-gap: 10px;
  row-gap: 10px;
  border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
  background-color: rgba(0, 0, 0, 0.89);
  @media screen and (max-width: 1300px){
    display: flex;
    flex-direction: column;
  }
`;

export const StyledGameChildLeft = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  @media screen and (max-width: 1040px){
    margin: 0;
  }
`;


export const StyledImgFlag = styled.img`
  width: 300px; 
  height: 200px; 
  pointer-events: none;
  border: 8px solid white;
  @media screen and (max-width: 570px){
    width: 90%;
  }
  @media screen and (max-width: 870px){
    max-width: 90%;
  }
`;



export const StyledGameChild = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-rows: 22% 22% 22% 22%;
  grid-template-columns: 90%;
  grid-row-gap: 3%;
  @media screen and (max-width: 1300px){
    display: flex;
    flex-direction: column;
    justify-content: center;
     align-items: center;
    width: 100%;
    height: 105px;
  }
`;



export const StyledGameChildAnswer = styled.div`
  position: relative;
  background-color: #fafafa;
  border-radius: 3px 3px;
  //box-shadow: 1px 1px 1px gray;
  cursor: pointer;
  opacity: 0.85;
  @media screen and (min-width: 570px) and  (max-width: 1300px){
    margin-bottom: 1%;
    width: 70%;
  }
  @media screen and (max-width: 570px){
    margin-bottom: 1%;
    width: 90%;
  }
  &:hover {
    opacity: 1;
    
  }
`;


export const StyledRecordsCont = styled.div`
  grid-column-start: 3;
  grid-column-end: 3;
  color: white;
  border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
  background-color: rgba(0, 0, 0, 0.89);
  display: flex;
  margin-left: 2%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 2%;
  @media screen and (max-width: 1100px){
    margin-left: 0;
  }
  @media screen and (max-width: 450px){
    display: none;
  }
`;

export const LabelAccount = styled.label`
color: white;
`;

export const StyledRecordsChild = styled.div`
  width: 80%;
  color: white;
`;


export const StyledFormHeading = styled.h1`
  color:#fff;	
  text-transform:uppercase;
  font-size: 23px;
  margin: -50px 0 80px 0;
  display: block;
  text-align: center;
`;


export const StyledInputForm = styled.input`
 
`;

export const StyledFormCont = styled.div`
  position:absolute;
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.89);
	border-radius:3px;
	padding:70px 100px;
  @media screen and (max-width: 500px){
      width: 40%;
    }
`;


export const StyledInputContainer = styled.div`
  position:relative;
  margin-bottom:25px;
& label {
  position:absolute;
	top:0px;
	left:0px;
	font-size:16px;
	color:#fff;	
    pointer-event:none;
	transition: all 0.5s ease-in-out;
}
& ${StyledInputForm} {
  border:0;
  border-bottom:1px solid #555;  
  background:transparent;
  width:100%;
  padding:8px 0 5px 0;
  font-size:16px;
  color:#fff;
}
& ${StyledInputForm}:focus{
  border:none;	
 outline:none;
 border-bottom:1px solid #e74c3c;	
}
& ${StyledInputForm}:focus ~ label{ 
  top:-12px;
	font-size:12px;
}
${StyledInputForm}:valid ~ label {
  top:-12px;
	font-size:12px;
}
`;


export const StyledSpan = styled.span`
color: white;
font-size: 16px;
`;

export const StyledSpanMessage = styled(StyledSpan)`
display: inline-block;
color: red;
margin-bottom: 4%; 
text-align: center;
width: 100%;

`;

export const StyledSpanMessageGreen = styled(StyledSpan)`
display: inline-block;
color: red;
margin-bottom: 4%; 
text-align: center;
width: 100%;

`;


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledSpanResult = styled.span`
  color: ${props => props.coloring};
  font-weight: bold;
  width: 50%;
`;


export const StyledErrorBox = styled.div`
  display: ${props => props.display};
  background-color: white;
  z-index: 3;
  position: absolute;
  left: 10%;
  top: 20%;
  width: 80%;
  height: 100px;
  text-align: center;
  border-radius: 10px 10px;
  box-shadow: 1px 1px 3px black;
`;

export const StyledErrorBoxChild = styled.div`
  margin: auto;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

`;