import { useQuiz } from "../contexts/QuizContext";

interface OptionsProps {
  answerOption: {
    answerText: string;
    isCorrect: boolean;
  };
}

export default function Options({ answerOption }: OptionsProps) {
  const { dispatch } = useQuiz();
  // const hasAnswered = answer !== null;
  return (
    <button
      className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
      onClick={() =>
        dispatch({ type: "newAnswer", payload: answerOption.isCorrect })
      }
    >
      {answerOption.answerText}
    </button>
  );
}
