import React from 'react';
import { StyledRecordsCont, StyledRecordsChild, StyledHeadingFooter } from './styles/GeneralElements';
import { useTranslation } from 'react-i18next';

export default function Records({ players }) {

  const { t } = useTranslation();

  const playersMappedArray = players.map((data, index) => {
    return <StyledRecordsChild key={index} >
      <span>{data.username}</span><span>{data.bestscores}</span>
    </StyledRecordsChild>
  })


  return (
    <StyledRecordsCont>
      <StyledHeadingFooter>{t("records.header")}</StyledHeadingFooter>
      {playersMappedArray}
    </StyledRecordsCont>
  )
}
