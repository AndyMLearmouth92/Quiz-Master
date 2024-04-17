import { useQuiz } from "../contexts/QuizContext";

interface OptionsProps {
  answerOption: {
    answerText: string;
    isCorrect: boolean;
  };
}

const Options = ({ answerOption }: OptionsProps) => {
  const { dispatch, status, userAnswers, index } = useQuiz();
  // Colour codes the quiz options but only if the user is not undertaking the quiz. Green for the correct answer, red for the user's incorrect guess and grey for the rest of the buttons.
  const undertakingQuiz = status === "ready";
  let backgroundColor = "";
  if (
    userAnswers[index] &&
    ((userAnswers[index].isCorrect &&
      answerOption.answerText === userAnswers[index].answerText) ||
      answerOption.isCorrect)
  ) {
    backgroundColor = "#1e7216";
  } else if (
    userAnswers[index] &&
    answerOption.answerText === userAnswers[index].answerText
  ) {
    backgroundColor = "#981e20";
  }
  return (
    <div>
      {undertakingQuiz ? (
        <button
          className="btn btn-neutral btn-primary m-2 btn-answer w-10/12 h-14 text-xl"
          onClick={() => dispatch({ type: "newAnswer", payload: answerOption })}
        >
          {answerOption.answerText}
        </button>
      ) : (
        <button
          style={{
            backgroundColor,
          }}
          className="btn btn-neutral btn-primary m-2 btn-answer w-10/12 h-14 text-xl"
        >
          {answerOption.answerText}
        </button>
      )}
    </div>
  );
};

export default Options;
