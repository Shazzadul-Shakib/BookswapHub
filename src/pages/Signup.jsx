import Divider from "../components/Shared/Divider/Divider";
import { allIconsData } from "../data/all-icons-data";
import logo from "../assets/logo.ico";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { google, facebook } = allIconsData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="md:w-[90%] overflow-auto py-10 px-4 h-full mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
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
                {...register("name", {
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
                className="p-2 w-full my-3 rounded bg-accent text-secondary font-bold"
              />
            </form>
          </div>

          <div className="text-center my-2">
            <p className=" text-secondary text-sm" href="#">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
          {/* Divider */}
          <Divider />
          {/* Social Icons */}
          <div className=" flex justify-center items-center gap-5">
            <div className="text-2xl text-secondary">{google}</div>
            <div className="text-2xl text-secondary">{facebook}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
