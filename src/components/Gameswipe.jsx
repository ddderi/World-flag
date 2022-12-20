import React from 'react';
import {
    StyledGameContTwo, 
    StyledCard
  }
    from '../components/styles/GeneralElements';
import Flag from './Flag';

export default function Gameswipe() {

const arraytest = [1,2,3,4]

const mappedarray = arraytest.map((data, index) => {return <Flag data={data} key={index} />})

  return (
    <StyledGameContTwo>
        {mappedarray}
    </StyledGameContTwo>
  )
}
