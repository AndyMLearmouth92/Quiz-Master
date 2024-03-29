import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import Question from "./Question";

const QuestionAnswerBox: React.FC = () => {
  const { currentQuestion } = useQuiz();
  console.log(currentQuestion);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-3/5 flex bg-slate-600">
      <div className="card-body flex">
        <Question />
        <div className="justify-center ">
          <div className="">
            {/* {currentQuestion?.answerOptions?.map((answerText) => {
              <Options>{answerText}</Options>;
            })} */}
            {currentQuestion &&
              currentQuestion.answerOptions.map((answer, index) => (
                <Options key={index}>{answer.answerText}</Options>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerBox;
