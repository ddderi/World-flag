import React, { useEffect } from 'react';
import {
    StyledTimer
} from './styles/GeneralElements';


export default function Timer({ life, setOver, seconds, setSeconds, startTimer, setStartTimer }) {


    const tick = () => {
        if (seconds === 0 && (life >= 0)) {
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
    })



    return (
        <>
            <StyledTimer>
                Timer : <span>{seconds}</span>
            </StyledTimer>

        </>
    )
}
