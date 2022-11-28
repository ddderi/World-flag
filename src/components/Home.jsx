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
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home({ setMessage, user, setPlayers, players, updated, setUpdated, setUser, setLogged }) {

  const [messageFooter, setMessageFooter] = useState('messageFooter.1')
  const [color, setColor] = useState('')
  const [score, setScore] = useState(0)
  const [lastscore, setLastscore] = useState('')
  const [displayed, setDisplayed] = useState(false)
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [result, setResult] = useState('');
  const [resultFooter, setResultFooter] = useState('')

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

      {user ?
        <>

          <StyledHeading>{t('headerhome')}</StyledHeading>
          <StyledCore>
            <Game result={result} setResult={setResult} user={user} setDisplayed={setDisplayed} setMessageFooter={setMessageFooter} setResultFooter={setResultFooter} setMessage={setMessage} setScore={setScore} score={score} setUpdated={setUpdated} setColor={setColor} fontColor={fontColor} navigateTo={navigateTo} setUser={setUser} setLogged={setLogged} setLastscore={setLastscore} />
            <Records setPlayers={setPlayers} players={players} updated={updated} setUpdated={setUpdated} />
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
                {/* <StyledSpanResult coloring={fontColor('white')} >{t(`${messageFooter}`, { result: resultFooter })}</StyledSpanResult> */}
              </StyledFooterDiv>
              :
              <>
                <StyledFooterDiv>
                  <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoreleft")}{score} </span>
                  <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoremiddle")}{lastscore}</span>
                </StyledFooterDiv>
                {/* <StyledSpanResult coloring={fontColor('white')} >{t(`${messageFooter}`, { result: resultFooter })}</StyledSpanResult> */}


              </>
            }
          </StyledFooter>
          <StyledFooter>
            <StyledSpanResult coloring={fontColor('white')} >{t(`${messageFooter}`, { result: resultFooter })}</StyledSpanResult>
          </StyledFooter>
        </>
        :
        <>
          <StyledHeading>{t('unconnected.1')}<BtnLink onClick={() => navigateTo('login')} >{t('unconnected.2')}</BtnLink>{t('unconnected.3')}</StyledHeading>
        </>
      }
    </StyledCont>
  )
}

