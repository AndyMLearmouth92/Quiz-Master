import { useQuiz } from "../contexts/QuizContext";
export default function Question() {
  const { currentQuestion, numQuestions, index } = useQuiz();
  return (
    <div className="mb-4">
      <h1 className="text-5xl mb-8">
        Question {index + 1} of {numQuestions}
      </h1>
      <h2 className="text-3xl">{currentQuestion?.questionText}</h2>
    </div>
  );
}
