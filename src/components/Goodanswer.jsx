import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import {
    StyledFooterDivAnswer,
    StyledCornerTopLeft,
    StyledCornerTopRight,
    StyledCornerBottomLeft,
    StyledCornerBottomRight,
    StyledFooterDivFlagAnswer
} from './styles/GeneralElements';
import Flaganswer from './Flaganswer';

export default function Goodanswer({ rightanswer }) {

    const arraytest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    const responseMapped = rightanswer.map((data, index) => { return <Flaganswer colorborder={'green'} data={data} key={index} /> })

    return (
        <StyledFooterDivAnswer className='try'>
            <IoCheckmarkSharp size={25}></IoCheckmarkSharp>
            <StyledFooterDivFlagAnswer  >
                <StyledCornerTopLeft></StyledCornerTopLeft>
                <StyledCornerTopRight></StyledCornerTopRight>
                <StyledCornerBottomLeft></StyledCornerBottomLeft>
                <StyledCornerBottomRight></StyledCornerBottomRight>
                {responseMapped}
            </StyledFooterDivFlagAnswer>
        </StyledFooterDivAnswer>
    )
}
