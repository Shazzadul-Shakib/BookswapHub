
const CustomToast = ({ code, closeToast }) => {
  const handleOkClick = () => {
    closeToast();
  };

  return (
    <div>
      <h1 className=" text-sm">
        Confirmation code: <span className=" font-bold">{code}</span>{" "}
      </h1>
      <button
        className="w-full mt-3 flex justify-center items-center text-secondary bg-accent text-xs font-semibold px-2 py-1 rounded"
        onClick={handleOkClick}
      >
        OK
      </button>
    </div>
  );
};

export default CustomToast;
