import { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

// Shows the user their result from the quiz and gives them the option of reviewing their answers or restarting.
const Result: React.FC = () => {
  const [message, setMessage] = useState("");
  const { points, numQuestions, dispatch, userAnswers } = useQuiz();
  // Calculates the outcome of the quiz and provides the user with an emoji
  const percentage = (points / numQuestions) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😎";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  //Handles the high score functionality using local storage.
  useEffect(() => {
    const highscore = Number(localStorage.getItem("QuizMasterHighScore"));
    if (percentage > highscore) {
      localStorage.setItem("QuizMasterHighScore", `${percentage}`);
      setMessage(`Well done, you have a new high score of ${percentage}%!`);
    } else {
      setMessage(
        `Not a new high score on this occasion, your high score remains at ${highscore}%`
      );
    }
  }, [percentage]);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-5/6 bg-slate-600 md:size-4/5 xl:size-3/5">
      <div className="card-body flex">
        <h1 className="text-3xl md:text-5xl md:mb-6">
          <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
          {numQuestions} ({Math.ceil(percentage)}%)
        </h1>
        <div>
          <div>
            {userAnswers.map((_, i) => {
              return (
                <button
                  className="btn btn-neutral btn-primary text-md m-2 btn-answer md:text-xl w-1/6"
                  onClick={() =>
                    dispatch({
                      type: "selectAnswer",
                      payload: i,
                    })
                  }
                  style={
                    userAnswers[i].isCorrect === true
                      ? { backgroundColor: "#1e7216" }
                      : { backgroundColor: "#981e20" }
                  }
                >
                  Q{i + 1}
                </button>
              );
            })}
          </div>
          <h2 className="text-2xl m-2 md:text-3xl md:m-6">{message}</h2>
          <button
            className="btn btn-neutral btn-primary text-md m-2 btn-answer w-11/12 md:h-14 md:text-xl"
            onClick={() => dispatch({ type: "reviewAnswers" })}
          >
            Review Answers
          </button>
          <button
            className="btn btn-neutral btn-primary text-md m-2 btn-answer w-11/12 md:h-14 md:text-xl"
            onClick={() => dispatch({ type: "restart" })}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
