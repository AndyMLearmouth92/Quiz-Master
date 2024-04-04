import { useQuiz } from "../contexts/QuizContext";

export default function Result() {
  const { points, numQuestions } = useQuiz();
  const percentage = (points / numQuestions) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  const { dispatch } = useQuiz();
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-5/6 bg-slate-600">
      <div className="card-body flex">
        <h1 className="text-5xl mb-8">
          <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
          {numQuestions} ({Math.ceil(percentage)}%)
        </h1>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-slate-700 min-w-[40%]">
            <h3 className="font-bold text-lg">Outcome</h3>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-neutral btn-primary m-2 btn-answer text-xl">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
        <button
          className="btn btn-neutral btn-primary m-2 btn-answer w-11/12 h-14 text-xl"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
