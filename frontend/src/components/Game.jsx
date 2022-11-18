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

export default function Game({ setMessage, setScore, score, setUpdated, setColor, fontColor }) {

  const [flag, setFlag] = useState('https://www.placecage.com/300/200')
  const [result, setResult] = useState('')
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState([])
  const [coloranswer, setColoranswer] = useState('')

  const startNewGame = async () => {
    try {
      const resultat = await startGame(setResult, setAnswer, setFlag, result)
      return resultat
    } catch (error) {
      console.log(error)
    }
  }

  const possibleAnwsers = answer.map((data, index) => { return <StyledGameChildAnswer className='answer' coloringanswer={fontColor('#fafafa')} onClick={(e) => handleSubmit(e, result, e.target.innerHTML, e.target, setMessage, setScore, score, setFlag, setResult, setInput, setUpdated, setAnswer, setColor, setColoranswer, answer)} key={index}>{data}</StyledGameChildAnswer> })

  return (
    <StyledGameCont>
      <BtnlogGame onClick={() => startNewGame()} >Start Game</BtnlogGame>
      <StyledGameChildLeft>
        <StyledImgFlag alt='flag' src={flag}></StyledImgFlag>
      </StyledGameChildLeft>
      <StyledGameChild>
        {possibleAnwsers}
      </StyledGameChild>
    </StyledGameCont>
  )
}