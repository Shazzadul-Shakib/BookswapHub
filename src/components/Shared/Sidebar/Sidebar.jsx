import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/authProviders";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { allIconsData } from "../../../data/all-icons-data";
import logo from "../../../assets/logo.ico";
import ProfileCard from "../ProfileCard/ProfileCard";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);
  const [open, setOpen, ref] = useOutsideClick(false);

  const toggle = () => {
    setOpen(!open);
  };
  const { home, add, bookmark, profile } = allIconsData;

  return (
    <>
      <div className=" flex flex-col justify-between py-8 bg-tertiary h-[95dvh] w-[70px] rounded-xl relative">
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
        <div ref={ref}>
          <div
            onClick={toggle}
            className="flex justify-center text-accent text-3xl"
          >
            {profile}
          </div>
          {open && (
            <div className=" absolute ml-[100%] left-3 bottom-0 z-10">
              <ProfileCard handleLogout={logout} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
