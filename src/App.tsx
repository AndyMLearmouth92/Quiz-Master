import "./App.css";
import StartScreen from "./StartScreen";
import Error from "./components/Error";
import QuestionAnswerBox from "./components/QuestionAnswerBox";
import Result from "./components/Result";
import QuestionReviewBox from "./components/QuestionReviewBox";
import { useQuiz } from "./contexts/QuizContext";

const App: React.FC = (): JSX.Element => {
  const { status } = useQuiz();
  return (
    <div>
      <div
        className="hero min-  h-screen"
        style={{ backgroundImage: "url(images/quizBackground.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content min-h-full min-w-full">
          <div className="max-w-xl"></div>
          {status === "selectNumOfQuestions" && <StartScreen />}
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
