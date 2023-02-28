import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:1234" });

const axiosPhpInstance = axios.create({ baseURL: "http://localhost:8000/api" });

export async function loggingUser(data, setMessage, setToken) {
  try {
    const result = await axiosPhpInstance.post("/login", data, {
      withCredentials: true,
    });
    console.log(result);
    setToken(result.data.token);
    return result.data;
  } catch (error) {
    console.log(error);
    setMessage(error.response.data.message);
  }
}

export async function signUpUser(info) {
  try {
    const result = await axiosPhpInstance.post("/signup", info, {
      withCredentials: true,
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export async function changePassword(setLogged, info, setMessage, token) {
  try {
    console.log(info);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await axiosPhpInstance.put(
      "/change_password",
      {
        username: info.username,
        current_password: info.current_password,
        new_password: info.new_password,
        // new_password_confirmation: info.new_password_confirmation,
      },
      {
        headers: headers,
      }
    );
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    setMessage(error.response.data.message);
    if (!error.response.data.login) {
      setLogged(false);
    }
  }
}

export async function logout(setUser, setLogged, token, setToken) {
  try {
    // const result = await axiosPhpInstance.get("/logout", {
    //   withCredentials: true,
    // });

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await axiosPhpInstance.post(
      "/logout",
      {},
      {
        headers: headers,
      }
    );
    localStorage.removeItem("token");
    // localStorage.removeItem("score");
    setUser("");
    setLogged(false);
    setToken("");
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export async function checkCookie(navigateTo, setUser, setLogged, setMessage) {
  // try {
  //   console.log("Checking if user is connected");
  //   const result = await axiosInstance.get("/cookie", {
  //     withCredentials: true,
  //   });
  //   setLogged(result.data.login);
  //   return result.data;
  // } catch (error) {
  //   if (!error.response.data.login) {
  //     localStorage.removeItem("user");
  //     setUser("");
  //     setTimeout(() => {
  //       navigateTo("login");
  //     }, 2000);
  //   }
  //   console.log(error);
  //   setMessage(error.response.data.message);
  //   logout(setUser, setLogged);
  // }
}

export async function flagCall(country) {
  try {
    const newcountry = country.toLowerCase();
    //const result = await axios.get(`https://countryflagsapi.com/png/${newcountry}`)
    const result = await axios.get(
      `https://flagcdn.com/256x192/${newcountry}.png`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function updateScoreUser(score, setUpdated) {
  try {
    const result = await axiosInstance.put(
      `/scores`,
      { score },
      { withCredentials: true }
    );
    if (result.data.updated) {
      setUpdated(false);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function bestPlayers(setPlayers, players, updated, setUpdated) {
  // try {
  //   const result = await axiosInstance.get("/players", {
  //     withCredentials: true,
  //   });
  //   if (result.data.users !== players && updated === false) {
  //     setPlayers(result.data.users);
  //     setUpdated(true);
  //   }
  //   return result.data;
  // } catch (error) {
  //   console.log(error);
  // }
}
