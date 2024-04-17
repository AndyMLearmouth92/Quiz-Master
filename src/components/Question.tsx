import { useQuiz } from "../contexts/QuizContext";

const Question: React.FC = () => {
  const { currentQuestion } = useQuiz();
  return (
    <div className="mb-4">
      <h1 className="text-4xl mb-2">{currentQuestion?.questionText}</h1>
    </div>
  );
};

export default Question;
