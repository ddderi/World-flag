import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from 'react';
import Login from "./auth/Login";
import { checkCookie } from './requests/RequestUser';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Account from "./components/Account";
import Signup from "./auth/Signup";

function App() {

  const [user, setUser] = useState('')
  const [logged, setLogged] = useState(false)
  const [userScore, setUserScore] = useState('')

  useEffect(() => {
    const userScore = JSON.parse(localStorage.getItem('score'))
    const userCred = JSON.parse(localStorage.getItem('user'));
    if (userCred) {
      setUser(userCred)
      setUserScore(userScore)
    } else {
      setUser('')
    }
  }, [user, userScore])


  useEffect(() => {
    checkCookie(setUser, setLogged)

  }, [])



  return (
    <div className="whole">
      <Navbar logged={logged} user={user} setUser={setUser} setLogged={setLogged} />
      <div className="app">
        <Routes>
          <Route path="/home" element={<Home user={user} logged={logged} setUserScore={setUserScore} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setUser={setUser} setLogged={setLogged} logged={logged} />} />
          <Route path="/account" element={<Account user={user} />} />
          <Route path="/signup" element={<Signup setUser={setUser} setLogged={setLogged} />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
