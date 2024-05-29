import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/authProviders";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { allIconsData } from "../../../data/all-icons-data";
import logo from "../../../assets/logo.ico";
import ProfileCard from "../ProfileCard/ProfileCard";
import { useGetUserBorrowedBooksQuery } from "../../../redux/api/users-api";
import ModalBody from "../ModalBody/ModalBody";
import Loader from "../Loader/Loader";

const Sidebar = () => {
  const { logout, user } = useContext(AuthContext);
  const [open, setOpen, ref] = useOutsideClick(false);
  const { data, isLoading } = useGetUserBorrowedBooksQuery(user.email);
  const { home, add, bookmark, profile, borrowedbook, notification } =
    allIconsData;

  if (isLoading) {
    return <ModalBody modal={<Loader />} />;
  }

  const toggle = () => {
    setOpen(!open);
  };

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
            <Link to="/borrowedbook" className=" text-lg text-icon">
              {borrowedbook}
            </Link>
            <Link to="/notification" className=" relative  text-2xl text-icon">
              {notification}
              <p
                className={`absolute top-0 -mt-1 flex items-center justify-center text-[10px] text-secondary h-[13px] w-[13px] bg-accent rounded-full ${
                  data.data[0].userNotification?.length === 0 ? "hidden" : ""
                }`}
              >
                {data.data[0].userNotification?.length}
              </p>
            </Link>
          </ul>
        </section>
        {/* Profile section */}
        <div ref={ref}>
          <div
            onClick={toggle}
            className="flex cursor-pointer justify-center text-accent text-3xl"
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
