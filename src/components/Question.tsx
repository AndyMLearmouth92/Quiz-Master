import { useQuiz } from "../contexts/QuizContext";

const Question: React.FC = () => {
  const { currentQuestion } = useQuiz();
  return (
    <div className="lg:mb-4">
      <h1 className="text-3xl lg:text-4xl lg:mb-2">
        {currentQuestion?.questionText}
      </h1>
    </div>
  );
};

export default Question;
