import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from 'react';
import Login from "./auth/Login";
import { checkCookie } from './requests/RequestUser';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Account from "./components/Account";
import Signup from "./auth/Signup";
import { bestPlayers } from './requests/RequestUser';

function App() {

  const [user, setUser] = useState('')
  const [logged, setLogged] = useState(false)
  const [userScore, setUserScore] = useState('')
  const [message, setMessage] = useState('')
  const [players, setPlayers] = useState([])
  const [updated, setUpdated] = useState(false)
  const navigate = useNavigate();

  const navigateTo = (location) => {
    navigate(`/${location}`)
  };


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
    checkCookie(navigateTo, setUser, setLogged)
    console.log('trigger cookie')
  }, [setLogged])


  useEffect(() => {
    
    bestPlayers(setPlayers, players, updated, setUpdated)
    console.log('trigger best records')
    
  }, [updated])


  return (
    <div className="whole">
      <Navbar logged={logged} user={user} setUser={setUser} setLogged={setLogged} />
      <div className="app">
        <Routes>
          <Route path="/home" element={<Home players={players} navigateTo={navigateTo} user={user} logged={logged} setUserScore={setUserScore} setUpdated={setUpdated} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login message={message} setMessage={setMessage} navigateTo={navigateTo} setUser={setUser} setLogged={setLogged} logged={logged} />} />
          <Route path="/account" element={<Account setLogged={setLogged} message={message} setMessage={setMessage} user={user} />} />
          <Route path="/signup" element={<Signup navigateTo={navigateTo} setUser={setUser} setLogged={setLogged} />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
