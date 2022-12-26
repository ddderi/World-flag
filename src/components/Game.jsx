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
import img from '../images/backgroundimg.jpg';
import { useEffect } from 'react';
import { countries } from '../data/countries';
import Flag from './Flag';



export default function Game({ rightanswer, wronganswer, setRightanswer, setWronganswer, setGameover, gameover, setTriggerscore, logged, setExistscore, existscore, lastscore, result, setResult, user, setDisplayed, setMessage, setScore, score, setColor, navigateTo, setUser, setLogged, setLastscore }) {

  const [heart, setHeart] = useState(['red', 'red', 'red'])
  const [arraycountries, setArraycountries] = useState(countries)
  const [flag, setFlag] = useState(img);
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState([]);
  const { t } = useTranslation();
  const userbestscore = localStorage.getItem('userscore');
  const [disabled, setDisabled] = useState(false)

  const [startTimer, setStartTimer] = useState(false)
  const [goodanswer, setGoodanswer] = useState(false)
  const [over, setOver] = useState('');
  const [seconds, setSeconds] = useState(5);
  const [life, setLife] = useState(3);

  const [lastlife, setLastlife] = useState(false)
  const [timeover, setTimeover] = useState(false)

  const startNewGame = async () => {
    try {
      const resultat = await startGame(arraycountries, setArraycountries, setResult, setAnswer, setFlag, setScore, setDisplayed, setDisabled)
      return resultat
    } catch (error) {
      console.log(error)
    }
  }

  const resetGame = () => {

    setScore(0)
    setOver(false)
    setSeconds(5)
    setHeart(['red', 'red', 'red'])
    setLife(3)
    setGameover(false)
    setLastlife(false)
    setTimeover(false)
    setGoodanswer(false)
    setStartTimer(true)
    setRightanswer([])
    setWronganswer([])
  }


  useEffect(() => {

    if (life === 2) setHeart([heart[0], heart[1], heart[2] = 'white'])
    if (life === 1) setHeart([heart[0], heart[2] = 'white', heart[2] = 'white'])
    if (life === 0) setHeart([heart[0] = 'white', heart[1] = 'white', heart[2] = 'white'])
    // eslint-disable-next-line
  }, [life])



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
    if (life === 2) setHeart([heart[0], heart[1], heart[2] = 'white'])
    if (life === 1) setHeart([heart[0], heart[2] = 'white', heart[2] = 'white'])

    if (life === 0) {
      // console.log('LAST LIFE BE CAREFULL')
      setLastlife(true)
      setHeart([heart[0] = 'white', heart[1] = 'white', heart[2] = 'white'])
    }
    if (life < 0) {
      setGameover(true)
      setLife(3)
      setStartTimer(false)
      setSeconds(5)
      setOver(false)
      endOfGame(setArraycountries, user, lastscore, score, createPoint, setTriggerscore, updatePoint, setLastscore, setFlag, setScore, setResult, setInput, existscore)
    }
    // eslint-disable-next-line
  }, [life])



  useEffect(() => {
    if (over) {
      setLife(life - 1)
      setSeconds(5)
      setStartTimer(true)
      setOver(false)
      setWronganswer([...wronganswer, { flag, result }])
    }


    if (timeover && lastlife) {
      setTimeover(false)
      setGameover(true)
      setWronganswer([...wronganswer, flag])
      endOfGame(setArraycountries, user, lastscore, score, createPoint, setTriggerscore, updatePoint, setLastscore, setFlag, setScore, setResult, setInput, existscore)
      const mydiv = document.getElementsByClassName('answer')
      for (let i = 0; i < mydiv.length; i++) {
        if (mydiv[i].innerHTML === result) {
          mydiv[i].style.backgroundColor = 'green'
        }
      }
      setLastlife(false)

    } else if (timeover && life > 0) {
      const mydiv = document.getElementsByClassName('answer')
      for (let i = 0; i < mydiv.length; i++) {
        if (mydiv[i].innerHTML === result) {
          mydiv[i].style.backgroundColor = 'green'
        }
      }
      setWronganswer([...wronganswer, { flag, result }])
      setLife(life - 1)
      setSeconds(5)
      setTimeover(false)
      setTimeout(() => {
        setStartTimer(true)
        startNewGame()
      }, 1000);

    }

    if (goodanswer) {
      setSeconds(5)
      setStartTimer(true)
      setOver(false)
      setGoodanswer(false)
      setRightanswer([...rightanswer, { flag, result }])
    }
    // eslint-disable-next-line
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
      try {
        await API.graphql({
          query: updatePointMutation,
          variables: {
            input: data
          },
        })
      } catch (error) {
        createPoint()
        console.log('put createpoint here ', error)
      }
      return result
    } else {
      alert('user not connected, couldnt update score')
      console.log('user not connected, couldnt update score')
    }
  }



  const possibleAnwsers = answer.map((data, index) => { return <StyledGameChildAnswer className='answer' onClick={!disabled ? (e) => handleSubmit(e, result, e.target.innerHTML, e.target, setScore, score, setFlag, setResult, setInput, setAnswer, setColor, setDisplayed, setOver, setGoodanswer, life, lastlife, arraycountries, setArraycountries, setDisabled, setRightanswer, setWronganswer) : undefined} key={index}>{data}</StyledGameChildAnswer> })

  return (
    <StyledGameCont>
      <>
        <BtnlogGame onClick={() =>
          startNewGameClick()
        }>{t("game.button")}</BtnlogGame>
        <StyledGameInfo>
          {logged && (
            <>
              <StyledBestScore>Your best score : {userbestscore}</StyledBestScore>
              <Timer setTimeover={setTimeover} life={life} setOver={setOver} seconds={seconds} setSeconds={setSeconds} startTimer={startTimer} setStartTimer={setStartTimer} />
              <Life heart={heart} life={life} />
            </>
          )}
        </StyledGameInfo>
        <StyledGameChildLeft>
          <Flag data={flag} />
        </StyledGameChildLeft>
        <StyledGameChild>
          {possibleAnwsers}
        </StyledGameChild>
      </>
    </StyledGameCont >
  )
}