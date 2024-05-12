import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

interface OptionsProps {
  answerOption: {
    answerText: string;
    isCorrect: boolean;
  };
}

const Options = ({ answerOption }: OptionsProps) => {
  const { dispatch, status, userAnswers, index } = useQuiz();
  // Colour codes the quiz options but only if the user has completed the quiz.
  // Green for the correct answer, red for the user's incorrect guess and grey for the rest of the buttons.
  const undertakingQuiz = status === "ready";
  let backgroundColor = "";

  if (
    (userAnswers[index]?.isCorrect &&
      answerOption.answerText === userAnswers[index]?.answerText) ||
    answerOption.isCorrect
  ) {
    backgroundColor = "#1e7216";
  } else if (answerOption.answerText === userAnswers[index]?.answerText) {
    backgroundColor = "#981e20";
  }
  return (
    <div>
      {undertakingQuiz ? (
        <Button
          className="btn btn-neutral btn-primary btn-answer text-md w-11/12 md:w-10/12 md:h-14 md:text-xl m-2"
          onClick={() => dispatch({ type: "newAnswer", payload: answerOption })}
        >
          {answerOption.answerText}
        </Button>
      ) : (
        <Button
          style={{
            backgroundColor,
          }}
          className="btn btn-neutral btn-primary btn-answer m-2 text-md w-10/12 md:h-14 md:text-xl"
        >
          {answerOption.answerText}
        </Button>
      )}
    </div>
  );
};

export default Options;
