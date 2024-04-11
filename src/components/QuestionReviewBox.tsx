import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

const QuestionAnswerBox: React.FC = () => {
  const { currentQuestion } = useQuiz();

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex bg-slate-600 size-3/5">
      <div className="card-body flex">
        <Question />
        <div className="justify-center">
          <div className="mb-6">
            {currentQuestion &&
              currentQuestion.answerOptions.map((answerOption, index) => (
                <Options key={index} answerOption={answerOption} />
              ))}
          </div>
          <div className="flex justify-around">
            <PreviousButton />
            <NextButton />
          </div>
        </div>

        <ProgressBar />
      </div>
    </div>
  );
};

export default QuestionAnswerBox;
