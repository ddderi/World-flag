import React, { useRef } from "react";
import {
  StyledCard,
  StyledImgFlag,
} from "../components/styles/GeneralElements";

const Flag = React.memo(({ data }) => {
  return <StyledImgFlag alt="flag" src={data}></StyledImgFlag>;
});
export default Flag;
