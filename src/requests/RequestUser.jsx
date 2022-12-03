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




export async function fetchBestScores(setPlayers) {
    let arrayToDisplay = []
    let firstScore = 0
    let secondScore = 0
    let thirdScore = 0
    let fourthScore = 0
    let fifthScore = 0
    try {
        const result = await API.graphql({
            query: listPoints,
            authMode: "API_KEY",
        })
        console.log(result.data.listPoints.items)
        if(result.data.listPoints.items[0].updatedAt < result.data.listPoints.items[1].updatedAt){
            console.log('ca veut dire que le 2 decembre est inferieur au 3 decembre ')

        }
        result.data.listPoints.items.map((data, index) => {

            if (data.score > firstScore || data.score === firstScore) {
                arrayToDisplay.unshift(data)
                secondScore = firstScore
                thirdScore = secondScore
                fourthScore = thirdScore
                fifthScore = fourthScore
                firstScore = data.score
            }
            else if (data.score > secondScore || data.score === secondScore) {
                let firstpartnewarray = arrayToDisplay.slice(0, 1)
                let secondpartnewarray = arrayToDisplay.slice(1)
                secondpartnewarray.unshift(data)
                arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                thirdScore = secondScore
                fourthScore = thirdScore
                fifthScore = fourthScore
                secondScore = data.score
            } else if (data.score > thirdScore || data.score === thirdScore) {
                let firstpartnewarray = arrayToDisplay.slice(0, 2)
                let secondpartnewarray = arrayToDisplay.slice(2)
                secondpartnewarray.unshift(data)
                arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                fourthScore = thirdScore
                fifthScore = fourthScore
                thirdScore = data.score
            } else if (data.score > fourthScore || data.score === fourthScore ) {
                let firstpartnewarray = arrayToDisplay.slice(0, 3)
                let secondpartnewarray = arrayToDisplay.slice(3)
                secondpartnewarray.unshift(data)
                arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                fifthScore = fourthScore
                fourthScore = data.score
            }else if(data.score > fifthScore || data.score === fifthScore ){
                let firstpartnewarray = arrayToDisplay.slice(0, 4)
                let secondpartnewarray = arrayToDisplay.slice(4)
                secondpartnewarray.unshift(data)
                arrayToDisplay = firstpartnewarray.concat(secondpartnewarray)
                fourthScore = data.score
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