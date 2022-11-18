import React, { useState } from 'react';
import Game from './Game';
import Records from './Records';
import {
  StyledCont,
  StyledHeading,
  StyledCore,
  StyledFooter,
  StyledFooterDiv,
  StyledSpanResult
} from './styles/GeneralElements';
import { BtnLink } from '../components/styles/ButtonElements';

export default function Home({ user, navigateTo, setPlayers, players, updated, setUpdated}) {

  const [message, setMessage] = useState('Start the game now !')
  // const [players, setPlayers] = useState([])
  // const [updated, setUpdated] = useState(false)
  const [color, setColor] = useState('')
  const [score, setScore] = useState(0)
  

function fontColor(basicfont){
  if(color===true){
    return 'green'
  }else if(color===false){
    return 'red'
  }else{
    return basicfont
  }
}


  return (
    <StyledCont>
      {user ?
        <>
          <StyledHeading>the Flag Quizz</StyledHeading>
          <StyledCore>
            <Game setMessage={setMessage} setScore={setScore} score={score} setUpdated={setUpdated} setColor={setColor} fontColor={fontColor} />
            <Records setPlayers={setPlayers} players={players} updated={updated} setUpdated={setUpdated} />
          </StyledCore>
          <StyledFooter>
            <StyledFooterDiv>
              <span style={{ width: '50%', fontWeight: 'bold' }}>Your score : {score} </span>
              <StyledSpanResult coloring={fontColor('white')} >{message}</StyledSpanResult>
            </StyledFooterDiv>
          </StyledFooter>
        </>
        :
        <>
          <StyledHeading>Welcome, Click <BtnLink onClick={() => navigateTo('login')} >here</BtnLink> for logging-in </StyledHeading>
        </>
      }
    </StyledCont>
  )
}

