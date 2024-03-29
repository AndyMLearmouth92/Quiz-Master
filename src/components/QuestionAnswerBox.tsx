import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import Question from "./Question";

const QuestionAnswerBox: React.FC = () => {
  const { currentQuestion } = useQuiz();

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-3/5 flex bg-slate-600">
      <div className="card-body flex">
        <Question />
        <div className="justify-center ">
          <div className="">
            {currentQuestion &&
              currentQuestion.answerOptions.map((answerOption, index) => (
                <Options key={index} answerOption={answerOption} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerBox;
