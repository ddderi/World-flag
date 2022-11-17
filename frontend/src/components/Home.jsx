import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function Home({ user }) {

  const navigate = useNavigate();
  const [message, setMessage] = useState('Start the game now !')
  const [players, setPlayers] = useState([])
  const [updated, setUpdated] = useState(false)
  const [score, setScore] = useState(0)

  const navigateToLogin = () => {
    navigate('/login')
  };

  const navigateToSignup = () => {
    navigate('/signup')
  };

  return (
    <StyledCont>
      {user ?
        <>
          <StyledHeading>the Flag Quizz </StyledHeading>
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
          <StyledHeading>Welcome, Click <BtnLink onClick={navigateToLogin} >here</BtnLink> for login or <BtnLink onClick={navigateToSignup}>here</BtnLink> for signing-up </StyledHeading>
        </>
      }
    </StyledCont>
  )
}

