import React from 'react';
import { StyledRecordsCont, StyledRecordsChild, StyledHeadingFooter } from './styles/GeneralElements';

export default function Records({ players }) {

  const playersMappedArray = players.map((data, index) => { return <StyledRecordsChild key={index} >{data.username} : {data.bestscores}</StyledRecordsChild> })


  return (
    <StyledRecordsCont>
      <StyledHeadingFooter>Records</StyledHeadingFooter>
      {playersMappedArray}
    </StyledRecordsCont>
  )
}
