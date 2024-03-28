import { useQuiz } from "../contexts/QuizContext";
import Question from "./Question";

const QuestionAnswerBox: React.FC = () => {
  const { currentQuestion } = useQuiz();

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-3/5 flex bg-slate-600">
      <div className="card-body flex">
        <Question currentQuestion={currentQuestion} />
        <div className="justify-center ">
          <div className="">
            <h1>Answer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerBox;
