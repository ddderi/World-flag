import React, { useState } from 'react';
import {
  StyledGameCont,
  StyledGameChild,
  StyledGameChildLeft,
  StyledGameChildAnswer,
  StyledImgFlag,
  StyledUnconnected
} from './styles/GeneralElements';
import { BtnlogGame, BtnLink } from '../components/styles/ButtonElements';
import { startGame, handleSubmit } from '../gameRequests/GameRequests';
import { useTranslation } from 'react-i18next';
import { API, graphqlOperation } from "aws-amplify";

import {
  createPoint as createPointMutation,
  updatePoint as updatePointMutation,

} from '../graphql/mutations';
import { registerScores } from "../requests/RequestUser";
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


  function startNewGameClick() {
    if (logged) {
      startNewGame()
    } else {
      setMessage('Please logged-in to start playing')
      navigateTo('login')
    }
  }

  async function createPoint() {
    console.log(user)
    const data = {
      score: score,
      owner: user
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


  // fetch les 5 premiers scores

  // export const fetchScores = async() => {
  //   const apiData = await API.graphql({ 
  //     query: listPoints,
  //     variables: {filter: {username: {eq: user}}}
  //   })

  //   console.log(apiData.data.listPoints.items)
  //   return apiData 
  // }

  


  const checkUser = async () => {
    var connected = await Auth.currentUserInfo()
    if (connected !== null) {
      console.log('yes connected')
    } else {
      console.log('not connected')
    }
    return connected
  }


  const possibleAnwsers = answer.map((data, index) => { return <StyledGameChildAnswer className='answer' onClick={(e) => handleSubmit(e, result, e.target.innerHTML, e.target, setMessageFooter, setResultFooter, setScore, score, setFlag, setResult, setInput, setUpdated, setAnswer, setColor, setColoranswer, answer, setLastscore, setDisplayed, lastscore, createPoint, updatePoint, setExistscore, existscore, user, setTriggerscore)} key={index}>{data}</StyledGameChildAnswer> })

  return (
    <StyledGameCont>
      {/* <button onClick={() => { fetchBestScores() }} type="submit" > A ESSAYER </button> */}
      {/* <button onClick={() => { checkUser() }} type="submit" > A ESSAYER </button> */}
      {/* {user ? */}
        <>
          {/* <button onClick={() => { registerScores(user, setExistscore) }} type="submit" > fetch les 5 best score </button> */}
          <BtnlogGame onClick={() =>
            startNewGameClick()
          }>{t("game.button")}</BtnlogGame>
          <StyledGameChildLeft>
            <StyledImgFlag alt='flag' src={flag}></StyledImgFlag>
          </StyledGameChildLeft>
          <StyledGameChild>
            {possibleAnwsers}
          </StyledGameChild>
        </>
        {/* :
        <>
          <StyledUnconnected>{t('unconnected.1')}<BtnLink onClick={() => navigateTo('login')} >{t('unconnected.2')}</BtnLink>{t('unconnected.3')}</StyledUnconnected>
        </>
      } */}
    </StyledGameCont>
  )
}