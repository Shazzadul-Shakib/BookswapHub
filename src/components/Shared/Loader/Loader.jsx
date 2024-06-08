const Loader = () => {
  return (
    <main className="inline-block relative">
      <div
        className="animate-spin rounded-full border-t-4 border-gray-200 border-opacity-25"
        style={{
          borderWidth: "6.4px",
          width: "100px",
          height: "100px",
          borderColor: "white transparent white transparent",
        }}
      ></div>
    </main>
  );
};

export default Loader;
