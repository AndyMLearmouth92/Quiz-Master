import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

// Shows the user their result from the quiz and gives them the option of reviewing their answers or restarting.
const Result: React.FC = () => {
  const { points, numQuestions, dispatch, userAnswers } = useQuiz();
  // Calculates the outcome of the quiz and provides the user with an emoji
  const percentage = (points / numQuestions) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  let message = "";
  // TODO: make this a use ref
  useEffect(() => {
    const highscore = localStorage.getItem("highscore");
    if (points > Number(highscore || 0)) {
      localStorage.setItem("highscore", `${points}`);
      message = "Well done, you got a new high score!";
    } else {
      message = `Your high score is ${highscore}`;
    }
  }, [points]);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-5/6 bg-slate-600 size-3/5">
      <div className="card-body flex">
        <h1 className="text-5xl mb-8">
          <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
          {numQuestions} ({Math.ceil(percentage)}%)
        </h1>
        <h2>{message}</h2>
        <div>
          <div>
            {userAnswers.map((_, i) => {
              return (
                <button
                  className="btn btn-neutral btn-primary m-2 btn-answer text-xl w-1/6"
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
          <button
            className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
            onClick={() => dispatch({ type: "reviewAnswers" })}
          >
            Review Answers
          </button>
          <button
            className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
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
