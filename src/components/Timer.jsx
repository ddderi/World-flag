import React, { useState, useEffect } from 'react';
import {
    StyledTimer
} from './styles/GeneralElements';
import imglost from '../images/placeholderlost.png';

export default function Timer({setGameover, goodanswer, setGoodanswer, setInput, setResult, setFlag, setScore, gameover, life, setLife, over, setOver, seconds, setSeconds, startTimer, setStartTimer }) {

console.log(life)
    const tick = () => {
        if (seconds === 0 && (life>=0)) {
            setOver(true)
            setStartTimer(true)
            return;
        }
        setSeconds(seconds - 1);

    };



    useEffect(() => {
        if (startTimer === true) {
            const timerID = setInterval(() => tick(), 1000)
            return () => clearInterval(timerID);
        }
        // else if(gameover){
        // else if(goodanswer){
        //     setSeconds(5)
        //     setGoodanswer(false)
        // }
        // setOver(false)
        // console.log('its happeninggg when ITS GAME OVER, no life')
        // // setGameover(true)
        // }else if(over){
        //     setStartTimer(true)
        //     setSeconds(5)
        //     setLife(life - 1)
        //     setOver(false)
        // }
        // else if (over && !gameover) {
        //     console.log('oui')
        //     setInput('')
        //     setResult('')
        //     // ADD IMG SORRY LOST 1 LIFE INSTEAD OF THIS ONE

        //     setFlag(imglost)
        //     setSeconds(5)
        //     setStartTimer(true)
        //     setOver(false)
        //     setLife(life - 1)
        // }else if (over && gameover){
        //     console.log('non')
        //     setStartTimer(false)
        //     setLife(3)
        //     setSeconds(5)
        //     setInput('')
        //     setResult('')
        // }
        
    })



    return (
        <>
            <StyledTimer>
                <button onClick={() => { setOver(true) }} >tesst</button>
                Timer : <span>{seconds}</span>
            </StyledTimer>

        </>
    )
}
