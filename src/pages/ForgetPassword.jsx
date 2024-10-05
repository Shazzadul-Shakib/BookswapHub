import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/authProviders";
import { toast } from "react-toastify";
import logo from "../assets/logo.ico";
import { Helmet } from "react-helmet-async";

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { resetPassword } = useContext(AuthContext);

  // Handle submit of reset password
  const onSubmit = async (data) => {
    await resetPassword(data.email).then(() => {
      reset();
      toast.success("Password reset email sent to your email");
    });
  };

  return (
    <mai className="md:w-[90%] overflow-auto py-10 px-4 h-full mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
      {/* Helmet title provider */}
      <Helmet>
        <title>Bookswap Hub | Forgot Password</title>
      </Helmet>

      {/* Main section starts from here */}
      <section className="md:w-1/2 flex flex-col items-center ">
        <img
          className=" h-[100px] w-[100px] my-8 md:h-[200px] md:w-[200px] lg:-mt-16"
          src={logo}
          alt="Book Logo"
        />
        <h1 className=" text-2xl lg:text-4xl font-bold text-secondary text-center">
          Share your knowledge store <br /> to <br /> the world!
        </h1>
      </section>
      <section className="w-full md:w-1/2 border border-accent rounded-2xl flex justify-center items-center p-10 ">
        <div className=" w-full  md:w-[90%] mx-auto">
          <h1 className=" text-secondary text-2xl font-bold my-8">
            Forgot Password?
          </h1>
          {/* Input fileds */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-2 w-full my-3 rounded"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                })}
              />
              {errors?.email?.type === "required" && (
                <div className="w-full text-xs text-accent">
                  <span>This field is required*</span>
                </div>
              )}

              <input
                type="submit"
                value="Reset Password"
                className="p-2 cursor-pointer w-full my-2 rounded bg-accent text-secondary font-bold"
              />
            </form>
          </div>

          <div className="text-center">
            <p className=" text-secondary text-sm">
              <Link to="/login">Return to login page</Link>
            </p>
          </div>
        </div>
      </section>
    </mai>
  );
};

export default ForgetPassword;
