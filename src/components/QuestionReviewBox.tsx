import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import Button from "./Button";

// The component which is delayed when the user is reviewing their answers.
const QuestionAnswerBox: React.FC = () => {
  const { currentQuestion, index, numQuestions, points, dispatch } = useQuiz();

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
            {index > 0 ? (
              <Button
                className="btn btn-neutral btn-primary m-2 btn-answer w-3/12 h-14 text-l"
                onClick={() => dispatch({ type: "previousAnswer" })}
              >
                <svg
                  className="w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Previous question
              </Button>
            ) : (
              <Button
                className="btn btn-neutral btn-primary m-2 btn-answer w-3/12 h-14 text-l"
                onClick={() =>
                  dispatch({ type: "finished", payload: String(points) })
                }
              >
                Results page
              </Button>
            )}
            {index > 0 && index + 2 <= numQuestions && (
              <Button
                className="btn btn-neutral btn-primary m-2 btn-answer w-3/12 h-14 text-l"
                onClick={() =>
                  dispatch({ type: "finished", payload: String(points) })
                }
              >
                Results page
              </Button>
            )}
            {index + 2 <= numQuestions ? (
              <Button
                className="btn btn-neutral btn-primary m-2 btn-answer w-3/12 h-14 text-l"
                onClick={() => dispatch({ type: "nextAnswer" })}
              >
                Next question
                <svg
                  className="w-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Button>
            ) : (
              <Button
                className="btn btn-neutral btn-primary m-2 btn-answer w-3/12 h-14 text-l"
                onClick={() =>
                  dispatch({ type: "finished", payload: String(points) })
                }
              >
                Results page
              </Button>
            )}
          </div>
        </div>
        <ProgressBar />
      </div>
    </div>
  );
};

export default QuestionAnswerBox;
