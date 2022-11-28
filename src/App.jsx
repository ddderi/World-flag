import Navbar from "./components/navbar/Navbar";
import { useEffect, useState, createContext } from 'react';
import Login from "./auth/Login";
import { checkCookie } from './requests/RequestUser';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Account from "./components/Account";
import Signup from "./auth/Signup";
import { bestPlayers } from './requests/RequestUser';
import ConfirmationCode from "./auth/ConfirmationCode";


function App() {

  const [triggered, setTriggered] = useState(false)
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

  // ddw

  // const getUser = () => {
  //   const user = localStorage.getItem('CognitoIdentityServiceProvider.18uphqh3ksjmn1rrkec2g8ujb7.LastAuthUser')
  //   if(user){
  //     console.log(`${user} is connected`)
  //   }else{
  //     console.log('not connected')
  //   }

  // }


  useEffect(() => {
    const userlogged = localStorage.getItem('CognitoIdentityServiceProvider.36jsc3nbg2jfv9stpn91gb9ks0.LastAuthUser')
    if (userlogged) {
      setUser(localStorage.getItem('CognitoIdentityServiceProvider.36jsc3nbg2jfv9stpn91gb9ks0.LastAuthUser'))
      setLogged(true)
    } else {
      setLogged(false)
      setUser('')
      // navigateTo('login')
    }

  }, [logged])




  //dsadad

  

  // useEffect(() => {
  //   const userScore = JSON.parse(localStorage.getItem('score'))
  //   const userCred = JSON.parse(localStorage.getItem('user'));
  //   if (userCred) {
  //     setUser(userCred)
  //     setUserScore(userScore)
  //   } else {
  //     setUser('')
  //   }
  // }, [user, userScore])


  // useEffect(() => {
  //   checkCookie(user, navigateTo, setUser, setLogged, setMessage)
  //   // eslint-disable-next-line
  // }, [updated])


  useEffect(() => {
    bestPlayers(setPlayers, players, updated, setUpdated)
    // eslint-disable-next-line
  }, [updated])



  return (
    <div className="whole" >
      <Navbar navigateTo={navigateTo} logged={logged} user={user} setUser={setUser} setLogged={setLogged} />
      <div className="app" >
        <Routes>
          <Route path="/" element={<Home players={players} user={user} logged={logged} setUserScore={setUserScore} setUpdated={setUpdated} setUser={setUser} setLogged={setLogged} setMessage={setMessage} />} />
          {/* <Route path="/about" element={<About />} /> */}

          <Route path="/confirmation" element={<ConfirmationCode navigateTo={navigateTo} />} />
          <Route path="/login" element={<Login setTriggered={setTriggered} navigateTo={navigateTo} message={message} setMessage={setMessage} setUser={setUser} setLogged={setLogged} logged={logged} />} />
          <Route path="/account" element={<Account navigateTo={navigateTo} setLogged={setLogged} message={message} setMessage={setMessage} user={user} setUser={setUser} />} />
          <Route path="/signup" element={<Signup navigateTo={navigateTo} setUser={setUser} setLogged={setLogged} />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
