import React, { useRef } from "react";

const Score = React.memo(({ score }) => {
  //const renderCountRef = useRef(0);
  //renderCountRef.current += 1;

  //console.log(`Score rendered ${renderCountRef.current} times`);
  return (
    <span style={{ width: "50%", fontWeight: "bold" }}>Score : {score}</span>
  );
});
export default Score;
