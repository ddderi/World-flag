import React, { useState } from 'react';
import {
    StyledTimerLife,
    StyledHeartMapped
} from './styles/GeneralElements';
import Heart from './Heart';

export default function Life({ life, heart }) {

    return (
        <>
        {/* <StyledTimerLife nbrlife={life === 0 ? 'red' : 'white'} >{life}/3</StyledTimerLife> */}
        <StyledHeartMapped>
        {heart.map((data, index) => { return <Heart data={data} key={index} />})}
        </StyledHeartMapped>
        </>
    )
}
