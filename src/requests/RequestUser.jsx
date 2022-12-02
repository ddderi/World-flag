import axios from "axios";
import { API } from "aws-amplify";
import { listPoints } from '../graphql/queries';
import { createPoint } from "../graphql/mutations";
// import { getPointUser, getMyPoint, getPoint } from "../graphql/custom-queries";

const axiosInstance = axios.create({ baseURL: "http://localhost:1234" });


// function for fetching user last score


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



export async function updateScoreUser(score, setUpdated) {
    try {
        const result = await axiosInstance.put(`/scores`, { score }, { withCredentials: true })
        if (result.data.updated) {
            setUpdated(true)
        }
        return result
    } catch (error) {
        console.log(error)
    }
}

