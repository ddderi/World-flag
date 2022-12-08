import React, { useState } from 'react';
import {
  StyledGameCont,
  StyledGameChild,
  StyledGameChildLeft,
  StyledGameChildAnswer,
  StyledImgFlag,
  StyledBestScore,
  StyledGameInfo,
} from './styles/GeneralElements';
import { BtnlogGame } from '../components/styles/ButtonElements';
import { startGame, handleSubmit, endOfGame } from '../gameRequests/GameRequests';
import { useTranslation } from 'react-i18next';
import { API } from "aws-amplify";
import Timer from "./Timer"
import Life from "./Life"
import {
  createPoint as createPointMutation,
  updatePoint as updatePointMutation,

} from '../graphql/mutations';
import { Auth } from 'aws-amplify';
import img from '../images/placeholderimg.png'
import imglost from '../images/placeholderlost.png'
import { useEffect } from 'react';

export default function Game({ setTriggerscore, logged, setExistscore, existscore, lastscore, result, setResult, user, setDisplayed, setMessageFooter, setResultFooter, setMessage, setScore, score, setColor, navigateTo, setUser, setLogged, setLastscore }) {


  const [flag, setFlag] = useState(img);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState([]);
  const [coloranswer, setColoranswer] = useState('');
  const { t } = useTranslation();
  const userbestscore = localStorage.getItem('userscore');

  const [startTimer, setStartTimer] = useState(false)
  const [goodanswer, setGoodanswer] = useState(false)
  const [over, setOver] = useState('');
  const [seconds, setSeconds] = useState(5);
  const [life, setLife] = useState(3);
  const [gameover, setGameover] = useState(false)
  const [lastlife, setLastlife] = useState(false)
  const [timeover, setTimeover] = useState(false)

  const startNewGame = async () => {
    try {
      const resultat = await startGame(setMessageFooter, setResult, setResultFooter, setAnswer, setFlag, setScore, setDisplayed)
      return resultat
    } catch (error) {
      console.log(error)
    }
  }

  const resetGame = () => {
    setOver(false)
    setSeconds(5)
    setLife(3)
    setGameover(false)
    setLastlife(false)
    setTimeover(false)
    setGoodanswer(false)
    setStartTimer(true)
  }


  function startNewGameClick() {
    if (logged) {
      resetGame()
      // setOver(false)
      // setSeconds(5)
      setStartTimer(true)
      setGameover(false)
      startNewGame()

    } else {
      setMessage('Please logged-in to start playing')
      navigateTo('login')
    }
  }

  useEffect(() => {
    if (life === 0) {
      // console.log('LAST LIFE BE CAREFULL')
      setLastlife(true)
    }
    if (life < 0) {
      setGameover(true)
      setLife(3)
      setStartTimer(false)
      setSeconds(5)
      setOver(false)
      endOfGame(user, lastscore, score, createPoint, setTriggerscore, updatePoint, setLastscore, setFlag, setScore, setResult, setInput, existscore)
    }
  }, [life])



  useEffect(() => {
    if (over) {
      setLife(life - 1)
      setSeconds(5)
      setStartTimer(true)
      setOver(false)
    }


    if (timeover && lastlife) {
      setTimeover(false)
      endOfGame(user, lastscore, score, createPoint, setTriggerscore, updatePoint, setLastscore, setFlag, setScore, setResult, setInput, existscore)
      const mydiv = document.getElementsByClassName('answer')
      for (let i = 0; i < mydiv.length; i++) {
        if (mydiv[i].innerHTML === result) {
          mydiv[i].style.backgroundColor = 'green'
        }
      }
      setLastlife(false)

    } else if (timeover && life > 0) {
      setLife(life - 1)
      setSeconds(5)
      setStartTimer(true)
      setTimeover(false)
      startNewGame()
    }

    if (goodanswer) {
      setSeconds(5)
      setStartTimer(true)
      setOver(false)
      setGoodanswer(false)
    }
  }, [over, goodanswer, lastlife, timeover])



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
      alert('user not connected, couldnt create score')
      console.log('user not connected, couldnt create score')
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
      alert('user not connected, couldnt update score')
      console.log('user not connected, couldnt update score')
    }
  }


  const possibleAnwsers = answer.map((data, index) => { return <StyledGameChildAnswer className='answer' onClick={(e) => handleSubmit(e, result, e.target.innerHTML, e.target, setMessageFooter, setResultFooter, setScore, score, setFlag, setResult, setInput, setAnswer, setColor, setDisplayed, setOver, setGoodanswer, life, lastlife)} key={index}>{data}</StyledGameChildAnswer> })

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
              <Timer setTimeover={setTimeover} life={life} setOver={setOver} seconds={seconds} setSeconds={setSeconds} startTimer={startTimer} setStartTimer={setStartTimer} />
              <Life life={life} />
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