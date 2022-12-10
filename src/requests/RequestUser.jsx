import axios from "axios";
import { API } from "aws-amplify";
import { listPoints, sortByScore } from '../graphql/queries';
import {
    createPoint as createPointMutation,
} from '../graphql/mutations';



export const registerScores = async (user, setExistscore, setBestscoreuser) => {
    try {
        const apiData = await API.graphql({
            query: listPoints,
            variables: { filter: { owner: { eq: user } } }
        })
        // console.log(apiData)
        console.log(apiData.data.listPoints.items.length===0)
        if (apiData.data.listPoints.items.length > 0) {
            localStorage.setItem('scoreid', JSON.stringify(apiData.data.listPoints.items[0].id))
            localStorage.setItem('userscore', JSON.stringify(apiData.data.listPoints.items[0].score))
            localStorage.setItem('existscore', JSON.stringify(true))
            setBestscoreuser(apiData.data.listPoints.items[0].score || 0)
        } 
        
        
        else if (apiData.data.listPoints.items.length === 0){
            try{
            const data = {
                score: 0,
                owner: user,
                typedate: "date",
                typescore: "score"
            }
            const result = await API.graphql({
                query: createPointMutation,
                variables: { input: data }
            })
            localStorage.setItem('userscore', JSON.stringify(0))
            localStorage.setItem('scoreid', JSON.stringify(result.data.createPoint.id))
            setBestscoreuser(0)
        }catch(error){
            console.log(error)
        }}
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
        return result
    } catch (error) {
        console.log(error)
    }

}

