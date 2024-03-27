const QuestionAnswerBox: React.FC = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl h-3/5 flex bg-slate-600">
      <div className="card-body flex">
        <h1>Question</h1>
        <div className="justify-center ">
          <div className="">
            <h1>Answer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswerBox;
