import React, { useEffect, useCallback, useRef } from "react";
import { StyledTimer } from "./styles/GeneralElements";

const Timer = React.memo(
  ({
    setTimeover,
    life,
    setOver,
    seconds,
    setSeconds,
    startTimer,
    setStartTimer,
  }) => {
    //const renderCountRef = useRef(0);
    //renderCountRef.current += 1;
    //console.log(`Timer rendered ${renderCountRef.current} times`);

    const tick = useCallback(() => {
      if (seconds === 0 && life > 0) {
        setTimeover(true);
        setStartTimer(false);
      } else if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, [seconds, life, setTimeover, setStartTimer, setSeconds]);

    useEffect(() => {
      let timerID;
      if (startTimer) {
        timerID = setInterval(tick, 1000);
      }
      return () => clearInterval(timerID);
    }, [startTimer, tick]);

    return (
      <StyledTimer>
        Timer: <span>{seconds}</span>
      </StyledTimer>
    );
  }
);
export default Timer;
