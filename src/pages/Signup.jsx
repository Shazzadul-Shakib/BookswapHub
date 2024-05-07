import Divider from "../components/Shared/Divider/Divider";
import { allIconsData } from "../data/all-icons-data";
import logo from "../assets/logo.ico";

const Signup = () => {
  const { google, facebook } = allIconsData;
  return (
    <div className=" lg:w-[90%] overflow-auto py-10 px-4 h-full mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
      <section className="flex flex-col items-center ">
        <img
          className=" h-[100px] w-[100px] my-8 md:h-[200px] md:w-[200px] lg:-mt-16"
          src={logo}
          alt="Book Logo"
        />
        <h1 className=" text-2xl lg:text-5xl font-bold text-secondary text-center">
          Share your knowledge store <br /> to <br /> the world!
        </h1>
      </section>
      <section className=" border border-accent rounded-2xl flex justify-center items-center p-10 ">
        <div className=" w-[90%] mx-auto">
          <h1 className=" text-secondary text-2xl font-bold my-8">Create account</h1>
          {/* Input fileds */}
          <form>
            <input
              className="p-2 w-full mb-6 rounded"
              type="Text"
              placeholder="Username"
            />
            <input
              className="p-2 w-full mb-6 rounded"
              type="email"
              placeholder="Email"
            />
            <input
              className="p-2 w-full mb-6 rounded"
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="p-2 w-full mb-2 rounded bg-accent text-secondary font-bold"
            >
              Signup
            </button>
          </form>

          <div className="text-center my-2">
            <p className=" text-secondary text-sm" href="#">
              Already have an account? Login here
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
