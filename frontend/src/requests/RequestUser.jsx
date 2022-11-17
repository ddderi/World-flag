import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:1234" });

export async function loggingUser(data, setMessage) {
    try {
        const result = await axiosInstance.post('/login', data, { withCredentials: true });
        console.log(result)
        return result.data
    } catch(error) {
        console.log(error)
        setMessage(error.response.data)
    }
}

export async function signUpUser(data){
    try{
        const result = await axiosInstance.post('/signup', data, {withCredentials: true})
        return result.data
    }catch(error){
        console.log(error)
    }
}

export async function changePassword(data, setMessage){
    try{
        const result = await axiosInstance.put('/change_password', data, {withCredentials: true})
        return result.data
    }catch(error){
        console.log(error)
        setMessage(error.response.data.message)
    }
}


export async function checkCookie(setUser, setLogged){
    try{
        const result = await axiosInstance.get('/cookie', { withCredentials: true})
        setLogged(result.data.login)
        return result.data
    }catch(error){
        if(!error.response.data.login){
            localStorage.removeItem('user')
            setUser('')
        }
        console.log(error)
    }
}

export async function logout(setUser, setLogged){
    try{
        const result = await axiosInstance.get('/logout', {withCredentials: true})
        localStorage.removeItem('user')
        localStorage.removeItem('score')
        setUser('')
        setLogged(false)
        return result.data
    }catch(error){
        console.log(error)
    }
}


export async function flagCall(country){
    try{
        const result = await axios.get(`https://countryflagsapi.com/png/${country}`)
        return result
    }catch(error){
        console.log(error)
    }
}

export async function updateScoreUser(score, setUpdated){
    try{
        const result = await axiosInstance.put(`/scores`, {score}, {withCredentials: true})
        if(result.data.updated){
            setUpdated(false)
        }
        return result
    }catch(error){
        console.log(error)
    }
}

export async function bestPlayers(setPlayers, players, updated, setUpdated){
    try{
        const result = await axiosInstance.get('/players', {withCredentials: true})
        if(result.data.users !== players && updated === false){
        setPlayers(result.data.users)
        setUpdated(true)
        }
        return result.data
    }catch(error){
        console.log(error)
    }
}
