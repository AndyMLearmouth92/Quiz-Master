import { useQuiz } from "../contexts/QuizContext";

const ProgressBar: React.FC = () => {
  const { numQuestions, index, points, status } = useQuiz();
  const undertakingQuiz = status === "ready";
  return (
    <div className="w-10/12 m-auto">
      <progress
        max={numQuestions}
        value={undertakingQuiz ? index : index + 1}
        className="progress"
      />
      <div className="flex justify-between mb-3">
        <span className="md:text-2xl">
          Question {index + 1} of {numQuestions}
        </span>
        <span className="md:text-2xl">{points} correct</span>
      </div>
    </div>
  );
};

export default ProgressBar;
