const Loader: React.FC = () => {
  // Renders a loading component when the data is being fetched from the API.
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl flex bg-slate-600 size-3/5">
      <div className="card-body flex">
        <h1 className="text-3xl">
          Loading...<span className="loading loading-spinner loading-lg"></span>
        </h1>
      </div>
    </div>
  );
};

export default Loader;
