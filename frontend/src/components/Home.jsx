import React, { useState } from 'react';
import Game from './Game';
import Records from './Records';
import {
  StyledCont,
  StyledHeading,
  StyledCore,
  StyledFooter,
  StyledFooterDiv,
  StyledSpanResult,
  StyledErrorBox,
  StyledErrorBoxChild
} from './styles/GeneralElements';
import { BtnLink, ButtonError } from '../components/styles/ButtonElements';
import { useSpring, animated } from 'react-spring';

export default function Home({ setMessage, user, navigateTo, setPlayers, players, updated, setUpdated, setUser, setLogged }) {

  const [messageFooter, setMessageFooter] = useState('Start the game now !')
  const [color, setColor] = useState('')
  const [score, setScore] = useState(0)
  const [lastscore, setLastscore] = useState('')
  const [displayed, setDisplayed] = useState(false)

  const fade = useSpring({from: {opacity: 0,}, opacity: 1,})

  function fontColor(basicfont) {
    if (color === true) {
      return 'green'
    } else if (color === false) {
      return 'red'
    } else {
      return basicfont
    }
  }


  return (
    <StyledCont as={animated.div} style={fade} >
      {user ?
        <>
          <StyledHeading>the Flag Quizz</StyledHeading>
          <StyledCore>
            <Game setDisplayed={setDisplayed} setMessageFooter={setMessageFooter} setMessage={setMessage} setScore={setScore} score={score} setUpdated={setUpdated} setColor={setColor} fontColor={fontColor} navigateTo={navigateTo} setUser={setUser} setLogged={setLogged} setLastscore={setLastscore} />
            <Records setPlayers={setPlayers} players={players} updated={updated} setUpdated={setUpdated} />
          </StyledCore>
          <StyledErrorBox display={!displayed ? 'none' : 'block'} >
            <StyledErrorBoxChild>
              <span>You didnt start a game, please press start game !</span>
              <ButtonError onClick={() => setDisplayed(false)}>X</ButtonError>
            </StyledErrorBoxChild>
          </StyledErrorBox>
          <StyledFooter>
            {!lastscore ?
              <StyledFooterDiv>
                <span style={{ width: '50%', fontWeight: 'bold' }}>Your score : {score} </span>
                <StyledSpanResult coloring={fontColor('white')} >{messageFooter}</StyledSpanResult>
              </StyledFooterDiv>
              :
              <StyledFooterDiv>
                <StyledFooterDiv>
                  <span style={{ width: '50%', fontWeight: 'bold' }}>Your score : {score} </span>
                  <span style={{ width: '50%', fontWeight: 'bold' }}>Last score : {lastscore}</span>
                </StyledFooterDiv>
                <StyledSpanResult coloring={fontColor('white')} >{messageFooter}</StyledSpanResult>
              </StyledFooterDiv>

            }
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

