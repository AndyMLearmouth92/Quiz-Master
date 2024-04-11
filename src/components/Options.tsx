import { useQuiz } from "../contexts/QuizContext";

interface OptionsProps {
  answerOption: {
    answerText: string;
    isCorrect: boolean;
  };
}

export default function Options({ answerOption }: OptionsProps) {
  const { dispatch, status } = useQuiz();
  const clickable = status === "ready";
  // const hasAnswered = answer !== null;
  return (
    <div>
      {clickable ? (
        <button
          className="btn btn-neutral btn-primary m-2 btn-answer w-10/12 h-14 text-xl"
          onClick={() => dispatch({ type: "newAnswer", payload: answerOption })}
        >
          {answerOption.answerText}
        </button>
      ) : (
        <button className="btn btn-neutral btn-primary m-2 btn-answer w-10/12 h-14 text-xl">
          {answerOption.answerText}
        </button>
      )}
    </div>
  );
}
