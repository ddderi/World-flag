import React, {useState} from 'react';
import { StyledRecordsCont, StyledRecordsChild, StyledHeadingRecords } from './styles/GeneralElements';
import { useTranslation } from 'react-i18next';

export default function Records({ players }) {

  const { t } = useTranslation();


  const playersMappedArray = players.slice(0, 5).map((data, index) => {
    return <StyledRecordsChild key={index} >
      <span>{data.owner}</span><span>{data.score}</span>
    </StyledRecordsChild>
  })


  return (
    <StyledRecordsCont>
      <StyledHeadingRecords>{t("records.header")}</StyledHeadingRecords>
     {playersMappedArray}
    </StyledRecordsCont>
  )
}
