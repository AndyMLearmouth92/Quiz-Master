import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

// Timer for the user when they are undertaking the quiz.
const Timer: React.FC = () => {
  const { dispatch, secondsRemaining } = useQuiz();
  const mins = Math.floor((secondsRemaining || 0) / 60);
  const seconds = (secondsRemaining || 0) % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max flex justify-center">
      <div className="flex flex-col">
        <span className="countdown font-mono text-1xl md:text-4xl">
          <span
            className="countdown font-mono text-1xl md:text-4xl"
            style={{ ["--value" as string]: mins }}
          ></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-1xl md:text-4xl">
          <span
            className="countdown font-mono text-1xl md:text-4xl"
            style={{ ["--value" as string]: seconds }}
          ></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Timer;
