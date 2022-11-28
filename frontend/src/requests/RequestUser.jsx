import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:1234" });

export async function loggingUser(data, setMessage) {
    try {
        const result = await axiosInstance.post('/login', data, { withCredentials: true });
        console.log(result)
        setMessage('')
        return result.data
    } catch (error) {
        console.log(error)
        setMessage(error.response.data)
    }
}

export async function signUpUser(info) {
    try {
        const result = await axiosInstance.post('/signup', info, { withCredentials: true })
        return result.data
    } catch (error) {
        console.log(error)
    }
}

export async function changePassword(navigateTo, setLogged, setUser, info, setMessage) {
    try {
        const result = await axiosInstance.put('/change_password', info, { withCredentials: true })
        return result.data
    } catch (error) {

        console.log(error)
        setMessage(error.response.data.message)
        if (!error.response.data.login) {
            setTimeout(() => {
                navigateTo('login')
                setLogged(false)
                localStorage.removeItem('user')
                localStorage.removeItem('score')
                setUser('')
            }, 2000);
        }
    }
}

export async function logout(setUser, setLogged) {
    try {
        const result = await axiosInstance.get('/logout', { withCredentials: true })
        localStorage.removeItem('user')
        localStorage.removeItem('score')
        setUser('')
        setLogged(false)
        return result.data
    } catch (error) {
        console.log(error)
    }
}


// export async function checkCookie(user, navigateTo, setUser, setLogged, setMessage) {
//     try {
//         const result = await axiosInstance.get('/cookie', { withCredentials: true })
//         setLogged(result.data.login)
//         return result.data
//     } catch (error) {
//         if (!error.response.data.login) {
//             localStorage.removeItem('user')
//             setUser('')
//             setLogged(false)
//         } if (localStorage.getItem('user') === user && !error.response.data.login) {
//             localStorage.removeItem('user')
//             setUser('')
//             setLogged(false)
//             setMessage(error.response.data.message)
//             setTimeout(() => {
//                 navigateTo('login')
//             }, 2000);
//         }
//         console.log(error)
//         logout(setUser, setLogged)
//     }
// }




export async function flagCall(country) {
    try {
        // const result = await axios.get(`https://countryflagsapi.com/png/${country}`, {withCredentials: true})
        const result = await axios.get(`https://flagcdn.com/w160/${country}.png`, {withCredentials: true})
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
