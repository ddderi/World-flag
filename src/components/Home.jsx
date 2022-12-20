import React, { useState } from 'react';
import Game from './Game';
import Records from './Records';
import {
  StyledCont,
  StyledHeading,
  StyledCore,
  StyledFooter,
  StyledFooterDiv,
  StyledErrorBox,
  StyledErrorBoxChild,
} from './styles/GeneralElements';
import { ButtonError } from '../components/styles/ButtonElements';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Gameover from './Gameover';
import Gameswipe from './Gameswipe';

export default function Home({ userScore, triggerscore, setTriggerscore, logged, setExistscore, existscore, setMessage, user, setPlayers, players, setUser, setLogged }) {

  const [mainGame, setMainGame] = useState(true)
  const [color, setColor] = useState('')
  const [score, setScore] = useState(0)
  const [lastscore, setLastscore] = useState('')
  const [displayed, setDisplayed] = useState(false)
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [result, setResult] = useState('');
  const [gameover, setGameover] = useState(false)

  const navigateTo = (location) => {
    navigate(`/${location}`)
  };

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })


  const changeGame = () => {
    setMainGame(!mainGame)
  }

  // function fontColor(basicfont) {
  //   if (color === true) {
  //     return 'green'
  //   } else if (color === false) {
  //     return 'red'
  //   } else {
  //     return basicfont
  //   }
  // }

  // const transition = useTransition(gameover, {
  //   from: { x: -500, y: 0},
  //   enter: { x: 0, y: 0},
  //   leave: { x: -500, y: 0}
  // })



  return (
    <>
      {mainGame && (
        <StyledCont as={animated.div} style={fade} >
          <StyledHeading>{t('headerhome')}</StyledHeading>
          {/* <button onClick={() => changeGame()} >change</button> */}
          <StyledCore>
            <Game setGameover={setGameover} gameover={gameover} setTriggerscore={setTriggerscore} logged={logged} setExistscore={setExistscore} existscore={existscore} lastscore={lastscore} result={result} setResult={setResult} user={user} setDisplayed={setDisplayed} setMessage={setMessage} setScore={setScore} score={score} setColor={setColor} navigateTo={navigateTo} setUser={setUser} setLogged={setLogged} setLastscore={setLastscore} />
            <Records setPlayers={setPlayers} players={players} />
          </StyledCore>
          <StyledErrorBox display={!displayed ? 'none' : 'block'} >
            <StyledErrorBoxChild>
              <span>{t("errorspanstart")}</span>
              <ButtonError onClick={() => setDisplayed(false)}>X</ButtonError>
            </StyledErrorBoxChild>
          </StyledErrorBox>
          <StyledFooter>
            {!lastscore ?
              <StyledFooterDiv>
                <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoreleft")}{score} </span>
              </StyledFooterDiv>
              :
              <>
                <StyledFooterDiv>
                  <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoreleft")}{score} </span>
                  <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoremiddle")}{lastscore}</span>
                </StyledFooterDiv>
              </>
            }
          </StyledFooter>
          {/* <StyledFooter>
            <StyledSpanResult coloring={fontColor('white')} >{t(`${messageFooter}`, { result: resultFooter })}</StyledSpanResult>
          </StyledFooter> */}
        </StyledCont>
      )}
      {!mainGame && (
        <StyledCont as={animated.div} style={fade} >
          <StyledHeading>The tinder game</StyledHeading>
          <button onClick={() => changeGame()} >change</button>
          <StyledCore>
            <Gameswipe />
            <Records setPlayers={setPlayers} players={players} />
            {/* <Game setGameover={setGameover} gameover={gameover} setTriggerscore={setTriggerscore} logged={logged} setExistscore={setExistscore} existscore={existscore} lastscore={lastscore} result={result} setResult={setResult} user={user} setDisplayed={setDisplayed} setMessage={setMessage} setScore={setScore} score={score} setColor={setColor} navigateTo={navigateTo} setUser={setUser} setLogged={setLogged} setLastscore={setLastscore} />
            <Records setPlayers={setPlayers} players={players} /> */}
          </StyledCore>
          <StyledErrorBox display={!displayed ? 'none' : 'block'} >
            <StyledErrorBoxChild>
              <span>{t("errorspanstart")}</span>
              <ButtonError onClick={() => setDisplayed(false)}>X</ButtonError>
            </StyledErrorBoxChild>
          </StyledErrorBox>
          <StyledFooter>
            {!lastscore ?
              <StyledFooterDiv>
                <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoreleft")}{score} </span>
              </StyledFooterDiv>
              :
              <>
                <StyledFooterDiv>
                  <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoreleft")}{score} </span>
                  <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoremiddle")}{lastscore}</span>
                </StyledFooterDiv>
              </>
            }
          </StyledFooter>


        </StyledCont>
      )}
      {/* )} */}
      <>
        {/* {transition((style, item) => 
          item ? */}
        {/* // <animated.div style={style}> */}
        <Gameover triggerscore={triggerscore} setTriggerscore={setTriggerscore} gameover={gameover} navigateTo={navigateTo} setGameover={setGameover} score={score} />
        {/* // </animated.div> */}
        {/* : */}
        {/* null
        )} */}

        {/* <Gameover navigateTo={navigateTo} setGameover={setGameover} score={score} /> */}



        {/* {gameover && (
          <Gameover navigateTo={navigateTo} setGameover={setGameover} score={score} />
        )} */}
      </>

    </>
  )
}

