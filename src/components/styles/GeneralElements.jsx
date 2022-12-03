import styled from 'styled-components';



export const StyledHeading = styled.h1`
background-color: rgba(0, 0, 0, 0.89);
color: white;
text-transform: uppercase;
border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
`;

export const StyledCont = styled.div`
  text-align: center;
  width: 55%;
  position:absolute;
	left:50%;
	top:50%;
  width: 85%;
	transform: translate(-50%,-50%);
  @media screen and (max-width: 905px){
    
    width: 85%;
  }
  @media screen and (max-width: 280px) {
    
    top:55%;
    
    }
  @media screen and (min-width: 906px) {
    width: 65%;
    
  } 

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

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
// margin: 0;

  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  // column-gap: 10px;
//  @media screen and (min-width: 906px){
//   display: flex;
//   flex-direction: column;
//   row-gap: 10px;
//}
  @media screen and (min-width: 765px) {

  display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   column-gap: 10px;

  
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
  height: 50px;
  border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 280px) {
    height: 90px;
  
    
    }


`;

export const StyledFooterDiv = styled.div`
 display: flex;
 margin: 2%;
 width: 100%;
 justify-content: space-between;
  align-items: center;
`;



export const StyledGameCont = styled.div`
  // padding: 1%;
  // grid-column-start: 1;
  // grid-column-end: 3;
  // display: grid;
  // grid-template-columns: 65% 35%;
  // column-gap: 10px;
  // row-gap: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
  background-color: rgba(0, 0, 0, 0.89);
  justify-content: center;
  align-items: center;
  padding: 2% 0%;
  // @media screen and (min-width: 765px) and (max-width: 1150px){
    
  //   display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  
  
  // }
  @media screen and (min-width: 765px) {
    grid-column-start: 1;
    grid-column-end: 3;

  }

`;

export const StyledGameChildLeft = styled.div`
  // grid-column-start: 1;
  // grid-column-end: 1;
  
`;


export const StyledImgFlag = styled.img`
  width: 300px; 
  height: 200px; 
  pointer-events: none;
  border: 8px solid white;
  // @media screen and (max-width: 570px){
  //   width: 76%;
  // }
  @media screen and (max-width: 400px){
    width: 90%;
  }
`;



export const StyledGameChild = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  margin: 0;
  width: 90%;
  display: grid;
  // padding: 4%;
  height: 100px;
  grid-template-rows: 22% 22% 22% 22%;
  grid-template-columns: 100%;
  grid-row-gap: 3%;

  @media screen and (min-width: 550px){
    width: 65%;
  }
  @media screen and (min-width: 1400px){
    width: 55%;
  }
  // @media screen and (max-width: 1300px){
    
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //    align-items: center;
  //   width: 100%;
  //   height: 105px;
  //   padding: 0%;
  // }
`;



export const StyledGameChildAnswer = styled.div`
  position: relative;
  background-color: #fafafa;
  border-radius: 3px 3px;
  //box-shadow: 1px 1px 1px gray;
  cursor: pointer;
  opacity: 0.85;
  // @media screen and (min-width: 570px) and  (max-width: 1300px){
  //   margin-bottom: 1%;
  //   width: 70%;
  // }
  // @media screen and (max-width: 570px){
  //   margin-bottom: 1%;
  //   width: 90%;
  // }
  &:hover {
    opacity: 1;
    
  }
`;


export const StyledRecordsCont = styled.div`
  display: none;
  grid-column-start: 3;
  grid-column-end: 3;
  color: white;
  border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
  background-color: rgba(0, 0, 0, 0.89);
 
  // margin-left: 2%;
  // flex-direction: column;
  // justify-content: space-evenly;
  // align-items: center;
  // padding-bottom: 2%;
  @media screen and (min-width: 765px) {
    display: block;
    height: 100%;
  }
  // @media screen and (max-width: 450px){
  //   display: none;
  // }
`;

export const LabelAccount = styled.label`
color: white;
`;


// BORDER BOTTOM RADIUS LEFTRIGHT 

// export const StyledRecordsChild = styled.div`
//   width: 80%;
//   color: white;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 0% 5% 0% 5%;
//   border-bottom: 1px solid white;
//   border-radius: 10px 10px;
//   @media screen and (max-width: 1100px){
//     width: 50%;
//   }
// `;

// BORDER STYLISH BOTTOM TOP

export const StyledRecordsChild = styled.div`
  width: 80%;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2% auto 2% auto;
  padding: 1% 5% 1% 5%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 5px;
  text-transform: capitalize;
  // @media screen and (max-width: 1100px){
  //   width: 80%;
  //   margin: 1% 0% 1% 0%;
  // }
`;


export const StyledHeadingRecords = styled(StyledHeadingFooter)`

display: none;
@media screen and (min-width: 765px) {
  display: block;
}
`;









export const StyledFormHeading = styled.h1`
  color:#fff;	
  text-transform:uppercase;
  font-size: 23px;
  margin: 2% 0 15% 0;
  display: block;
  text-align: center;
`;


export const StyledInputForm = styled.input`
 
`;

export const StyledFormCont = styled.div`
  position:absolute;
	left:50%;
	top:50%;
  width: 70%;
      padding: 6% 6%;
	transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.89);
	border-radius:3px;
  @media screen and (max-width: 550px) {
    width: 80%;
    padding: 8% 8%;
  } 
  @media screen and (min-width: 551px) and (max-width: 791px){
    width: 60%;
    padding: 8% 8%;
  }
    @media screen and (min-width: 792px){
      width: 28%;
      padding: 8% 8%;
    }
    @media screen and (min-width: 1005px) and (max-width: 1320px){
      width: 30%;
      padding: 4% 4%;
    }
    @media screen  and (min-width: 1320px){
      width: 30%;
      padding: 4% 4%;
    }

`;

export const StyledFormContAccount = styled(StyledFormCont)`

// @media screen and (min-width: 700px) {
//   max-width: 20%;
//   padding: 8% 8%;
// } 
`;


export const StyledImgPassword = styled.img`
 
position: absolute;
  width: 40px;
  height: 40px;
  right: 5px;
  top: -3px;
  // z-index: 2;

  
`;



export const StyledInputContainer = styled.div`
  position:relative;
  width: 100%;
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

// & ${StyledInputForm}:focus ~ ${StyledImgPassword}{

//   display: block;
// }

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
  width: 90%;
`;


export const StyledErrorBox = styled.div`
  display: ${props => props.display};
  background-color: rgba(255,255,255,1);
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
  padding-left: 2%;
  padding-rigth: 2%;
  justify-content: center;
  align-items: center;
`;

export const StyledUnconnected = styled.div`
color: white;
height: 300px;
display: flex;
justify-content: center;
align-items: center;



`;