import React, { useState } from 'react';
import {
  StyledGameCont,
  StyledGameChild,
  StyledGameChildLeft,
  StyledGameChildAnswer,
  StyledImgFlag,
  StyledBestScore,
  StyledGameInfo,
  StyledTimer
} from './styles/GeneralElements';
import { BtnlogGame } from '../components/styles/ButtonElements';
import { startGame, handleSubmit } from '../gameRequests/GameRequests';
import { useTranslation } from 'react-i18next';
import { API } from "aws-amplify";

import {
  createPoint as createPointMutation,
  updatePoint as updatePointMutation,

} from '../graphql/mutations';
import { Auth } from 'aws-amplify';
import img from '../images/dummy_300x200_ffffff_cccccc.png'

export default function Game({ setTriggerscore, logged, setExistscore, existscore, lastscore, result, setResult, user, setDisplayed, setMessageFooter, setResultFooter, setMessage, setScore, score, setUpdated, setColor, fontColor, navigateTo, setUser, setLogged, setLastscore }) {




  const [flag, setFlag] = useState(img);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState([]);
  const [coloranswer, setColoranswer] = useState('');
  const { t } = useTranslation();

  const startNewGame = async () => {
    try {
      const resultat = await startGame(setMessageFooter, setResult, setResultFooter, setAnswer, setFlag, setScore, setDisplayed)
      return resultat
    } catch (error) {
      console.log(error)
    }
  }

  const userbestscore = localStorage.getItem('userscore')


  function startNewGameClick() {
    if (logged) {
      startNewGame()
    } else {
      setMessage('Please logged-in to start playing')
      navigateTo('login')
    }
  }

  async function createPoint() {
    const data = {
      score: score,
      owner: user,
      typedate: "date",
      typescore: "score"
    }
    var connected = await Auth.currentUserInfo()
    if (connected !== null) {
      const result = await API.graphql({
        query: createPointMutation,
        variables: { input: data }
      })
      localStorage.setItem('existscore', JSON.stringify(true))
      localStorage.setItem('scoreid', JSON.stringify(result.data.createPoint.id))
      setExistscore(true)
      console.log(result)
      return result
    } else {
      console.log('USER NOT CONNECTED, COUDLNT CREATEE SCORE')
    }
  }



  async function updatePoint() {
    const id = JSON.parse(localStorage.getItem('scoreid'))
    const data = {
      id: id,
      score: score,
      owner: user
    }
    var connected = await Auth.currentUserInfo()
    if (connected !== null) {
      const result = await API.graphql({
        query: updatePointMutation,
        variables: {
          input: data
        },
      })
      return result
    } else {
      console.log('USER NOT CONNECTED, COUDLNT CREATEE SCORE')
    }
  }


  const possibleAnwsers = answer.map((data, index) => { return <StyledGameChildAnswer className='answer' onClick={(e) => handleSubmit(e, result, e.target.innerHTML, e.target, setMessageFooter, setResultFooter, setScore, score, setFlag, setResult, setInput, setUpdated, setAnswer, setColor, setColoranswer, answer, setLastscore, setDisplayed, lastscore, createPoint, updatePoint, setExistscore, existscore, user, setTriggerscore)} key={index}>{data}</StyledGameChildAnswer> })

  return (
    <StyledGameCont>
      <>
        <BtnlogGame onClick={() =>
          startNewGameClick()
        }>{t("game.button")}</BtnlogGame>
        <StyledGameInfo>
          {logged ?
            <>
              <StyledBestScore>Your best score : {userbestscore}</StyledBestScore>
              <StyledTimer>TIMER</StyledTimer>
            </>
            : <></>}
        </StyledGameInfo>
        <StyledGameChildLeft>
          <StyledImgFlag alt='flag' src={flag}></StyledImgFlag>
        </StyledGameChildLeft>
        <StyledGameChild>
          {possibleAnwsers}
        </StyledGameChild>
      </>
    </StyledGameCont>
  )
}