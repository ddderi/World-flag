import axios from "axios";
import { API } from "aws-amplify";
import { listPoints, sortByScore } from '../graphql/queries';



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
    try {
        const result = await API.graphql({
            query: sortByScore,
            authMode: "API_KEY",
            variables: {
                typescore: "score",
                sortDirection: "DESC",
                limit: 5
            }
        })
        setPlayers(result.data.sortByScore.items)
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }

}

