import React from 'react';
import {
    StyledGameContTwo,
    StyledCard,
    StyledGameContChild
}
    from '../components/styles/GeneralElements';
import Flag from './Flag';
import Answer from './Answer';

export default function Gameswipe() {

    const arrayanswer = [2, 4, 3, 1]
    const arraytest = [1, 2, 3, 4]

    const mappedanswer = arrayanswer.map((data, index) => { return <Answer data={data} key={index} /> })
    const mappedarray = arraytest.map((data, index) => { return <Flag data={data} key={index} /> })

    return (
        <StyledGameContTwo>
            <StyledGameContChild>
                {mappedanswer}
            </StyledGameContChild>
            <StyledGameContChild>
                {mappedarray}
            </StyledGameContChild>
        </StyledGameContTwo>
    )
}
