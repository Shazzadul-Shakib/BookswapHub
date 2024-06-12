const LoaderModalBody = ({ modal }) => {
  return (
    <main className=" fixed h-[100dvh] inset-0 z-10 bg-primary overflow-hidden flex justify-center items-center ">
      <div>{modal}</div>
    </main>
  );
};

export default LoaderModalBody;
