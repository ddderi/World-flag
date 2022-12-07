import axios from "axios";
import { API } from "aws-amplify";
import { listPoints, sortByScore } from '../graphql/queries';



// const axiosInstance = axios.create({ baseURL: "http://localhost:1234" });



export const registerScores = async (user, setExistscore, setBestscoreuser) => {
    try {
        const apiData = await API.graphql({
            query: listPoints,
            variables: { filter: { owner: { eq: user } } }
        })
        console.log(apiData.data.listPoints.items)
        if (apiData.data.listPoints.items.length > 0) {
            localStorage.setItem('scoreid', JSON.stringify(apiData.data.listPoints.items[0].id))
            localStorage.setItem('userscore', JSON.stringify(apiData.data.listPoints.items[0].score))
            localStorage.setItem('existscore', JSON.stringify(true))
            setBestscoreuser(apiData.data.listPoints.items[0].score || 0)
        } else {

            localStorage.setItem('userscore', JSON.stringify(0))
            localStorage.setItem('existscore', JSON.stringify(false))
            setExistscore(false)
        }
        return apiData
    } catch (error) {
        console.log(error)
    }
}










export async function flagCall(country) {
    try {
        const newcountry = country.toLowerCase()
        // const result = await axios.get(`https://countryflagsapi.com/png/${country}`, {headers: {

        const result = await axios.get(`https://flagcdn.com/w320/${newcountry}.png`)
        return result
    } catch (error) {
        console.log(error)
    }
}







export async function fetchBestScores(setPlayers) {
    let arrayToDisplay = []
    let firstScore = 0
    let firstScoreDate = ''
    let secondScore = 0
    let secondScoreDate = ''
    let thirdScore = 0
    let thirdScoreDate = ''
    let fourthScore = 0
    let fourthScoreDate = ''
    let fifthScore = 0
    let fifthScoreDate = ''
    let arrayOfScore = [firstScore, secondScore, thirdScore, fourthScore, fifthScore]
    let arrayOfDate = [firstScoreDate, secondScoreDate, thirdScoreDate, fourthScoreDate, fifthScoreDate]
    
    try {
        const result = await API.graphql({
            query: sortByScore,
            authMode: "API_KEY",
            // typedate: "date",
            variables: {
                typescore: "score",
                sortDirection: "DESC",
                limit: 5
            }
        })
        // console.log(result.data.listPoints.items)
        // if (result.data.listPoints.items[0].updatedAt > '') {
        //     console.log('ca veut dire que le 2 decembre est inferieur au 3 decembre ')

        // } 
        // else
        // console.log(result.data.listPoints.items)
        // result.data.listPoints.items.map((data, index) => {
        //     console.log(firstScore)
        //     console.log(secondScore)
        //     console.log(thirdScore)
        //     console.log(fourthScore)
        //     console.log(fifthScore)

        //     console.log(arrayOfScore)
        //     console.log(arrayOfDate)
        //     if (data.score > firstScore) {
        //         arrayToDisplay.unshift(data)
        //         fifthScore = fourthScore
        //         fourthScore = thirdScore
        //         thirdScore = secondScore
        //         secondScore = firstScore
                
        //         firstScore = data.score
        //         firstScoreDate = data.updatedAt
                
               
                
                
        //         arrayOfScore[4] = fifthScore
        //         arrayOfScore[3] = fourthScore
        //         arrayOfScore[2] = thirdScore
        //         arrayOfScore[1] = secondScore
        //         arrayOfScore[0] = firstScore
        //         // fifthScore = arrayOfScore[4]
        //         // fourthScore = arrayOfScore[3]
        //         // thirdScore = arrayOfScore[2]
        //         // secondScore = arrayOfScore[1]
                
        //         arrayOfDate[4] = fifthScoreDate
        //         arrayOfDate[3] = fourthScoreDate
        //         arrayOfDate[2] = thirdScoreDate
        //         arrayOfDate[1] = secondScoreDate
        //         arrayOfDate[0] = firstScoreDate
        //         // fifthScoreDate =  arrayOfDate[4]
        //         // fourthScoreDate = arrayOfDate[3]
        //         // thirdScoreDate = arrayOfDate[2]
        //         // secondScoreDate = arrayOfDate[1]

                
                
        //         // firstScore = data.score
        //         // firstScoreDate = data.updatedAt
                
        //     } else if (data.score === firstScore){
        //         // console.log(data.updatedAt)
                
        //             for (let i=0;i<arrayOfDate.length;i++){
        //                 if(data.updatedAt>arrayOfDate[i]){

                            
        //                     let firstpartnewarray = arrayToDisplay.slice(0,i)
        //                     let secondpartnewarray = arrayToDisplay.slice(i)
        //                     secondpartnewarray.unshift(data)
        //                     arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                            
        //                     // arrayToDisplay.unshift(data)
        //                     console.log(arrayOfScore[i])
        //                     arrayOfScore[i+4] = arrayOfScore[i+3]
        //                     arrayOfScore[i+3] = arrayOfScore[i+2]
        //                     arrayOfScore[i+2] = arrayOfScore[i+1]
        //                     arrayOfScore[i+1] = arrayOfScore[i]
                            
                            
                           
        //                     arrayOfScore[i] = data.score
        //                     // arrayOfScore[i+5] = arrayOfScore[i+4]

        //                     fifthScore = arrayOfScore[4]
        //                     fourthScore = arrayOfScore[3]
        //                     thirdScore = arrayOfScore[2]
        //                     secondScore = arrayOfScore[1]
        //                     firstScore = arrayOfScore[0]

        //                     arrayOfDate[i+4] = arrayOfDate[i+3]
        //                     arrayOfDate[i+3] = arrayOfDate[i+2]
        //                     arrayOfDate[i+2] = arrayOfDate[i+1]
        //                     arrayOfDate[i+1] = arrayOfDate[i]
                    
        //                     arrayOfDate[i] = data.updatedAt

        //                     fifthScoreDate =  arrayOfDate[4]
        //                     fourthScoreDate = arrayOfDate[3]
        //                     thirdScoreDate = arrayOfDate[2]
        //                     secondScoreDate = arrayOfDate[1]
        //                     firstScoreDate = arrayOfDate[0]
                            
                            
                            

                            

        //                     break;
                            
                            
        //                 }else if(data.updatedAt<arrayOfDate[i]){ 
        //                     let firstpartnewarray = arrayToDisplay.slice(0,i+1)
        //                     let secondpartnewarray = arrayToDisplay.slice(i+1)
        //                     secondpartnewarray.unshift(data)
        //                     arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)

        //                     arrayOfScore[i+4] = arrayOfScore[i+3]
        //                     arrayOfScore[i+3] = arrayOfScore[i+2]
        //                     arrayOfScore[i+2] = arrayOfScore[i+1]
        //                     arrayOfScore[i+1] = data.score
                            
        //                     // arrayOfScore[i+5] = arrayOfScore[i+4]
                            

        //                     fifthScore = arrayOfScore[4]
        //                     fourthScore = arrayOfScore[3]
        //                     thirdScore = arrayOfScore[2]
        //                     secondScore = arrayOfScore[1]
        //                     firstScore = arrayOfScore[0]

        //                     arrayOfDate[i+4] = arrayOfDate[i+3]
        //                     arrayOfDate[i+3] = arrayOfDate[i+2]
        //                     arrayOfDate[i+2] = arrayOfDate[i+1]
        //                     arrayOfDate[i+1] = data.updatedAt
                            
        //                     // arrayOfDate[i+5] = arrayOfDate[i+4]
                            

        //                     fifthScoreDate =  arrayOfDate[4]
        //                     fourthScoreDate = arrayOfDate[3]
        //                     thirdScoreDate = arrayOfDate[2]
        //                     secondScoreDate = arrayOfDate[1]
        //                     firstScoreDate = arrayOfDate[0]


        //                     break;
        //                 }
                        
        //             }
        //             // arrayToDisplay.unshift(data)
        //             // fifthScore = fourthScore
        //             // fourthScore = thirdScore
        //             // thirdScore = secondScore
        //             // secondScore = firstScore
                    
                    
                    
        //             // firstScore = data.score
        //             // firstScoreDate = data.updatedAt
        //         } 
        //     //     else if (data.score === firstScore && data.updatedAt < firstScoreDate) {
        //     //         let firstpartnewarray = arrayToDisplay.slice(0, 1)
        //     //         let secondpartnewarray = arrayToDisplay.slice(1)
        //     //         secondpartnewarray.unshift(data)
        //     //         arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //     //         fifthScore = fourthScore
        //     //         fourthScore = thirdScore
        //     //         thirdScore = secondScore
                    
                    
        //     //         secondScore = data.score
        //     //         secondScoreDate = data.updatedAt
        //     //     }
        //     // } 
        //     else if (data.score > secondScore) {
        //         let firstpartnewarray = arrayToDisplay.slice(0, 1)
        //         let secondpartnewarray = arrayToDisplay.slice(1)
        //         secondpartnewarray.unshift(data)
        //         arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //         fifthScore = fourthScore
        //         fourthScore = thirdScore
        //         thirdScore = secondScore
               
                
        //         secondScore = data.score
        //         secondScoreDate = data.updatedAt

        //         arrayOfScore[4] = fifthScore
        //         arrayOfScore[3] = fourthScore
        //         arrayOfScore[2] = thirdScore
        //         arrayOfScore[1] = secondScore
        //         arrayOfScore[0] = firstScore

        //         arrayOfDate[4] = fifthScoreDate
        //         arrayOfDate[3] = fourthScoreDate
        //         arrayOfDate[2] = thirdScoreDate
        //         arrayOfDate[1] = secondScoreDate
        //         arrayOfDate[0] = firstScoreDate

        //     } else if (data.score === secondScore) {
                
        //         // && data.updatedAt > secondScoreDate


        //             let firstpartnewarray = arrayToDisplay.slice(0, 1)
        //             let secondpartnewarray = arrayToDisplay.slice(1)
        //             secondpartnewarray.unshift(data)
        //             arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //             fifthScore = fourthScore
        //             fourthScore = thirdScore
        //             thirdScore = secondScore
                    
                   
        //             secondScore = data.score
        //             secondScoreDate = data.updatedAt
        //         } else if (data.score === secondScore && data.updatedAt < secondScoreDate) {
        //             let firstpartnewarray = arrayToDisplay.slice(0, 2)
        //             let secondpartnewarray = arrayToDisplay.slice(2)
        //             secondpartnewarray.unshift(data)
        //             arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //             fifthScore = fourthScore
        //             fourthScore = thirdScore
                    
        //             thirdScore = data.score
        //             thirdScoreDate = data.updatedAt
        //         // }
        //     }
        //     else if (data.score > thirdScore) {

        //         let firstpartnewarray = arrayToDisplay.slice(0, 2)
        //         let secondpartnewarray = arrayToDisplay.slice(2)
        //         secondpartnewarray.unshift(data)
        //         arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //         fifthScore = fourthScore
        //         fourthScore = thirdScore
                
        //         thirdScore = data.score
        //         thirdScoreDate = data.updatedAt
        //     }
        //     else if (data.score === thirdScore && data.updatedAt > thirdScoreDate) {
        //         // if (data.updatedAt > thirdScoreDate) {
        //             let firstpartnewarray = arrayToDisplay.slice(0, 2)
        //             let secondpartnewarray = arrayToDisplay.slice(2)
        //             secondpartnewarray.unshift(data)
        //             arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //             fifthScore = fourthScore
        //             fourthScore = thirdScore
                    
        //             thirdScore = data.score
        //             thirdScoreDate = data.updatedAt
        //         } else if (data.score === thirdScore && data.updatedAt < thirdScoreDate) {
        //             let firstpartnewarray = arrayToDisplay.slice(0, 3)
        //             let secondpartnewarray = arrayToDisplay.slice(3)
        //             secondpartnewarray.unshift(data)
        //             arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //             fifthScore = fourthScore
        //             fourthScore = data.score
        //             fourthScoreDate = data.updatedAt
        //         // }

        //     }
        //     else if (data.score > fourthScore) {
        //         let firstpartnewarray = arrayToDisplay.slice(0, 3)
        //         let secondpartnewarray = arrayToDisplay.slice(3)
        //         secondpartnewarray.unshift(data)
        //         arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //         fifthScore = fourthScore
        //         fourthScore = data.score
        //         fourthScoreDate = data.updatedAt
        //     }
        //     else if (data.score === fourthScore && data.updatedAt > fourthScoreDate) {
        //         // if (data.updatedAt > fourthScoreDate) {
        //             let firstpartnewarray = arrayToDisplay.slice(0, 3)
        //             let secondpartnewarray = arrayToDisplay.slice(3)
        //             secondpartnewarray.unshift(data)
        //             arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //             fifthScore = fourthScore
        //             fourthScore = data.score
        //             fourthScoreDate = data.updatedAt
        //         } else if (data.score === fourthScore && data.updatedAt < fourthScoreDate) {
        //             console.log(data.updatedAt)
        //             console.log(fourthScoreDate)
        //             let firstpartnewarray = arrayToDisplay.slice(0, 4)
        //             let secondpartnewarray = arrayToDisplay.slice(4)
        //             secondpartnewarray.unshift(data)
        //             arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //             fifthScore = data.score
        //             fifthScoreDate = data.updatedAt
        //         // }
        //     }
        //     else if (data.score > fifthScore) {
        //         let firstpartnewarray = arrayToDisplay.slice(0, 4)
        //         let secondpartnewarray = arrayToDisplay.slice(4)
        //         secondpartnewarray.unshift(data)
        //         arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //         fifthScore = data.score
        //         fifthScoreDate = data.updatedAt
        //     }
        //     else if (data.score === fifthScore && data.updatedAt > fifthScoreDate) {
        //         // if (data.updatedAt > fifthScoreDate) {
        //             let firstpartnewarray = arrayToDisplay.slice(0, 4)
        //             let secondpartnewarray = arrayToDisplay.slice(4)
        //             secondpartnewarray.unshift(data)
        //             arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
        //             fifthScore = data.score
        //             fifthScoreDate = data.updatedAt
        //         }
        //         else if (data.score === fifthScore && data.updatedAt < fifthScoreDate) {
        //             arrayToDisplay.push(data)
        //             console.log('data will be at the endof array 1')
        //             console.log(data)
        //         // }
        //     }
        //     else if (data.score < fifthScore) {
        //         arrayToDisplay.push(data)
        //         console.log('data will be at the endof array 2')
        //         console.log(data)
        //     }
        //     console.log(arrayToDisplay)
        //     return arrayToDisplay

        // })
        setPlayers(result.data.sortByScore.items)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }

}

