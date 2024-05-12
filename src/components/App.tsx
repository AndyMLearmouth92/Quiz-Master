import StartScreen from "./StartScreen";
import Loader from "./Loader";
import Error from "./Error";
import QuestionAnswerBox from "./QuestionAnswerBox";
import Result from "./Result";
import QuestionReviewBox from "./QuestionReviewBox";
import { useQuiz } from "../contexts/QuizContext";

const App: React.FC = () => {
  const { status } = useQuiz();
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(images/quizBackground.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content min-h-full min-w-full">
          {status === "selectNumOfQuestions" && <StartScreen />}
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <QuestionAnswerBox />}
          {status === "finished" && <Result />}
          {status === "reviewAnswers" && <QuestionReviewBox />}
        </div>
      </div>
    </div>
  );
};

export default App;
