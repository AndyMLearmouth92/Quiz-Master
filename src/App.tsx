import { useEffect, useReducer } from "react";
import "./App.css";
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],
};

function reducer(state, action) {
  switch (action.type) {
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

function App() {
  const [{ questions }, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  console.log(numQuestions);
  console.log(questions);

  useEffect(function () {
    // fetch(`https://quiz-master-data.cyclic.cloud/questions/${apiRequest}`)
    fetch(`https://quiz-master-data.cyclic.cloud/questions/10`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(images/quizBackground.png)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content min-h-full min-w-full">
          <div className="max-w-xl"></div>
          <StartScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
