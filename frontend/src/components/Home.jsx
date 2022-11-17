import React, { useState } from 'react';
import Game from './Game';
import Records from './Records';
import {
  StyledCont,
  StyledHeading,
  StyledCore,
  StyledFooter,
  StyledFooterDiv,
} from './styles/GeneralElements';
import { BtnLink } from '../components/styles/ButtonElements';

export default function Home({ user, navigateTo }) {

  const [message, setMessage] = useState('Start the game now !')
  const [players, setPlayers] = useState([])
  const [updated, setUpdated] = useState(false)
  const [score, setScore] = useState(0)


  return (
    <StyledCont>
      {user ?
        <>
          <StyledHeading>the Flag Quizz</StyledHeading>
          <StyledCore>
            <Game setMessage={setMessage} setScore={setScore} score={score} setUpdated={setUpdated} />
            <Records setPlayers={setPlayers} players={players} updated={updated} setUpdated={setUpdated} />
          </StyledCore>
          <StyledFooter>
            <StyledFooterDiv>
              <span style={{ width: '50%' }}>Your score : {score} </span>
              <span style={{ width: '50%' }} >{message}</span>
            </StyledFooterDiv>
          </StyledFooter>
        </>
        :
        <>
          <StyledHeading>Welcome, Click <BtnLink onClick={() => navigateTo('login')} >here</BtnLink> for logging-in </StyledHeading>
          {/* or <BtnLink onClick={() => navigateTo('signup')}>here</BtnLink> for signing-up </StyledHeading> */}
        </>
      }
    </StyledCont>
  )
}

