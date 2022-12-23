import React from 'react';
import ReactCurvedText from "react-curved-text";


export default function Curvedtext() {
  return (
    <ReactCurvedText
    width={370}
    height={120}
    cx={190}
    cy={0}
    rx={150}
    ry={100}
    startOffset={82}
    reversed={false}
    text="Game over"
    textProps={{ style: { fontSize: 48} }}
    textPathProps={{ style: { fill: 'white'} }}
    tspanProps={null}
    ellipseProps={null}
    svgProps={null}
    />
  )
}
