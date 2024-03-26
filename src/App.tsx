import { useEffect } from "react";
import "./App.css";
import StartScreen from "./StartScreen";

function App() {
  useEffect(function () {
    // fetch(`https://quiz-master-data.cyclic.cloud/questions/${apiRequest}`)
    fetch(`https://quiz-master-data.cyclic.cloud/questions/10`)
      .then((res) => res.json())
      .then((data) => console.log(data));
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
