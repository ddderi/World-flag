import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from 'react';
import Login from "./auth/Login";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./components/Home";
import Account from "./components/Account";
import Signup from "./auth/Signup";
import Records from "./components/Records";
import ConfirmationCode from "./auth/ConfirmationCode";
import { fetchBestScores } from "./requests/RequestUser";


function App() {

  const [user, setUser] = useState('')
  const [logged, setLogged] = useState(false)
  const [userScore, setUserScore] = useState('')
  const [message, setMessage] = useState('')
  const [existscore, setExistscore] = useState(true)
  const [players, setPlayers] = useState([])
  const [triggerscore, setTriggerscore] = useState(false)
  const [ladderNavbar, setLadderNavbar] = useState(false)
  const [bestscoreuser, setBestscoreuser] = useState(0)
  const navigate = useNavigate();

  const navigateTo = (location) => {
    navigate(`/${location}`)
  };

  useEffect(() => {
    if (window.innerWidth < 765) {
      setLadderNavbar(true)
    } else {
      setLadderNavbar(false)
    }
  })


  useEffect(() => {
    const userlogged = localStorage.getItem('CognitoIdentityServiceProvider.36jsc3nbg2jfv9stpn91gb9ks0.LastAuthUser')
    if (userlogged) {
      setUser(localStorage.getItem('CognitoIdentityServiceProvider.36jsc3nbg2jfv9stpn91gb9ks0.LastAuthUser'))
      setLogged(true)
      setBestscoreuser('')


    } else {
      setLogged(false)
      setUser('')
      setBestscoreuser('')
    }

  }, [logged])


  useEffect(() => {
    fetchBestScores(setPlayers)
    const scoreexist = localStorage.getItem('existscore')
    if (scoreexist === 'false') {
      setExistscore(false)
    } else if (scoreexist === 'true') {
      setExistscore(true)
    }
  }, [])





  useEffect(() => {
    if (triggerscore) {
      setTimeout(() => {
        fetchBestScores(setPlayers)

      }, 2000)
      setBestscoreuser(localStorage.getItem('userscore'))
      setTriggerscore(false)
    }

  }, [triggerscore, setTriggerscore])



  return (
    <div className="whole" >
      <Navbar ladderNavbar={ladderNavbar} setMessage={setMessage} navigateTo={navigateTo} logged={logged} user={user} setUser={setUser} setLogged={setLogged} />
      <div className="app" >
        <Routes>
          <Route path="/" element={<Home userScore={userScore} setTriggerscore={setTriggerscore} logged={logged} setExistscore={setExistscore} existscore={existscore} players={players} user={user} setUserScore={setUserScore} setUser={setUser} setLogged={setLogged} setMessage={setMessage} />} />
          <Route path="/records" element={<Records players={players} ladderNavbar={ladderNavbar} />} />
          <Route path="/confirmation" element={<ConfirmationCode setExistscore={setExistscore} setBestscoreuser={setBestscoreuser} setLogged={setLogged} setMessage={setMessage} navigateTo={navigateTo} />} />
          <Route path="/login" element={<Login setBestscoreuser={setBestscoreuser} setExistscore={setExistscore} setUserScore={setUserScore} navigateTo={navigateTo} message={message} setMessage={setMessage} setUser={setUser} setLogged={setLogged} logged={logged} />} />
          <Route path="/account" element={<Account navigateTo={navigateTo} setLogged={setLogged} message={message} setMessage={setMessage} user={user} setUser={setUser} />} />
          <Route path="/signup" element={<Signup setMessage={setMessage} navigateTo={navigateTo} setUser={setUser} setLogged={setLogged} />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
