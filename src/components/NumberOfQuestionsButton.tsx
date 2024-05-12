import { useQuiz } from "../contexts/QuizContext";
import Button from "./Button";

interface QuestionNumSelectionButtonProps {
  val: number;
}

const QuestionNumSelectionButton: React.FC<QuestionNumSelectionButtonProps> = ({
  val,
}) => {
  const { dispatch } = useQuiz();
  return (
    <Button
      className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
      onClick={() => dispatch({ type: "setNumOfQuestions", payload: val })}
    >
      {val}
    </Button>
  );
};

export default QuestionNumSelectionButton;
