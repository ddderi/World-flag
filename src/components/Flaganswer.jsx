import React from 'react';
import {
    StyledImgFlagAnswer,
    StyledFlagAnswer,
    StyledAnswer,
    StyledFlagName,
    StyledImg,
    StyledFooter
} from './styles/GeneralElements';


export default function Flaganswer({ data, colorborder }) {
    return (
        <>
            <StyledAnswer>
                <StyledImgFlagAnswer colorborder={colorborder}  ><StyledImg src={data.flag} ></StyledImg ></StyledImgFlagAnswer>
                {/* <StyledFlagName>{data.result}</StyledFlagName> */}
            </StyledAnswer>
            <StyledFlagName>{data.result}</StyledFlagName>
            {/* <StyledFooter><StyledFlagName>{data.result}</StyledFlagName></StyledFooter> */}
        </>
    )
}
