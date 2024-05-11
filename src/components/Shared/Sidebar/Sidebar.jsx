import { useContext } from "react";
import logo from "../../../assets/logo.ico";
import { allIconsData } from "../../../data/all-icons-data";
import { AuthContext } from "../../../provider/authProviders";
import { Link } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";

const Sidebar = () => {
  const { home, add, bookmark, profile } = allIconsData;
  const { logout } = useContext(AuthContext);

  return (
    <>
      <div className=" flex flex-col justify-between py-8 bg-tertiary h-[95dvh] w-[70px] rounded-xl relative">
        <div className=" absolute ml-[100%] left-3 bottom-0 z-10">
          <ProfileCard handleLogout={logout} />
        </div>
        <section>
          {/* Logo  */}
          <div>
            <img className="h-10 w-16" src={logo} alt="logo" />
          </div>
          {/* Icons */}
          <ul className=" my-10 flex flex-col items-center gap-6">
            <Link to="/" className=" text-xl text-secondary">
              {home}
            </Link>
            <Link to="/addbook" className=" text-xl text-icon">
              {add}
            </Link>
            <li className=" text-xl text-icon">{bookmark}</li>
          </ul>
        </section>
        {/* Profile section */}
        <div>
          <div className="flex justify-center text-accent text-3xl">
            {profile}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
