import { useEffect, useReducer } from "react";
import "./App.css";
import StartScreen from "./StartScreen";
import QuestionAnswerBox from "./components/QuestionAnswerBox";

interface Question {
  answerOptions: {
    answerText: string;
    isCorrect: boolean;
  }[];
  id: number;
  questionText: string;
}

interface State {
  questions: Question[];
  questionCount: null | number;
  status: string;
}

const initialState: State = {
  questions: [],
  questionCount: null,
  status: "SelectNumOfQuestions",
};

type Action =
  | { type: "setNumOfQuestions"; payload: number }
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setNumOfQuestions":
      return {
        ...state,
        questionCount: action.payload,
      };
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("Action unknown");
  }
}

const App: React.FC = (): JSX.Element => {
  const [{ questions, questionCount, status }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;

  useEffect(
    function () {
      if (questionCount === null) {
        return;
      }
      fetch(`https://quiz-master-data.cyclic.cloud/questions/${questionCount}`)
        .then((res) => res.json())
        .then((data) => dispatch({ type: "dataReceived", payload: data }))
        .catch((err) => dispatch({ type: "dataFailed" }));
    },
    [questionCount]
  );

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(images/quizBackground.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content min-h-full min-w-full">
          <div className="max-w-xl"></div>
          {status === "SelectNumOfQuestions" && (
            <StartScreen dispatch={dispatch} />
          )}
          {status === "ready" && <QuestionAnswerBox />}
        </div>
      </div>
    </div>
  );
};

export default App;
