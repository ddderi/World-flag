import React from 'react';
import { StyledRecordsCont, StyledRecordsChild, StyledHeadingFooter } from './styles/GeneralElements';

export default function Records({ players }) {

  const playersMappedArray = players.map((data, index) => {
    return <StyledRecordsChild key={index} >
      <span>{data.username}</span><span>{data.bestscores}</span>
    </StyledRecordsChild>
  })


  return (
    <StyledRecordsCont>
      <StyledHeadingFooter>Ladder</StyledHeadingFooter>
      {playersMappedArray}
    </StyledRecordsCont>
  )
}
