import React, { useState, useRef } from "react";
import {
  StyledHeadingRecordsPhone,
  StyledRecordsContPhone,
  StyledRecordsCont,
  StyledRecordsChild,
  StyledHeadingRecords,
  StyledRecordsChildTop,
  StyledRecordsChildAll,
  StyledRecordsChildBtm,
} from "./styles/GeneralElements";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useSpring, animated } from "react-spring";

export default function Records({ ladderNavbar, players }) {
  const { t } = useTranslation();

  function compareDate(a, b) {
    if (a.score === b.score && a.updatedAt > b.updatedAt) {
      return -1;
    }
    if (a.score === b.score && a.updatedAt < b.updatedAt) {
      return 1;
    }
  }

  players.sort(compareDate);

  const playersMappedArray = players.map((data, index) => {
    return (
      <StyledRecordsChildAll key={index}>
        <StyledRecordsChildTop>
          <span>{data.owner}</span>
          <span>{data.score}</span>
        </StyledRecordsChildTop>
        <StyledRecordsChildBtm>
          <>{moment(data.updatedAt).format("DD-MM-YYYY, h:mm a")}</>
        </StyledRecordsChildBtm>
      </StyledRecordsChildAll>
    );
  });

  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
  });

  return (
    <>
      {ladderNavbar ? (
        <StyledRecordsContPhone as={animated.div} style={fade}>
          <StyledHeadingRecordsPhone>
            {t("records.header")}
          </StyledHeadingRecordsPhone>
          {playersMappedArray}
        </StyledRecordsContPhone>
      ) : (
        <StyledRecordsCont>
          <StyledHeadingRecords>{t("records.header")}</StyledHeadingRecords>
          {playersMappedArray}
        </StyledRecordsCont>
      )}
    </>
  );
}
