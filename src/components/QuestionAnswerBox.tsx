import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

const QuestionAnswerBox: React.FC = () => {
  const { currentQuestion } = useQuiz();
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex bg-slate-600 min-w-80 max-h-screen md:size-4/5 xl:size-3/5">
      <div className="card-body flex">
        <Question />
        <div className="justify-center">
          <div className="md:mb-6">
            {currentQuestion?.answerOptions.map((answerOption) => (
              <Options
                key={answerOption.answerText}
                answerOption={answerOption}
              />
            ))}
          </div>
          <ProgressBar />
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerBox;
