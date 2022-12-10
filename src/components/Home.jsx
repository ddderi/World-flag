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
import { ButtonError } from '../components/styles/ButtonElements';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home({ userScore, setTriggerscore, logged, setExistscore, existscore, setMessage, user, setPlayers, players, setUser, setLogged }) {

  const [messageFooter, setMessageFooter] = useState('messageFooter.1')
  const [color, setColor] = useState('')
  const [score, setScore] = useState(0)
  const [lastscore, setLastscore] = useState('')
  const [displayed, setDisplayed] = useState(false)
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [result, setResult] = useState('');
  const [resultFooter, setResultFooter] = useState('')

  
console.log(score)
  const navigateTo = (location) => {
    navigate(`/${location}`)
  };

  function fontColor(basicfont) {
    if (color === true) {
      return 'green'
    } else if (color === false) {
      return 'red'
    } else {
      return basicfont
    }
  }

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })


  return (
    <StyledCont as={animated.div} style={fade} >
      <StyledHeading>{t('headerhome')}</StyledHeading>
      <StyledCore>
        <Game setTriggerscore={setTriggerscore} logged={logged} setExistscore={setExistscore} existscore={existscore} lastscore={lastscore} result={result} setResult={setResult} user={user} setDisplayed={setDisplayed} setMessageFooter={setMessageFooter} setResultFooter={setResultFooter} setMessage={setMessage} setScore={setScore} score={score} setColor={setColor} navigateTo={navigateTo} setUser={setUser} setLogged={setLogged} setLastscore={setLastscore} />
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
      <StyledFooter>
        <StyledSpanResult coloring={fontColor('white')} >{t(`${messageFooter}`, { result: resultFooter })}</StyledSpanResult>
      </StyledFooter>
    </StyledCont>
  )
}

