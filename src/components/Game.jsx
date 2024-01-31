import React, { useState } from "react";
import {
  StyledGameCont,
  StyledGameChild,
  StyledGameChildLeft,
  StyledGameChildAnswer,
  StyledBestScore,
  StyledGameInfo,
  StyledChoices,
  StyledList,
  StyledListItem,
  StyledBtnCountries,
} from "./styles/GeneralElements";
import { BtnlogGame, Button } from "../components/styles/ButtonElements";
import {
  startGame,
  handleSubmit,
  endOfGame,
} from "../gameRequests/GameRequests";
import { useTranslation } from "react-i18next";
import { API } from "aws-amplify";
import Timer from "./Timer";
import Life from "./Life";
import {
  createPoint as createPointMutation,
  updatePoint as updatePointMutation,
} from "../graphql/mutations";
import { Auth } from "aws-amplify";
import img from "../images/backgroundimg.jpg";
import { useEffect } from "react";
import { countries, africa, europe, america, asia } from "../data/countries";
import Flag from "./Flag";
import { IoChevronDownCircleOutline } from "react-icons/io5";

export default function Game({
  rightanswer,
  wronganswer,
  setRightanswer,
  setWronganswer,
  setGameover,
  gameover,
  setTriggerscore,
  logged,
  setExistscore,
  existscore,
  lastscore,
  result,
  setResult,
  user,
  setDisplayed,
  setMessage,
  setScore,
  score,
  setColor,
  navigateTo,
  setUser,
  setLogged,
  setLastscore,
}) {
  const [life, setLife] = useState(3);
  const [startTimer, setStartTimer] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const [over, setOver] = useState("");

  const [heart, setHeart] = useState(["red", "red", "red"]);
  const [arraycountries, setArraycountries] = useState(africa);
  const [flag, setFlag] = useState(null);
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState([]);
  const { t } = useTranslation();
  const userbestscore = localStorage.getItem("userscore");
  const [disabled, setDisabled] = useState(false);

  const [goodanswer, setGoodanswer] = useState(false);

  const [ChoiceIsVisible, setChoiceIsVisible] = useState(false);
  const [lastlife, setLastlife] = useState(false);
  const [timeover, setTimeover] = useState(false);
  const [choices, setChoices] = useState({
    World: true,
    Africa: false,
    Europe: false,
    Asia: false,
    America: false,
  });

  const gameEnded = () => {
    setLife(3);
    setStartTimer(false);
    setSeconds(5);
    setOver(false);
    endOfGame(
      setArraycountries,
      user,
      lastscore,
      score,
      createPoint,
      setTriggerscore,
      updatePoint,
      setLastscore,
      setFlag,
      setScore,
      setResult,
      setInput,
      existscore
    );
  };

  useEffect(() => {
    const imag = new Image();
    imag.src = img;
    imag.onload = () => setFlag(img);
  }, []);

  const startNewGame = async () => {
    console.log("happening hereeeee");
    try {
      const resultat = await startGame(
        arraycountries,
        setArraycountries,
        setResult,
        setAnswer,
        setFlag,
        setScore,
        setDisplayed,
        setDisabled,
        setStartTimer
      );
      return resultat;
    } catch (error) {
      console.log(error);
    }
  };

  const resetGame = () => {
    setScore(0);
    setOver(false);
    setSeconds(5);
    setHeart(["red", "red", "red"]);
    setLife(3);
    setGameover(false);
    setLastlife(false);
    setTimeover(false);
    setGoodanswer(false);
    setStartTimer(true);
    setRightanswer([]);
    setWronganswer([]);
  };

  useEffect(() => {
    if (life === 2) setHeart([heart[0], heart[1], (heart[2] = "white")]);
    if (life === 1)
      setHeart([heart[0], (heart[2] = "white"), (heart[2] = "white")]);
    if (life === 0)
      setHeart([
        (heart[0] = "white"),
        (heart[1] = "white"),
        (heart[2] = "white"),
      ]);
    // eslint-disable-next-line
  }, [life]);

  function startNewGameClick() {
    setChoiceIsVisible(false);
    if (logged) {
      resetGame();

      // setOver(false)
      // setSeconds(5)
      //setStartTimer(true);
      setGameover(false);
      startNewGame();
    } else {
      setMessage("Please logged-in to start playing");
      navigateTo("login");
    }
  }

  useEffect(() => {
    let combinedCountries = [];

    if (choices.World) combinedCountries = combinedCountries.concat(countries);
    if (choices.Africa) combinedCountries = combinedCountries.concat(africa);
    if (choices.Europe) combinedCountries = combinedCountries.concat(europe);
    if (choices.America) combinedCountries = combinedCountries.concat(america);
    if (choices.Asia) combinedCountries = combinedCountries.concat(asia);

    // Update the state with the new array of countries
    setArraycountries(combinedCountries);
  }, [choices]);

  useEffect(() => {
    if (life === 2) setHeart([heart[0], heart[1], (heart[2] = "white")]);
    if (life === 1)
      setHeart([heart[0], (heart[2] = "white"), (heart[2] = "white")]);

    if (life === 0) {
      // console.log('LAST LIFE BE CAREFULL')
      setLastlife(true);
      setHeart([
        (heart[0] = "white"),
        (heart[1] = "white"),
        (heart[2] = "white"),
      ]);
    }
    if (life < 0) {
      setGameover(true);
      gameEnded();
    }
    // eslint-disable-next-line
  }, [life]);

  const toggleVisibility = () => {
    setChoiceIsVisible(!ChoiceIsVisible);
  };

  const changeState = (k, v) => {
    console.log(v);
    const checkAtLeastOne = () => {
      const trueCount = Object.values(choices).filter(
        (value) => value === true
      ).length;
      console.log(trueCount);
      return trueCount >= 2 || (v == false && trueCount < 2);
    };
    if (checkAtLeastOne()) {
      gameEnded();
      setChoices((prevChoices) => ({
        ...prevChoices,
        [k]: !prevChoices[k],
      }));
    }
  };

  //console.log(choices);

  useEffect(() => {
    if (over) {
      setLife(life - 1);
      setSeconds(5);
      //setStartTimer(true);
      setOver(false);
      setWronganswer([...wronganswer, { flag, result }]);
    }

    if (timeover && lastlife) {
      setTimeover(false);
      setGameover(true);
      setWronganswer([...wronganswer, flag]);
      endOfGame(
        setArraycountries,
        user,
        lastscore,
        score,
        createPoint,
        setTriggerscore,
        updatePoint,
        setLastscore,
        setFlag,
        setScore,
        setResult,
        setInput,
        existscore
      );
      const mydiv = document.getElementsByClassName("answer");
      for (let i = 0; i < mydiv.length; i++) {
        if (mydiv[i].innerHTML === result) {
          mydiv[i].style.backgroundColor = "green";
        }
      }
      setLastlife(false);
    } else if (timeover && life > 0) {
      const mydiv = document.getElementsByClassName("answer");
      for (let i = 0; i < mydiv.length; i++) {
        if (mydiv[i].innerHTML === result) {
          mydiv[i].style.backgroundColor = "green";
        }
      }
      setWronganswer([...wronganswer, { flag, result }]);
      setLife(life - 1);
      setSeconds(5);
      setTimeover(false);
      setTimeout(() => {
        //setStartTimer(true);
        startNewGame();
      }, 1000);
    }

    if (goodanswer) {
      setSeconds(5);
      setStartTimer(true);
      setOver(false);
      setGoodanswer(false);
      setRightanswer([...rightanswer, { flag, result }]);
    }
    // eslint-disable-next-line
  }, [over, goodanswer, lastlife, timeover]);

  async function createPoint() {
    const data = {
      score: score,
      owner: user,
      typedate: "date",
      typescore: "score",
    };
    var connected = await Auth.currentUserInfo();
    if (connected !== null) {
      const result = await API.graphql({
        query: createPointMutation,
        variables: { input: data },
      });
      localStorage.setItem("existscore", JSON.stringify(true));
      localStorage.setItem(
        "scoreid",
        JSON.stringify(result.data.createPoint.id)
      );
      setExistscore(true);
      console.log(result);
      return result;
    } else {
      alert("user not connected, couldnt create score");
      console.log("user not connected, couldnt create score");
    }
  }

  async function updatePoint() {
    const id = JSON.parse(localStorage.getItem("scoreid"));
    const data = {
      id: id,
      score: score,
      owner: user,
    };
    var connected = await Auth.currentUserInfo();
    if (connected !== null) {
      try {
        await API.graphql({
          query: updatePointMutation,
          variables: {
            input: data,
          },
        });
      } catch (error) {
        createPoint();
        console.log("put createpoint here ", error);
      }
      return result;
    } else {
      alert("user not connected, couldnt update score");
      console.log("user not connected, couldnt update score");
    }
  }

  const possibleAnwsers = answer.map((data, index) => {
    return (
      <StyledGameChildAnswer
        className="answer"
        onClick={
          !disabled
            ? (e) =>
                handleSubmit(
                  e,
                  result,
                  e.target.innerHTML,
                  e.target,
                  setScore,
                  score,
                  setFlag,
                  setResult,
                  setInput,
                  setAnswer,
                  setColor,
                  setDisplayed,
                  setOver,
                  setGoodanswer,
                  life,
                  lastlife,
                  arraycountries,
                  setArraycountries,
                  setDisabled,
                  setRightanswer,
                  setWronganswer,
                  setStartTimer
                )
            : undefined
        }
        key={index}
      >
        {data}
      </StyledGameChildAnswer>
    );
  });
  console.log("Render again");
  return (
    <StyledGameCont>
      <>
        <BtnlogGame onClick={() => startNewGameClick()}>
          {t("game.button")}
        </BtnlogGame>
        <StyledGameInfo>
          {logged && (
            <>
              <>
                <StyledBtnCountries onClick={toggleVisibility}>
                  <IoChevronDownCircleOutline
                    size={20}
                  ></IoChevronDownCircleOutline>
                </StyledBtnCountries>
                {ChoiceIsVisible ? (
                  <StyledList>
                    {Object.entries(choices).map(([key, value]) => {
                      return (
                        <label key={key}>
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={() => changeState(key, value)}
                          />
                          {key}
                        </label>
                      );
                    })}
                  </StyledList>
                ) : (
                  <></>
                )}
              </>

              <StyledBestScore>
                Your best score : {userbestscore}
              </StyledBestScore>
              <Timer
                setTimeover={setTimeover}
                life={life}
                setOver={setOver}
                seconds={seconds}
                setSeconds={setSeconds}
                startTimer={startTimer}
                setStartTimer={setStartTimer}
              />
              <Life heart={heart} life={life} />
            </>
          )}
        </StyledGameInfo>
        <StyledGameChildLeft>
          <Flag data={flag} />
        </StyledGameChildLeft>
        <StyledGameChild>{possibleAnwsers}</StyledGameChild>
      </>
    </StyledGameCont>
  );
}
