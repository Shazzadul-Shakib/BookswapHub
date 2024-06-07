import React from "react";
import { allIconsData } from "../../data/all-icons-data";
import { useForm } from "react-hook-form";
import { useUpdateUserBorrowedConfirmationMutation } from "../../redux/api/users-api";
import { toast } from "react-toastify";

const BorrowerConfirmationForm = ({ bookInfo, close }) => {
  const { cancel } = allIconsData;
  const [updateUserBorrowedConfirmation] =
    useUpdateUserBorrowedConfirmationMutation();
  const borrowerUserId = bookInfo?.userId;
  const borrowedBookId = bookInfo?.bookId._id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (parseInt(data.code) === bookInfo?.confirmationCode) {
      await updateUserBorrowedConfirmation({ borrowerUserId, borrowedBookId });
      toast.success("Book picked up successfully");
      reset();
      close();
    }else{
      toast.warning("Enter correct code!")
    }
  };

  return (
    <main className="relative bg-primary md:w-[400px] max-h-[90vh] overflow-y-auto custom-scrollbar p-10 rounded-lg">
      <header
        onClick={close}
        className="absolute top-2 right-3 my-2 text-2xl text-accent cursor-pointer"
      >
        {cancel}
      </header>
      <section className="my-5 mx-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            {/* Confirmation code input */}
            <input
              type="number"
              placeholder="Enter the code"
              className="w-full px-3 py-2 rounded border border-secondary"
              {...register("code", { required: true })}
            />
            {errors.code && (
              <p className="text-accent text-xs">Code is required</p>
            )}
          </div>

          <button
            className=" w-full px-3 py-2 rounded bg-accent text-secondary font-semibold"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </section>
    </main>
  );
};

export default BorrowerConfirmationForm;
