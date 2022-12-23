import React from 'react';
import { useSpring, animated, useTransition } from 'react-spring';
import {
    StyledDivTransition
} from './styles/GeneralElements';

export default function Countrydetails({ countryTrigger, countryname }) {

    // const fade = useSpring({
    //     from: { opacity: 0,
    //         width: '100%', 
    //         backgroundColor: 'red' }, 
    //     to: {opacity: 1,
    //         width: '100%', 
    //         backgroundColor: 'red' 
    //     }
    //   })



    const transition = useTransition(countryTrigger, {
        from: { opacity: 0 },
        enter: { delay: 500, opacity: 1 },
        // leave: { delay: 1000, opacity: 0 }
    })

    return (
        <StyledDivTransition>
            {transition((style, item) =>
                item ?
                 <animated.div style={style} >{countryname}</animated.div>
                     :
                     <animated.div style={style} >{countryname}</animated.div>
            )}
        </StyledDivTransition>





        // // {
        // //         transition((style, item) =>
        // //             item ? <StyledDivTransition as={animated.div} style={style} >{countryname}</StyledDivTransition>
        // //                 :
        // //                 <StyledDivTransition></StyledDivTransition>
        // //         )
        // //     }
        //     {/* {transition((style,item) =>
        //         item ? <StyledDivTransition as={animated.div} style={style} >{countryname}</StyledDivTransition>
        //         :
        //         <></>
        //     )} */}
        //     {/* {transition((style,item) =>
        //         item ? <animated.div style={style} >{countryname}</animated.div>
        //         :
        //         <></>
        //     )} */}
        //     {/* // <animated.div style={fade} >{countryname}</animated.div>
        //     // <animated.div style={{width: '100%', backgroundColor: 'red'}} >{countryname}</animated.div> */}

    )
}
