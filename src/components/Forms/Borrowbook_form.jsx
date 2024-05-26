import { useForm } from "react-hook-form";
import { allIconsData } from "../../data/all-icons-data";
import { useContext } from "react";
import { AuthContext } from "../../provider/authProviders";

const Borrowbook_form = ({ bookInfo, close }) => {
  const { user } = useContext(AuthContext);
  const { cancel } = allIconsData;
  console.log(bookInfo);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      //   console.log(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative bg-primary md:w-[600px] max-h-[90vh] overflow-y-auto custom-scrollbar p-10 rounded-lg">
      <header
        onClick={close}
        className="absolute top-2 right-3 my-2 text-2xl text-accent cursor-pointer"
      >
        {cancel}
      </header>
      <div className=" w-1/3 mx-auto overflow-hidden">
        <img className=" rounded" src={bookInfo.bookImage} alt="" />
      </div>
      <h2 className=" text-secondary pt-2 font-semibold w-full text-center">
        {bookInfo.bookName}
      </h2>
      <main className="my-5 mx-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            {/* Borrower name input */}
            <input
              type="text"
              value={user.displayName}
              className="w-full px-3 py-2 rounded border border-secondary"
              {...register("borrowerName", { required: true })}
            />
            {errors.borrowerName && (
              <p className="text-accent text-xs">Name is required</p>
            )}
          </div>

          <div className="mb-4">
            {/* Borrower email input */}
            <input
              type="email"
              value={user.email}
              className="w-full px-3 py-2 rounded border border-secondary"
              {...register("borrowerEmail", { required: true })}
            />
            {errors.borrowerEmail && (
              <p className="text-accent text-xs">Email is required</p>
            )}
          </div>
          <div className=" flex flex-col md:flex-row md:gap-4">
            <div className="mb-4 w-full">
              {/* Borrower address' input */}
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full px-3 py-2 rounded border border-secondary"
                {...register("borrowerAddress", { required: true })}
              />
              {errors.borrowerAddress && (
                <p className="text-accent text-xs">Address is required</p>
              )}
            </div>
            <div className="mb-4 w-full">
              {/* Borrower contact number input */}
              <input
                type="text"
                placeholder="Enter your contact number"
                className="w-full px-3 py-2 rounded border border-secondary"
                {...register("page", { required: true })}
              />
              {errors.page && (
                <p className="text-accent text-xs">
                  Book's page number is required
                </p>
              )}
            </div>
          </div>

          {/* Terms and conditions check box */}
          <div className=" flex items-center pb-4">
            <input
              type="checkbox"
              id="checkbox"
              className="form-checkbox h-4 w-4 text-tertiary"
              //   checked={checked}
              //   onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox" className="ml-2 text-xs text-secondary">
              Agree with all terms & conditions to borrow the book
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full px-3 py-2 bg-accent rounded text-secondary font-bold"
          >
            Add Book
          </button>
        </form>
      </main>
    </div>
  );
};

export default Borrowbook_form;
