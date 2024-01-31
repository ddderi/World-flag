import React, { useState } from "react";
import Game from "./Game";
import Records from "./Records";
import {
  StyledCont,
  StyledHeading,
  StyledCore,
  StyledFooter,
  StyledFooterDiv,
  StyledErrorBox,
  StyledErrorBoxChild,
  StyledFooterAnswer,
} from "./styles/GeneralElements";
import { ButtonError } from "../components/styles/ButtonElements";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Gameover from "./Gameover";
// import Gameswipe from './Gameswipe';
import Goodanswer from "./Goodanswer";
import Badanswer from "./Badanswer";
import Score from "./Score";
import Countrydetails from "./Countrydetails";
import Buttonscrolldown from "./Buttonscrolldown";

export default function Home({
  userScore,
  triggerscore,
  setTriggerscore,
  logged,
  setExistscore,
  existscore,
  setMessage,
  user,
  setPlayers,
  players,
  setUser,
  setLogged,
}) {
  const [color, setColor] = useState("");
  const [score, setScore] = useState(0);
  const [lastscore, setLastscore] = useState("");
  const [displayed, setDisplayed] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [result, setResult] = useState("");
  const [gameover, setGameover] = useState(false);
  const [rightanswer, setRightanswer] = useState([]);
  const [wronganswer, setWronganswer] = useState([]);
  const [countryname, setCountryname] = useState("");
  const [countryTrigger, setCountryTrigger] = useState(false);
  const [toggleAnswer, setToggleAnswer] = useState(false);

  const navigateTo = (location) => {
    navigate(`/${location}`);
  };

  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
  });

  const toggleUserAnswer = () => {
    setToggleAnswer(!toggleAnswer);
  };

  return (
    <>
      <StyledCont as={animated.div} style={fade}>
        <StyledHeading>{t("headerhome")}</StyledHeading>
        <StyledCore>
          <Game
            rightanswer={rightanswer}
            wronganswer={wronganswer}
            setRightanswer={setRightanswer}
            setWronganswer={setWronganswer}
            setGameover={setGameover}
            gameover={gameover}
            setTriggerscore={setTriggerscore}
            logged={logged}
            setExistscore={setExistscore}
            existscore={existscore}
            lastscore={lastscore}
            result={result}
            setResult={setResult}
            user={user}
            setDisplayed={setDisplayed}
            setMessage={setMessage}
            setScore={setScore}
            score={score}
            setColor={setColor}
            navigateTo={navigateTo}
            setUser={setUser}
            setLogged={setLogged}
            setLastscore={setLastscore}
          />
          <Records setPlayers={setPlayers} players={players} />
        </StyledCore>
        <StyledErrorBox display={!displayed ? "none" : "block"}>
          <StyledErrorBoxChild>
            <span>{t("errorspanstart")}</span>
            <ButtonError onClick={() => setDisplayed(false)}>X</ButtonError>
          </StyledErrorBoxChild>
        </StyledErrorBox>
        {/* <StyledFooter> */}
        {/* {!lastscore && (
              <StyledFooterDiv>
                <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoreleft")}{score} </span>
              </StyledFooterDiv>

            )}
            {lastscore > 0 && (
              <StyledFooterDiv>
                <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoreleft")}{score} </span>
                <span style={{ width: '50%', fontWeight: 'bold' }}>{t("scoremiddle")}{lastscore}</span>
              </StyledFooterDiv>

            )} */}
        {/* </StyledFooter> */}
        <StyledFooter>
          <Score score={score} />
          <Buttonscrolldown toggleUserAnswer={toggleUserAnswer} />
          {toggleAnswer && (
            <StyledFooterAnswer>
              <Countrydetails
                countryTrigger={countryTrigger}
                countryname={countryname}
              />
              <Badanswer
                countryTrigger={countryTrigger}
                setCountryTrigger={setCountryTrigger}
                setCountryname={setCountryname}
                wronganswer={wronganswer}
              />
              <Goodanswer
                countryTrigger={countryTrigger}
                setCountryTrigger={setCountryTrigger}
                setCountryname={setCountryname}
                rightanswer={rightanswer}
              />
            </StyledFooterAnswer>
          )}
        </StyledFooter>
      </StyledCont>
      <>
        <Gameover
          triggerscore={triggerscore}
          setTriggerscore={setTriggerscore}
          gameover={gameover}
          navigateTo={navigateTo}
          setGameover={setGameover}
          score={score}
        />
      </>
    </>
  );
}
