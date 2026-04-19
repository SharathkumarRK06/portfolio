const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <h1 className="text-2xl font-bold animate-pulse">
        Loading...
      </h1>
    </div>
  );
};

export default Loader;