import React from 'react';
import Answer from './Answer';
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

export default function Badanswer({ wronganswer }) {

    const arraytest = [1, 2, 3, 10,11,12]

    const responseMapped = wronganswer.map((data, index) => {return <Flaganswer colorborder={'red'} data={data} key={index} />})


    return (
        <StyledFooterDivAnswer  >
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
