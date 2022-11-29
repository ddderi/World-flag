import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:1234" });








export async function flagCall(country) {
    try {
        const newcountry = country.toLowerCase()
        // const result = await axios.get(`https://countryflagsapi.com/png/${country}`, {headers: {
        //     'Access-Control-Allow-Origin' : "http://localhost:3000/",
        //     'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',  
        // }})
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

export async function bestPlayers(setPlayers, players, updated, setUpdated) {
    try {
        const result = await axiosInstance.get('/players', { withCredentials: true })
        if (result.data.users !== players || updated === true) {
            setPlayers(result.data.users)
            setUpdated(false)
        }
        return result.data
    } catch (error) {
        console.log(error)
    }
}
