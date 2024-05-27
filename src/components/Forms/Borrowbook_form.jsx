import { useForm } from "react-hook-form";
import { allIconsData } from "../../data/all-icons-data";
import { useContext } from "react";
import { AuthContext } from "../../provider/authProviders";
import { useUpdateUserBorrowedBooksMutation } from "../../redux/api/users-api";

const Borrowbook_form = ({ bookInfo, close }) => {
  const { user } = useContext(AuthContext);
  const { cancel } = allIconsData;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const [ updateUserBorrowedBooks ] = useUpdateUserBorrowedBooksMutation();

  const onSubmit = async (data) => {
    try {
      data.bookId = bookInfo._id;
      data.pending = true;
      data.borrowed = false;
      await updateUserBorrowedBooks({email:user.email, data});
      reset();
      close();
    } catch (error) {
      console.error(error);
    }
  };

  // Watch the terms checkbox
  const isTermsChecked = watch("terms", false);

  return (
    <div className="relative bg-primary md:w-[600px] max-h-[90vh] overflow-y-auto custom-scrollbar p-10 rounded-lg">
      <header
        onClick={close}
        className="absolute top-2 right-3 my-2 text-2xl text-accent cursor-pointer"
      >
        {cancel}
      </header>
      <div className="w-1/3 mx-auto overflow-hidden">
        <img className="rounded" src={bookInfo.bookImage} alt="" />
      </div>
      <h2 className="text-secondary pt-2 font-semibold w-full text-center">
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

          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="mb-4 w-full">
              {/* Borrower contact number input */}
              <input
                type="text"
                placeholder="Enter your contact number"
                className="w-full px-3 py-2 rounded border border-secondary"
                {...register("contactNumber", { required: true })}
              />
              {errors.contactNumber && (
                <p className="text-accent text-xs">
                  Contact number is required
                </p>
              )}
            </div>

            <div className="mb-4 w-full">
              {/* Deadline select */}
              <select
                defaultValue=""
                className="w-full px-3 py-2 rounded border border-secondary focus:outline-none"
                {...register("deadline", {
                  required: "Deadline is required",
                  validate: (value) =>
                    value !== "" || "Please select a deadline",
                })}
              >
                <option value="" disabled>
                  Deadline
                </option>
                {[...Array(7)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} {i + 1 > 1 ? "Days" : "Day"}
                  </option>
                ))}
              </select>
              {errors.deadline && (
                <p className="text-accent text-xs">{errors.deadline.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="mb-4 w-full">
              {/* Borrower address input */}
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
              {/* City select */}
              <select
                defaultValue=""
                className="w-full px-3 py-2 rounded border border-secondary focus:outline-none"
                {...register("borrowerCity", {
                  required: "City is required",
                  validate: (value) => value !== "" || "Please select a city",
                })}
              >
                <option value="" disabled>
                  Select Your City
                </option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                <option value="city3">City 3</option>
                <option value="city4">City 4</option>
                <option value="city5">City 5</option>
                <option value="city6">City 6</option>
                <option value="city7">City 7</option>
              </select>
              {errors.borrowerCity && (
                <p className="text-accent text-xs">
                  {errors.borrowerCity.message}
                </p>
              )}
            </div>
          </div>

          {/* Terms and conditions checkbox */}
          <div className="flex items-center pb-4">
            <input
              type="checkbox"
              id="checkbox"
              className="form-checkbox h-4 w-4 text-tertiary"
              {...register("terms", { required: true })}
            />
            <label htmlFor="checkbox" className="ml-2 text-xs text-secondary">
              Agree with all terms & conditions to borrow the book
            </label>
            {errors.terms && (
              <p className="text-accent text-xs pl-4">
                You must agree to the terms
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className={`w-full px-3 py-2 rounded text-secondary font-bold ${
              isTermsChecked ? "bg-accent" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isTermsChecked}
          >
            Add Book
          </button>
        </form>
      </main>
    </div>
  );
};

export default Borrowbook_form;
