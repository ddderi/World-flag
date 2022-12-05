import axios from "axios";
import { API } from "aws-amplify";
import { listPoints } from '../graphql/queries';



const axiosInstance = axios.create({ baseURL: "http://localhost:1234" });



export const registerScores = async (user, setExistscore) => {
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



// export async function updateScoreUser(score, setUpdated) {
//     try {
//         const result = await axiosInstance.put(`/scores`, { score }, { withCredentials: true })
//         if (result.data.updated) {
//             setUpdated(true)
//         }
//         return result
//     } catch (error) {
//         console.log(error)
//     }
// }

// export async function fetchBestScores(setPlayers) {
//     let arrayToDisplay = []
//     let firstScore = 0
//     let firstScoreDate = 0
//     let secondScore = 0
//     let secondScoreDate = 0
//     let thirdScore = 0
//     let thirdScoreDate = 0
//     let fourthScore = 0
//     let fourthScoreDate = 0
//     let fifthScore = 0
//     let fifthScoreDate = 0
//     try {
//         const result = await API.graphql({
//             query: listPoints,
//             authMode: "API_KEY",
//         })
//         console.log(result.data.listPoints.items)
//         if (result.data.listPoints.items[0].updatedAt < result.data.listPoints.items[1].updatedAt) {
//             console.log('ca veut dire que le 2 decembre est inferieur au 3 decembre ')

//         } else

//             result.data.listPoints.items.map((data, index) => {

//                 if (data.score > firstScore) {
//                     arrayToDisplay.unshift(data)
//                     secondScore = firstScore
//                     thirdScore = secondScore
//                     fourthScore = thirdScore
//                     fifthScore = fourthScore
//                     firstScore = data.score
//                     firstScoreDate = data.updatedAt
//                     console.log('first pour ROMAIN')
//                 } else if (data.score === firstScore && data.updatedAt > firstScoreDate) {
//                     arrayToDisplay.unshift(data)
//                     secondScore = firstScore
//                     thirdScore = secondScore
//                     fourthScore = thirdScore
//                     fifthScore = fourthScore
//                     firstScore = data.score
//                     firstScoreDate = data.updatedAt

//                 } else if (data.score > secondScore) {
//                     let firstpartnewarray = arrayToDisplay.slice(0, 1)
//                     let secondpartnewarray = arrayToDisplay.slice(1)
//                     secondpartnewarray.unshift(data)
//                     arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
//                     thirdScore = secondScore
//                     fourthScore = thirdScore
//                     fifthScore = fourthScore
//                     secondScore = data.score
//                     secondScoreDate = data.updatedAt
//                     console.log(' second pour MAXIME')
//                 } else if (data.score === secondScore && data.updatedAt > secondScoreDate) {

//                     let firstpartnewarray = arrayToDisplay.slice(0, 1)
//                     let secondpartnewarray = arrayToDisplay.slice(1)
//                     secondpartnewarray.unshift(data)
//                     arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
//                     thirdScore = secondScore
//                     fourthScore = thirdScore
//                     fifthScore = fourthScore
//                     secondScore = data.score
//                     secondScoreDate = data.updatedAt
//                 }
//                 else if (data.score > thirdScore) {

//                     let firstpartnewarray = arrayToDisplay.slice(0, 2)
//                     let secondpartnewarray = arrayToDisplay.slice(2)
//                     secondpartnewarray.unshift(data)
//                     arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
//                     fourthScore = thirdScore
//                     fifthScore = fourthScore
//                     thirdScore = data.score
//                     thirdScoreDate = data.updatedAt
//                     console.log('Third pour micaa')
//                 }
//                 else if (data.score === thirdScore && data.updatedAt > thirdScoreDate) {
//                     let firstpartnewarray = arrayToDisplay.slice(0, 2)
//                     let secondpartnewarray = arrayToDisplay.slice(2)
//                     secondpartnewarray.unshift(data)
//                     arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
//                     fourthScore = thirdScore
//                     fifthScore = fourthScore
//                     thirdScore = data.score
//                     thirdScoreDate = data.updatedAt

//                 }
//                 else if (data.score > fourthScore) {
//                     let firstpartnewarray = arrayToDisplay.slice(0, 3)
//                     let secondpartnewarray = arrayToDisplay.slice(3)
//                     secondpartnewarray.unshift(data)
//                     arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
//                     fifthScore = fourthScore
//                     fourthScore = data.score
//                     fourthScoreDate = data.updatedAt
//                 }
//                 else if (data.score === fourthScore && data.updatedAt > fourthScoreDate) {
//                     let firstpartnewarray = arrayToDisplay.slice(0, 3)
//                     let secondpartnewarray = arrayToDisplay.slice(3)
//                     secondpartnewarray.unshift(data)
//                     arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
//                     fifthScore = fourthScore
//                     fourthScore = data.score
//                     fourthScoreDate = data.updatedAt
//                 }
//                 else if (data.score >= fifthScore) {

//                 }
//                 else if (data.score === fifthScore && data.updatedAt > fifthScoreDate) {
//                     let firstpartnewarray = arrayToDisplay.slice(0, 4)
//                     let secondpartnewarray = arrayToDisplay.slice(4)
//                     secondpartnewarray.unshift(data)
//                     arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
//                     fifthScore = data.score
//                     fifthScoreDate = data.updatedAt
//                 }
//                 else if (data.score < fifthScore) {
//                     arrayToDisplay.push(data)
//                     console.log('something wrong')
//                 }
//                 console.log(arrayToDisplay)
//                 return arrayToDisplay

//             })
//         setPlayers(arrayToDisplay)
//         return result
//     } catch (error) {
//         console.log(error)
//     }

// }






export async function fetchBestScores(setPlayers) {
    let arrayToDisplay = []
    let firstScore = 0
    let firstScoreDate = 0
    let secondScore = 0
    let secondScoreDate = 0
    let thirdScore = 0
    let thirdScoreDate = 0
    let fourthScore = 0
    let fourthScoreDate = 0
    let fifthScore = 0
    let fifthScoreDate = 0
    try {
        const result = await API.graphql({
            query: listPoints,
            authMode: "API_KEY",
        })
        // console.log(result.data.listPoints.items)
        // if (result.data.listPoints.items[0].updatedAt < result.data.listPoints.items[1].updatedAt) {
        //     console.log('ca veut dire que le 2 decembre est inferieur au 3 decembre ')

        // } else
        console.log(result.data.listPoints.items)
        result.data.listPoints.items.map((data, index) => {
            console.log(firstScore)
            console.log(secondScore)
            console.log(thirdScore)
            console.log(fourthScore)
            console.log(fifthScore)
            if (data.score > firstScore) {
                arrayToDisplay.unshift(data)
                fifthScore = fourthScore
                fourthScore = thirdScore
                thirdScore = secondScore
                secondScore = firstScore
                
                
                
                firstScore = data.score
                firstScoreDate = data.updatedAt
            } else if (data.score === firstScore && data.updatedAt > firstScoreDate) {
                // if (data.updatedAt > firstScoreDate) {
                    arrayToDisplay.unshift(data)
                    fifthScore = fourthScore
                    fourthScore = thirdScore
                    thirdScore = secondScore
                    secondScore = firstScore
                    
                    
                    
                    firstScore = data.score
                    firstScoreDate = data.updatedAt
                } 
                else if (data.score === firstScore && data.updatedAt < firstScoreDate) {
                    let firstpartnewarray = arrayToDisplay.slice(0, 1)
                    let secondpartnewarray = arrayToDisplay.slice(1)
                    secondpartnewarray.unshift(data)
                    arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                    fifthScore = fourthScore
                    fourthScore = thirdScore
                    thirdScore = secondScore
                    
                    
                    secondScore = data.score
                    secondScoreDate = data.updatedAt
                // }
            } else if (data.score > secondScore) {
                let firstpartnewarray = arrayToDisplay.slice(0, 1)
                let secondpartnewarray = arrayToDisplay.slice(1)
                secondpartnewarray.unshift(data)
                arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                fifthScore = fourthScore
                fourthScore = thirdScore
                thirdScore = secondScore
               
                
                secondScore = data.score
                secondScoreDate = data.updatedAt
            } else if (data.score === secondScore && data.updatedAt > secondScoreDate) {
                // if (data.updatedAt > secondScoreDate) {
                    let firstpartnewarray = arrayToDisplay.slice(0, 1)
                    let secondpartnewarray = arrayToDisplay.slice(1)
                    secondpartnewarray.unshift(data)
                    arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                    fifthScore = fourthScore
                    fourthScore = thirdScore
                    thirdScore = secondScore
                    
                   
                    secondScore = data.score
                    secondScoreDate = data.updatedAt
                } else if (data.score === secondScore && data.updatedAt < secondScoreDate) {
                    let firstpartnewarray = arrayToDisplay.slice(0, 2)
                    let secondpartnewarray = arrayToDisplay.slice(2)
                    secondpartnewarray.unshift(data)
                    arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                    fifthScore = fourthScore
                    fourthScore = thirdScore
                    
                    thirdScore = data.score
                    thirdScoreDate = data.updatedAt
                // }
            }
            else if (data.score > thirdScore) {

                let firstpartnewarray = arrayToDisplay.slice(0, 2)
                let secondpartnewarray = arrayToDisplay.slice(2)
                secondpartnewarray.unshift(data)
                arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                fifthScore = fourthScore
                fourthScore = thirdScore
                
                thirdScore = data.score
                thirdScoreDate = data.updatedAt
            }
            else if (data.score === thirdScore && data.updatedAt > thirdScoreDate) {
                // if (data.updatedAt > thirdScoreDate) {
                    let firstpartnewarray = arrayToDisplay.slice(0, 2)
                    let secondpartnewarray = arrayToDisplay.slice(2)
                    secondpartnewarray.unshift(data)
                    arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                    fifthScore = fourthScore
                    fourthScore = thirdScore
                    
                    thirdScore = data.score
                    thirdScoreDate = data.updatedAt
                } else if (data.score === thirdScore && data.updatedAt < thirdScoreDate) {
                    let firstpartnewarray = arrayToDisplay.slice(0, 3)
                    let secondpartnewarray = arrayToDisplay.slice(3)
                    secondpartnewarray.unshift(data)
                    arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                    fifthScore = fourthScore
                    fourthScore = data.score
                    fourthScoreDate = data.updatedAt
                // }

            }
            else if (data.score > fourthScore) {
                let firstpartnewarray = arrayToDisplay.slice(0, 3)
                let secondpartnewarray = arrayToDisplay.slice(3)
                secondpartnewarray.unshift(data)
                arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                fifthScore = fourthScore
                fourthScore = data.score
                fourthScoreDate = data.updatedAt
            }
            else if (data.score === fourthScore && data.updatedAt > fourthScoreDate) {
                // if (data.updatedAt > fourthScoreDate) {
                    let firstpartnewarray = arrayToDisplay.slice(0, 3)
                    let secondpartnewarray = arrayToDisplay.slice(3)
                    secondpartnewarray.unshift(data)
                    arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                    fifthScore = fourthScore
                    fourthScore = data.score
                    fourthScoreDate = data.updatedAt
                } else if (data.score === fourthScore && data.updatedAt < fourthScoreDate) {
                    console.log(data.updatedAt)
                    console.log(fourthScoreDate)
                    let firstpartnewarray = arrayToDisplay.slice(0, 4)
                    let secondpartnewarray = arrayToDisplay.slice(4)
                    secondpartnewarray.unshift(data)
                    arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                    fifthScore = data.score
                    fifthScoreDate = data.updatedAt
                // }
            }
            else if (data.score > fifthScore) {
                let firstpartnewarray = arrayToDisplay.slice(0, 4)
                let secondpartnewarray = arrayToDisplay.slice(4)
                secondpartnewarray.unshift(data)
                arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                fifthScore = data.score
                fifthScoreDate = data.updatedAt
            }
            else if (data.score === fifthScore && data.updatedAt > fifthScoreDate) {
                // if (data.updatedAt > fifthScoreDate) {
                    let firstpartnewarray = arrayToDisplay.slice(0, 4)
                    let secondpartnewarray = arrayToDisplay.slice(4)
                    secondpartnewarray.unshift(data)
                    arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                    fifthScore = data.score
                    fifthScoreDate = data.updatedAt
                }
                else if (data.score === fifthScore && data.updatedAt < fifthScoreDate) {
                    arrayToDisplay.push(data)
                    console.log('data will be at the endof array 1')
                    console.log(data)
                // }
            }
            else if (data.score < fifthScore) {
                arrayToDisplay.push(data)
                console.log('data will be at the endof array 2')
                console.log(data)
            }
            console.log(arrayToDisplay)
            return arrayToDisplay

        })
        setPlayers(arrayToDisplay)
        return result
    } catch (error) {
        console.log(error)
    }

}