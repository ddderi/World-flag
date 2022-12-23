import React from 'react';
import {
    StyledImgFlagAnswer,
    StyledFlagAnswer,
    StyledAnswer,
    StyledFlagName,
    StyledImg,
    StyledFooter
} from './styles/GeneralElements';


export default function Flaganswer({ countryTrigger, setCountryTrigger, setCountryname, data, colorborder }) {


    const showCountry = () => {
        setCountryTrigger(!countryTrigger)
        setCountryname(data.result)
    }

    return (
        <>
            <StyledAnswer onClick={() => showCountry()} >
                <StyledImgFlagAnswer colorborder={colorborder}  ><StyledImg src={data.flag} ></StyledImg ></StyledImgFlagAnswer>
            </StyledAnswer>
        </>
    )
}
