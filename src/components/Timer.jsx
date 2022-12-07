import React, { useState, useEffect } from 'react';
import {
    StyledTimer
} from './styles/GeneralElements';

export default function Timer({ gameover, life, setLife, over, setOver, seconds, setSeconds, startTimer, setStartTimer }) {


    const tick = () => {
        if (seconds === 0 || over) {
            setOver(true)
            setStartTimer(false)
            return;
        }
        setSeconds(seconds - 1);

    };

    useEffect(() => {
        if (startTimer === true) {
            const timerID = setInterval(() => tick(), 1000)
            return () => clearInterval(timerID);
        } else if (over) {
            console.log('oui')
            setSeconds(5)
            setOver(false)
            setLife(life - 1)
        }
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
