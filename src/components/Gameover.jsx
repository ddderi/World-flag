import React from 'react';
import {
  StyledGameOver
}
  from '../components/styles/GeneralElements';
import { IoRefresh, IoAnalytics } from "react-icons/io5";
import Particle from "./Particle";
import {  animated, useTransition } from 'react-spring';
import {
  StyledParticles
} from './styles/GeneralElements';

export default function Gameover({ triggerscore, setTriggerscore, updated, setUpdated, gameover, navigateTo, setGameover, score }) {



  const transition = useTransition(gameover, {
    from: { x: -500, y: 0 },
    enter: { x: 0, y: 0 },
    leave: { x: +500, y: 0 }
  })


  function restartGame(location) {
    setGameover(false)
    navigateTo(location)
    setTriggerscore(false)
  }

  return (
    <>
      {transition((style, item) =>
        item ?
          <StyledGameOver as={animated.div} style={style}  >

            <div>Game Over</div>
            {triggerscore && (
              <div style={{textAlign: 'center', margin: '10%'}}>Congratulation, you have beaten your last best score</div>
            )}
            <div>Your Score : {score}</div>
            <><IoRefresh onClick={() => { restartGame('') }} size={50} /><span>Restart</span></>
            <><IoAnalytics onClick={() => { restartGame('records') }} size={50} /><span>Ladder</span></>
            {triggerscore && (
              <StyledParticles>
                <Particle />
              </StyledParticles>
            )}
          </StyledGameOver>

          :
          null
      )}
    </>
  )
}
