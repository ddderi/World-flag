import React, { useState } from 'react';
import { StyledHeadingRecordsPhone, StyledRecordsContPhone, StyledRecordsCont, StyledRecordsChild, StyledHeadingRecords, StyledRecordsChildTop, StyledRecordsChildAll, StyledRecordsChildBtm } from './styles/GeneralElements';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

export default function Records({ ladderNavbar, players }) {

  const { t } = useTranslation();

//  const [ladderNavbar, setLadderNavbar] = useState(true)

  const playersMappedArray = players.slice(0, 5).map((data, index) => {
    return <StyledRecordsChildAll key={index} >
      <StyledRecordsChildTop>
        <span>{data.owner}</span><span>{data.score}</span>
      </StyledRecordsChildTop>
      <StyledRecordsChildBtm>
        <>
          {moment(data.updatedAt).format("DD-MM-YYYY, h:mm a")}
        </>
      </StyledRecordsChildBtm>
    </StyledRecordsChildAll>
  })
 
  console.log(ladderNavbar)

  return (
    <>
    {ladderNavbar ? 
       <StyledRecordsContPhone>
       <StyledHeadingRecordsPhone>{t("records.header")}</StyledHeadingRecordsPhone>
       {playersMappedArray}
     </StyledRecordsContPhone>
      :
    <StyledRecordsCont>
      <StyledHeadingRecords>{t("records.header")}</StyledHeadingRecords>
      {playersMappedArray}
    </StyledRecordsCont>
    }
    </>
  )
}
