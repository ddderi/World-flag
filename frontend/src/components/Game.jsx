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

export default function Game({ setMessage, setScore, score, setUpdated }) {

  const [flag, setFlag] = useState('https://www.placecage.com/300/200')
  const [result, setResult] = useState('')
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState([])


  const startNewGame = async () => {
    try {
      const resultat = await startGame(setResult, setAnswer, setFlag, result)
      return resultat
    } catch (error) {
      console.log(error)
    }
  }

  const possibleAnwsers = answer.map((data, index) => { return <StyledGameChildAnswer onClick={(e) => handleSubmit(e, result, e.target.innerHTML, setMessage, setScore, score, setFlag, setResult, setInput, setUpdated, setAnswer)} key={index}>{data}</StyledGameChildAnswer> })

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