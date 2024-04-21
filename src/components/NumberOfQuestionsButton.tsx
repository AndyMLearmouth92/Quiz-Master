import { useQuiz } from "../contexts/QuizContext";

interface QuestionNumSelectionButtonProps {
  // dispatch: React.Dispatch<{ type: string; payload: number }>;
  val: number;
}

const QuestionNumSelectionButton: React.FC<QuestionNumSelectionButtonProps> = ({
  val,
}) => {
  const { dispatch } = useQuiz();
  return (
    <button
      className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
      onClick={() => dispatch({ type: "setNumOfQuestions", payload: val })}
    >
      {val}
    </button>
  );
};

export default QuestionNumSelectionButton;
