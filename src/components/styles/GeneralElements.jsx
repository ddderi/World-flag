import styled from 'styled-components';



export const StyledHeading = styled.h1`
//background-color: rgba(0, 0, 0, 0.89);

background-color: rgba(255,255,255, 0.8);

color: black;


width: 100%;
text-transform: uppercase;
border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
`;

export const StyledCont = styled.div`
  text-align: center;
  // width: 55%;
  // position:absolute;
	// left:50%;
	// top:50%;
  // width: 85%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

	// transform: translate(-50%,-50%);
  @media screen and (max-width: 905px){
    width: 95%;
    // width: 85%;
  }
  @media screen and (max-width: 280px) {
    
    top:55%;
    
    }
  @media screen and (min-width: 905px) {
    width: 85%;
    
  } 

`;




export const StyledHome = styled(StyledHeading)`




background-color: rgba(0, 0, 0, 0.89);

//background-color: rgba(255,255,255, 0.8);

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

export const StyledGameInfo = styled.div`
position: absolute;
top: 3px;
right: 0px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
`;

export const StyledBestScore = styled.div`

color: black;
`;

export const StyledTimer = styled.div`
color: black;

`;

export const StyledTimerLife = styled.div`
color: ${props => props.nbrlife};

`;

export const StyledHeartMapped = styled.div`


`;

export const StyledDivTransition = styled.div`
width: 100%;
height: 20px;


`;


export const StyledFooter = styled.div`
  //background-color: rgba(0, 0, 0, 0.89);
 // color: white;
  background-color: rgba(255,255,255, 0.8);
  color: black;


  border-radius: 10px 10px;
   box-shadow: 1px 1px 3px gray;
  
  width: 100%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 280px) {
    height: 90px;
    }
`;


export const StyledFooterAnswer = styled.div`
//background-color: rgba(255,255,255, 0.8);
  color: black;
  width: 90%;
  // min-height: 80%;
  // border-radius: 10px 10px;
  // box-shadow: 1px 1px 3px gray;
  margin-top: 1%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  // @media screen and (max-width: 280px) {
  //   height: 90px;
  //   }


`;



export const StyledFooterDiv = styled.div`
 display: flex;
 flex-direction: column;
 margin: 2%;
 width: 100%;
 justify-content: space-between;
  align-items: center;
`;


export const StyledFooterDivAnswer = styled(StyledFooterDiv)`
display: inline-block;
flex-direction: column;
// border: solid 1px black;
position: relative;
min-height: 30px;
padding-bottom: 5%;
`;

export const StyledFooterDivFlagAnswer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

`;

export const StyledAnswer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 2%;
margin: auto;
// position: relative;
`;

// export const StyledFlagAnswer = styled.div`
// padding: 1%;
// margin: auto;
// `;


export const StyledImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`;

export const StyledImgFlagAnswer = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
//border: 2px solid red;

display: flex;
justify-content: center;
align-items: center;
border: 4px solid ${props => props.colorborder};

`;


export const StyledFlagName = styled.span`

display: none;

${StyledAnswer}:hover &{
  display: inline;
  background-color: red;
  position: absolute;
  // top: 50%;
  // left: 50%
  // float: left;
  // text-align: left;
  // height: 15px;
width: 300px;
z-index: 1;

}

`;



export const StyledCornerTopLeft = styled.div`
position: absolute;
height: 11px;
width: 11px;
top: 0px;
left: 0px;
border-left: 1px solid black;
border-top: 1px solid black;
`;

export const StyledCornerTopRight = styled.div`
position: absolute;
height: 11px;
width: 11px;
top: 0px;
right: 0px;
border-right: 1px solid black;
border-top: 1px solid black;
`;

export const StyledCornerBottomLeft = styled.div`
position: absolute;
height: 11px;
width: 11px;
bottom: 0px;
left: 0px;
border-left: 1px solid black;
border-bottom: 1px solid black;
`;

export const StyledCornerBottomRight = styled.div`
position: absolute;
height: 11px;
width: 11px;
right: 0px;
bottom: 0px;
border-right: 1px solid black;
border-bottom: 1px solid black;
`;


export const StyledGameCont = styled.div`

  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;


  //background-color: rgba(0, 0, 0, 0.89);

  background-color: rgba(255,255,255, 0.8);


  justify-content: center;
  align-items: center;
  //padding: 2% 0%;
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

export const StyledGameContTwo = styled(StyledGameCont)`
display: flex;
flex-direction: column;
// border-radius: 10px 10px;
//   box-shadow: 1px 1px 3px gray;
`;


export const StyledGameContChild = styled(StyledGameCont)`
 height: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
border-radius-top: 0px 0px;
  box-shadow: 0px 0px 0px;
  background-color: rgba(255,255,255, 0.0);
`;


export const StyledCardAnswer = styled.div`
width: 150px;
height: 70px;
background-color: grey;
margin: 4%;
touch-action: none;
// cursor: grab;

`;

export const StyledCard = styled.div`

width: 150px;
height: 70px;
background-color: red;
margin: 4%;
touch-action: none;
cursor: grab;
`;

export const StyledGameChildLeft = styled.div`
  // grid-column-start: 1;
  // grid-column-end: 1;
  width: 95%;
`;


export const StyledImgFlag = styled.img`
  width: 300px; 
  height: 200px; 
  pointer-events: none;
  border: 8px solid white;
  @media screen and (max-width: 400px){
    width: 95%;
  }
  @media screen and (min-width: 400px){
    width: 280px; 
  }
`;

export const StyledImgFlagAnwserDone = styled.div`
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
  @media screen and (max-width: 1300px){
    height: 150px;

  }
`;



export const StyledGameChildAnswer = styled.div`
  position: relative;
  background-color: #fafafa;
  border-radius: 3px 3px;
  //box-shadow: 1px 1px 1px gray;
  cursor: pointer;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
  // @media screen and (min-width: 570px) and  (max-width: 1300px){
  //   margin-bottom: 1%;
  //   width: 70%;
  // }
  @media screen and (max-width: 765px){
    // height: 20px;
  }
  &:hover {
    opacity: 1;
    
  }
`;


export const StyledRecordsCont = styled.div`
  display: none;
  grid-column-start: 3;
  grid-column-end: 3;
  
  border-radius: 10px 10px;
  box-shadow: 1px 1px 3px gray;
  
  //color: white;
  //background-color: rgba(0, 0, 0, 0.89);

  background-color: rgba(255,255,255, 0.8);
  color: black;

  @media screen and (min-width: 765px) {
    display: block;
    width: 400px;
    height: 100%;
  }
  @media screen and (min-width: 1000px) {

  }
 
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

export const StyledRecordsChildAll = styled.div`
width: 80%;
display: flex;
flex-direction: column;
border-top: 1px solid white;
border-bottom: 1px solid white;
border-top-left-radius: 10px;
border-bottom-right-radius: 5px;
padding: 1% 5% 1% 5%;


//color: white;
color: black;

margin: 2% auto 2% auto;
`;

export const StyledRecordsChildTop = styled.div`
  // width: 80%;
  // color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // margin: 2% auto 2% auto;
  // padding: 1% 5% 1% 5%;
  // border-top: 1px solid white;
  // border-bottom: 1px solid white;
  // border-top-left-radius: 10px;
  // border-bottom-right-radius: 5px;
  text-transform: capitalize;
  // @media screen and (max-width: 1100px){
  //   width: 80%;
  //   margin: 1% 0% 1% 0%;
  // }
`;

export const StyledRecordsChildBtm = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

export const StyledHeadingRecords = styled(StyledHeadingFooter)`

display: none;
@media screen and (min-width: 765px) {
  display: block;
}
`;

export const StyledHeadingRecordsPhone = styled(StyledHeadingFooter)`
color: black;
display: flex;
justify-content: center;
align-items: items;
@media screen and (min-width: 765px) {
  display: none;
}

`;

export const StyledRecordsContPhone = styled.div`
display: block;
width: 80%;
color: white;
border-radius: 10px 10px;
box-shadow: 1px 1px 3px gray;

background-color: rgba(255,255,255, 0.8);
//background-color: rgba(0, 0, 0, 0.89);

// margin-left: 2%;
// flex-direction: column;
// justify-content: space-evenly;
// align-items: center;
// padding-bottom: 2%;
// @media screen and (min-width: 765px) {
//   display: block;
//   height: 100%;
// }

`;







export const StyledFormHeading = styled.h1`
  
color: black;
//color:#fff;	
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
  background-color: rgba(255,255,255, 0.8);
  // background-color: rgba(0, 0, 0, 0.89);
 //background: linear-gradient(68.9deg, #FFFFFF 14.96%, #3BADD1 22.14%, #ED53F0 70.52%, #CF58DC 75.06%, #DA36F4 89.61%);
   //background: linear-gradient(225.82deg, rgba(172, 78, 217, 1) 6.47%, rgba(217, 78, 144, 1) 21.35%, rgba(78, 175, 217, 1) 85.9%, rgba(78, 175, 217, 1) 100%);
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
      width: 40%;
      padding: 8% 8%;
    }
    @media screen and (min-width: 1005px) and (max-width: 1320px){
      width: 35%;
      padding: 4% 4%;
    }
    @media screen  and (min-width: 1320px){
      width: 30%;
      padding: 4% 4%;
    }

`;

export const StyledFormContAccount = styled(StyledFormCont)`



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
  margin-bottom:15px;
& label {
  position:absolute;
	top:0px;
	left:0px;
	font-size:16px;
	// color:#fff;	
  color: black;
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
  // color:#fff;
  color: black;
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
color: black;
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

export const StyledGameOver = styled.div`
color: white;
display: flex;
padding: 10%;
margin: auto;
flex-direction: column;
justify-content: center;
align-items: center;
height: 65%;
width: 75%;
background-color: rgba(0, 0, 0, 1);
border-radius: 10px 10px;
@media screen and (min-width: 750px){
  width: 75%;
  height: 55%;
}
@media screen and (min-width: 1000px){
  width: 50%;
  height: 45%;
}

position: absolute;
// left: 55px;


// Gameover enfant div avec du margin a modifie !!!
`;

export const StyledParticles = styled.div`

// z-index: 5;
// position: absolute;


`;

export const StyledSpanEmoji = styled.span`
font-size: 60px;
position: relative;
top: 10%;
left: 0%;
`;


