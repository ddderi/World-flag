import React, { useState } from 'react';
import {
  StyledGameCont,
  StyledGameChild,
  StyledGameChildLeft,
  StyledGameChildAnswer,
  StyledImgFlag
} from './styles/GeneralElements';
import { BtnlogGame } from '../components/styles/ButtonElements';
import { startGame, handleSubmit } from '../gameRequests/GameRequests';
import { checkCookie } from '../requests/RequestUser';
import { useTranslation } from 'react-i18next';

export default function Game({ result, setResult, user, setDisplayed, setMessageFooter, setResultFooter, setMessage, setScore, score, setUpdated, setColor, fontColor, navigateTo, setUser, setLogged, setLastscore }) {

  const [flag, setFlag] = useState('https://www.placecage.com/300/200');
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState([]);
  const [coloranswer, setColoranswer] = useState('');
  const { t } = useTranslation();

  const startNewGame = async () => {
    try {
      const resultat = await startGame(setResult, setResultFooter, setAnswer, setFlag, setScore, setDisplayed)
      return resultat
    } catch (error) {
      console.log(error)
    }
  }


  function startNewGameClick() {
    startNewGame()
    // checkCookie(user, navigateTo, setUser, setLogged, setMessage)
  }

  const possibleAnwsers = answer.map((data, index) => { return <StyledGameChildAnswer className='answer' onClick={(e) => handleSubmit(e, result, e.target.innerHTML, e.target, setMessageFooter, setResultFooter, setScore, score, setFlag, setResult, setInput, setUpdated, setAnswer, setColor, setColoranswer, answer, setLastscore, setDisplayed)} key={index}>{data}</StyledGameChildAnswer> })

  return (
    <StyledGameCont>
      <BtnlogGame onClick={() =>
        startNewGameClick()
      }>{t("game.button")}</BtnlogGame>
      <StyledGameChildLeft>
        <StyledImgFlag alt='flag' src={flag}></StyledImgFlag>
      </StyledGameChildLeft>
      <StyledGameChild>
        {possibleAnwsers}
      </StyledGameChild>
    </StyledGameCont>
  )
}