import React from 'react';
import {
  StyledCard,
  StyledImgFlag,
}
  from '../components/styles/GeneralElements';
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export default function Flag({ data }) {


  return (
    
    // <StyledImgFlag as={animated.div} src={data} ></StyledImgFlag>
    <StyledImgFlag alt='flag' src={data}></StyledImgFlag>
  )
}
