import { useContext } from "react";
import logo from "../../../assets/logo.ico";
import { allIconsData } from "../../../data/all-icons-data";
import { AuthContext } from "../../../provider/authProviders";

const Sidebar = () => {
  const { home, add, bookmark, profile } = allIconsData;
  const {logout}=useContext(AuthContext);

  return (
    <>
      <div className=" flex flex-col justify-between py-8 bg-tertiary h-[95dvh] w-[70px] rounded-xl">
        <section>
          {/* Logo  */}
          <div>
            <img className="h-10 w-16" src={logo} alt="logo" />
          </div>
          {/* Icons */}
          <ul className=" my-10 flex flex-col items-center gap-6">
            <li className=" text-xl text-secondary">{home}</li>
            <li className=" text-xl text-icon">{add}</li>
            <li className=" text-xl text-icon">{bookmark}</li>
          </ul>
        </section>
        {/* Profile section */}
        <div>
          <div className="flex justify-center text-accent text-3xl">
            {profile}
          </div>
          <div className="flex justify-center mt-3">
            <button onClick={()=>logout()} className=" text-secondary font-semibold text-xs rounded-lg px-2 py-1 border border-accent">Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
