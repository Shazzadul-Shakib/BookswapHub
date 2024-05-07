
const Input = ({ input_style, input_type, input_placeholder,input_value }) => {
  return (
    <>
      <input
        className={input_style}
        type={input_type}
        placeholder={input_placeholder}
        value={input_value}
      />
    </>
  );
};

export default Input;