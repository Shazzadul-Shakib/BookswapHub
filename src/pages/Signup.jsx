import logo from "../assets/logo.ico";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../provider/authProviders";
import SocialLogin from "../components/SocialLogin/socialLogin";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const { createUser, updateUserName, verifyUserEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await createUser(data.email, data.password);
    try {
      if (result.user) {
        reset();
        updateUserName(data.userName);
        verifyUserEmail();
        toast.info("Check and verify your email");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main className="md:w-[90%] overflow-auto py-10 px-4 h-full mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
      {/* Helmet title provider */}
      <Helmet>
        <title>Bookswap Hub | Signup</title>
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
          <h1 className=" text-secondary text-2xl font-bold my-5">
            Create account
          </h1>
          {/* Input fileds */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-2 w-full my-3 rounded"
                type="text"
                placeholder="Username"
                {...register("userName", {
                  required: true,
                })}
              />
              {errors?.name?.type === "required" && (
                <div className="w-full text-xs text-accent">
                  <span>This field is required*</span>
                </div>
              )}
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
                className="p-2 w-full my-3 rounded"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                })}
              />
              {errors?.password?.type === "required" && (
                <div className="w-full text-xs text-accent">
                  <span>This field is required*</span>
                </div>
              )}
              <input
                type="submit"
                value="Signup"
                className="p-2 cursor-pointer w-full my-3 rounded bg-accent text-secondary font-bold"
              />
            </form>
          </div>

          <div className="text-center my-2">
            <p className=" text-secondary text-sm" href="#">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>

          {/* Divider & social login */}
          <SocialLogin />
          
        </div>
      </section>
    </main>
  );
};

export default Signup;
