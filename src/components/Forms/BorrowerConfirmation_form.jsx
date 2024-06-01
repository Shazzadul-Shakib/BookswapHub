import React from "react";
import { allIconsData } from "../../data/all-icons-data";
import { useForm } from "react-hook-form";

const BorrowerConfirmation_form = ({ confirmationCode, close }) => {
  const { cancel } = allIconsData;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (parseInt(data.code) === confirmationCode) {
      console.log("Matched");
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

export default BorrowerConfirmation_form;
