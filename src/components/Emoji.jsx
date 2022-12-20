import React from 'react';
import {
StyledSpanEmoji
} from './styles/GeneralElements';

export default function Emoji(props) {
  return (
    <StyledSpanEmoji aria-label={props.label ? props.label : ""}>
      {props.symbol}
    </StyledSpanEmoji>
  )
}
