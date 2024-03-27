import QuestionNumSelectionButton from "./NumberOfQuestionsButton";

interface NumOfQuestionsProps {
  dispatch: React.Dispatch<{ type: string; payload: number }>;
}

const NumOfQuestions: React.FC<NumOfQuestionsProps> = ({ dispatch }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-3/5 flex bg-slate-600">
      <div className="card-body flex">
        <div className="mb-4">
          <h1 className="text-5xl mb-8">Welcome to Quiz Master </h1>
          <h2 className="text-3xl">How many questions would you like to do?</h2>
        </div>
        <div className="justify-center">
          <div className="">
            <QuestionNumSelectionButton dispatch={dispatch} val={10} />
            <QuestionNumSelectionButton dispatch={dispatch} val={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumOfQuestions;
