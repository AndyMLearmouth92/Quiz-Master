import QuestionNumSelectionButton from "./NumberOfQuestionsButton";

const NumOfQuestions: React.FC = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex bg-slate-600 mx-auto">
      <div className="card-body flex">
        <div className="mb-4">
          <h1 className="text-5xl mb-8">Welcome to Quiz Master</h1>
          <h2 className="text-3xl">
            How many questions would you like to answer?
          </h2>
        </div>
        <div className="justify-center">
          <div>
            <QuestionNumSelectionButton val={10} />
            <QuestionNumSelectionButton val={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumOfQuestions;
