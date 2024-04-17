import { useQuiz } from "../contexts/QuizContext";

// Checks whether the user is undertaking the quiz and provides a slightly different progress bar when finished.
const ProgressBar: React.FC = () => {
  const { numQuestions, index, points, status } = useQuiz();
  const undertakingQuiz = status === "ready";
  return (
    <div className="w-10/12 m-auto">
      {undertakingQuiz ? (
        <progress max={numQuestions} value={index} className="progress" />
      ) : (
        <progress max={numQuestions} value={index + 1} className="progress" />
      )}
      <div className="flex justify-between">
        {
          <span className="text-2xl">
            Question {index + 1} of {numQuestions}
          </span>
        }
        <span className="text-2xl">{points} correct</span>
      </div>
    </div>
  );
};

export default ProgressBar;
