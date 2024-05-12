const Error: React.FC = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex bg-slate-600 size-3/5">
      <div className="card-body flex">
        <h1 className="text-3xl">There was an error fetching the questions.</h1>
        <h2 className="text-2xl">
          Please check your network connection and refresh the page.
        </h2>
      </div>
    </div>
  );
};

export default Error;
