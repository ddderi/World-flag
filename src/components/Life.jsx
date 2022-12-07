import React, { useState } from 'react';
import {
    StyledTimer
} from './styles/GeneralElements';

export default function Life({ life }) {


    return (
        <StyledTimer>{life}/3</StyledTimer>
    )
}
