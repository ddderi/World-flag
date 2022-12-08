import React, { useState } from 'react';
import {
    StyledTimerLife
} from './styles/GeneralElements';

export default function Life({ life }) {


    return (
        <StyledTimerLife nbrlife={life === 0 ? 'red' : 'white'} >{life}/3</StyledTimerLife>
    )
}
