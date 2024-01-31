import React from "react";
import { StyledTimerLife, StyledHeartMapped } from "./styles/GeneralElements";
import Heart from "./Heart";

const Life = React.memo(({ life, heart }) => {
  return (
    <>
      <StyledHeartMapped>
        {heart.map((data, index) => {
          return <Heart data={data} key={index} />;
        })}
      </StyledHeartMapped>
    </>
  );
});
export default Life;
