import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  Dispatch,
} from "react";

interface State {
  questions: Question[];
  questionCount: null | number;
  status: string;
  index: number;
  points: number;
}

const initialState: State = {
  questions: [],
  questionCount: null,
  status: "SelectNumOfQuestions",
  index: 0,
  points: 0,
};

type Action =
  | { type: "setNumOfQuestions"; payload: number }
  | { type: "dataReceived"; payload: Question[] }
  | { type: "dataFailed" }
  | { type: "newAnswer"; payload: boolean }
  | { type: "finish" }
  | { type: "restart" };

type QuizDispatch = Dispatch<Action>;

const QuizContext = createContext<{
  questions: Question[];
  status: string;
  index: number;
  points: number;
  numQuestions: number;
  currentQuestion: Question | null;
  dispatch: QuizDispatch;
}>({
  ...initialState,
  numQuestions: 0,
  currentQuestion: null,
  dispatch: () => {},
});
interface Question {
  answerOptions: {
    answerText: string;
    isCorrect: boolean;
  }[];
  id: number;
  questionText: string;
}

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
    case "newAnswer":
      return {
        ...state,
        points: action.payload ? state.points + 1 : state.points,
        index:
          state.questions.length === state.index + 1
            ? state.index
            : state.index + 1,
        status:
          state.questions.length === state.index + 1
            ? "finished"
            : state.status,
      };
    case "restart":
      return initialState;
    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children }) {
  const [{ questions, questionCount, status, index, points }, dispatch] =
    useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const currentQuestion = questions[index];

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
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        numQuestions,
        currentQuestion,
        dispatch,
        points,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { QuizProvider, useQuiz };
