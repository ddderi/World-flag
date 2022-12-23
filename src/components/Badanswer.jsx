import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import {
    StyledFooterDivAnswer,
    StyledCornerTopLeft,
    StyledCornerTopRight,
    StyledCornerBottomLeft,
    StyledCornerBottomRight,
    StyledFooterDivFlagAnswer
} from './styles/GeneralElements';
import Flaganswer from './Flaganswer';

export default function Badanswer({ countryTrigger, setCountryTrigger, setCountryname, wronganswer }) {


    const responseMapped = wronganswer.map((data, index) => { return <Flaganswer countryTrigger={countryTrigger} setCountryTrigger={setCountryTrigger} setCountryname={setCountryname} colorborder={'red'} data={data} key={index} /> })


    return (
        <StyledFooterDivAnswer style={{ marginTop: '5%' }} >
            <IoCloseSharp size={25} ></IoCloseSharp>
            <StyledFooterDivFlagAnswer >
                <StyledCornerTopLeft></StyledCornerTopLeft>
                <StyledCornerTopRight></StyledCornerTopRight>
                <StyledCornerBottomLeft></StyledCornerBottomLeft>
                <StyledCornerBottomRight></StyledCornerBottomRight>
                {responseMapped}
            </StyledFooterDivFlagAnswer>
        </StyledFooterDivAnswer>
    )
}
