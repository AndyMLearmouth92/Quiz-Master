import { useQuiz } from "../contexts/QuizContext";
export default function ProgressBar() {
  const { numQuestions, index, points } = useQuiz();
  return (
    <div className="w-10/12 m-auto">
      <progress max={numQuestions} value={index} className="progress" />
      <div className="flex justify-between">
        <span className="text-2xl">
          Question {index + 1} of {numQuestions}
        </span>
        <span className="text-2xl">{points} correct</span>
      </div>
    </div>
  );
}
