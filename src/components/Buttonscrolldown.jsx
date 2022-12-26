import React from 'react';
import { IoCaretDownOutline } from "react-icons/io5";
import { ButtonScrollDown } from "../../src/components/styles/ButtonElements";

export default function Buttonscrolldown({ toggleUserAnswer }) {
  return (
    <ButtonScrollDown onClick={() => toggleUserAnswer()} ><IoCaretDownOutline size={25}></IoCaretDownOutline></ButtonScrollDown>
  )
}
