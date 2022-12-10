import React from 'react';
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

export default function Heart({data}) {
  return (
  <>
    {/* <div  style={{color: data}}>{data}</div> */}
    <RiHeart3Fill style={{color: data}} />
    </>
  )
}
