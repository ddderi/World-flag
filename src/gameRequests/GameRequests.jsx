import { flagCall } from "../requests/RequestUser";
import { countries, africa } from "../data/countries";

export const triggerAnswers = async (
  setResult,
  rightresult,
  setAnswer,
  result,
  valueToRemove,
  arraycountries,
  setArraycountries,
  setStartTimer,
  newarray
) => {
  let optionsAnswer = [];
  let tempArray = arraycountries;
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * tempArray.length);
    console.log("START", tempArray.length);

    const keys = Object.keys(tempArray[index]);
    keys.forEach((key) => {
      optionsAnswer.push(tempArray[index][key]);
    });

    // LIGNE 39 JUST AFTER
    tempArray = tempArray.filter((country, idx) => idx !== index);
    console.log("ITS REMOVED ?", tempArray);
    console.log("ITS REMOVED ?", tempArray.length);
  }

  //   return optionsAnswer;

  //   let tempArray = arraycountries;
  //   for (let i = 0; i < 3; i++) {
  //     const index = Math.floor(Math.random() * tempArray.length);
  //     console.log("START", tempArray.length);
  //     Object.keys(tempArray[index]).forEach(async (key) => {
  //       optionsAnswer.push(tempArray[index][key]);
  //       //let tempArray = arraycountries;
  //       tempArray = tempArray.filter((country) => country !== tempArray[index]);
  //       console.log("ITS REMOVED ?", tempArray.length);
  //       return optionsAnswer;
  //     });
  //   }

  //console.log(optionsAnswer);

  ////
  const index = Math.floor(Math.random() * 4);
  if (index === 0) {
    optionsAnswer.unshift(rightresult);
    setAnswer(optionsAnswer);
    setStartTimer(true);
  } else if (index === 1) {
    const newArraySliced = [
      ...optionsAnswer.slice(0, 1),
      rightresult,
      ...optionsAnswer.slice(index),
    ];
    setAnswer(newArraySliced);
    setStartTimer(true);
  } else if (index === 2) {
    const newArraySliced = [
      ...optionsAnswer.slice(0, 2),
      rightresult,
      ...optionsAnswer.slice(index),
    ];
    setAnswer(newArraySliced);
    setStartTimer(true);
  } else if (index === 3) {
    optionsAnswer.push(rightresult);
    setAnswer(optionsAnswer);
    setStartTimer(true);
  }
  setResult(rightresult);

  return optionsAnswer;
};

export const startGame = async (
  arraycountries,
  setArraycountries,
  setResult,
  setAnswer,
  setFlag,
  result,
  setDisplayed,
  setDisabled,
  setStartTimer
) => {
  try {
    setDisabled(false);
    setResult("");
    setAnswer([]);
    setDisplayed(false);
    const index = Math.floor(Math.random() * arraycountries.length);
    console.log(arraycountries);
    Object.keys(arraycountries[index]).forEach(async (key) => {
      let newarray = arraycountries.filter(
        (country) => country !== arraycountries[index]
      );
      setArraycountries(newarray);
      let valueToRemove = arraycountries[index];
      let rightresult = arraycountries[index][key];
      const resultFlag = await flagCall(`${key}`);
      setFlag(resultFlag.request.responseURL);
      //setStartTimer(true);
      triggerAnswers(
        setResult,
        rightresult,
        setAnswer,
        arraycountries[index][key],
        valueToRemove,
        arraycountries,
        setArraycountries,
        setStartTimer,
        newarray
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export const startGameParameters = async (
  arraycountries,
  setArraycountries,
  setResult,
  setAnswer,
  setFlag,
  result,
  setDisplayed,
  setDisabled,
  setStartTimer
) => {
  try {
    setDisabled(false);
    setResult("");
    setAnswer([]);
    setDisplayed(false);
    const index = Math.floor(Math.random() * arraycountries.length);

    Object.keys(arraycountries[index]).forEach(async (key) => {
      let newarray = arraycountries.filter(
        (country) => country !== arraycountries[index]
      );
      setArraycountries(newarray);
      let valueToRemove = arraycountries[index];
      let rightresult = arraycountries[index][key];
      const resultFlag = await flagCall(`${key}`);
      setFlag(resultFlag.request.responseURL);
      //setStartTimer(true);
      triggerAnswers(
        setResult,
        rightresult,
        setAnswer,
        arraycountries[index][key],
        valueToRemove,
        arraycountries,
        setArraycountries,
        setStartTimer
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export const endOfGame = (
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
) => {
  if (score > localStorage.getItem("userscore")) {
    updatePoint(score);
    setTriggerscore(true);
    localStorage.setItem("userscore", JSON.stringify(score));
  }

  if (score > lastscore) {
    setLastscore(score);
  }
  setArraycountries("");
  setResult("");
  setInput("");
};

export const handleSubmit = (
  e,
  result,
  input,
  etarget,
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
) => {
  e.preventDefault();
  setDisabled(true);
  if (result === input) {
    setScore(score + 1);
    setColor(true);
    // console.log(etarget.style.backgroundColor)
    etarget.style.backgroundColor = "green";

    setGoodanswer(true);
    setTimeout(() => {
      etarget.style.backgroundColor = "";
      startGame(
        arraycountries,
        setArraycountries,
        setResult,
        setAnswer,
        setFlag,
        result,
        setDisplayed,
        setDisabled,
        setStartTimer
      );
    }, 1000);
  } else if (!result || result === "") {
    setDisplayed(true);
  } else if (result !== input) {
    etarget.style.backgroundColor = "red";
    const mydiv = document.getElementsByClassName("answer");
    for (let i = 0; i < mydiv.length; i++) {
      if (mydiv[i].innerHTML === result) {
        mydiv[i].style.backgroundColor = "green";
      }
    }
    setColor(false);
    setOver(true);
    if (life > 0 && !lastlife) {
      setTimeout(() => {
        etarget.style.backgroundColor = "";
        startGame(
          arraycountries,
          setArraycountries,
          setResult,
          setAnswer,
          setFlag,
          result,
          setDisplayed,
          setDisabled,
          setStartTimer
        );
      }, 1000);
    }
  } else {
    // setMessageFooter(`A problem occured. couldn't upload your new score ...`)
    // setFlag(imglost)
    // setScore(0)
    // setResult('')
  }
  // setInput('')
};
