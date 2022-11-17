import React, { useEffect } from 'react';
import { StyledRecordsCont, StyledRecordsChild, StyledHeadingFooter } from './styles/GeneralElements';
import { bestPlayers } from '../requests/RequestUser';

export default function Records({setPlayers, players, updated, setUpdated}) {


const playersMapped = players.map((data, index) => { return <StyledRecordsChild key={index} >{data.username} : {data.bestscores}</StyledRecordsChild> })

  useEffect(() => {
    
    bestPlayers(setPlayers, players, updated, setUpdated)
    console.log('trigger')
    
  }, [players, updated, setPlayers, setUpdated])


  return (
    <StyledRecordsCont>
      <StyledHeadingFooter>Records</StyledHeadingFooter>
      {playersMapped}
    </StyledRecordsCont>
  )
}
