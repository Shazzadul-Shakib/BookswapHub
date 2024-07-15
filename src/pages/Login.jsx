import logo from "../assets/logo.ico";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react"; // Add useState import
import { AuthContext } from "../provider/authProviders";
import SocialLogin from "../components/SocialLogin/socialLogin";
import {
  useAddUserMutation,
  useLoginUserMutation,
} from "../redux/api/users-api";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import Loader from "../components/Shared/Loader/Loader";
import LoaderModalBody from "../components/Shared/ModalBody/LoaderModalBody";

const Login = () => {
  const navigate = useNavigate();
  const { loginUserWithEmailPassword } = useContext(AuthContext);
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [addUser] = useAddUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Add state to control page loading
  const [showLoader, setShowLoader] = useState(false);

  // Handle submit of login functionality
  const onSubmit = async (data) => {
    setShowLoader(true); // Set showLoader to true when submitting
    try {
      const result = await loginUserWithEmailPassword(
        data.email,
        data.password
      );
      if (result.user.emailVerified) {
        const userCredentials = { userEmail: result.user.email };
        await loginUser(userCredentials);
        reset();
        toast.success("Logged in successfully");
        navigate("/");
        const userName = result.user.displayName;
        const userEmail = result.user.email;
        const userImage = result.user.photoURL || "";
        const User = { userName, userEmail, userImage };
        await addUser(User);
      } else {
        toast.warning("Verify your email first");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setShowLoader(false); // Set showLoader back to false after login attempt
    }
  };

  if (isLoading || showLoader) {
    return <LoaderModalBody modal={<Loader />} />;
  }

  return (
    <main className="md:w-[90%] overflow-auto py-10 px-4 h-full mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
      {/* Helmet title provider */}
      <Helmet>
        <title>Bookswap Hub | Login</title>
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
          <h1 className=" text-secondary text-2xl font-bold my-8">Login</h1>
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
              <div className=" flex justify-end">
                <Link className=" text-secondary text-xs" to="/forgetpassword">
                  Forgot password?
                </Link>
              </div>
              <input
                type="submit"
                value="Login"
                className="p-2 cursor-pointer w-full my-2 rounded bg-accent text-secondary font-bold"
              />
            </form>
          </div>

          <div className="text-center">
            <p className=" text-secondary text-sm">
              New here? <Link to="/signup">create account</Link>
            </p>
          </div>

          {/* Divider & social login  */}
          <SocialLogin />
        </div>
      </section>
    </main>
  );
};

export default Login;
