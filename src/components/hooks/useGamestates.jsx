import { endOfGame } from "../../gameRequests/GameRequests";

export const useGameState = () => {
  const [life, setLife] = useState(3);
  const [startTimer, setStartTimer] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const [over, setOver] = useState("");
  // ... other states

  const gameEnded = useCallback(() => {
    setLife(3);
    // ... reset other states
  }, []);

  // ... other logic

  return { life, gameEnded /* ... other state and setters */ };
};
