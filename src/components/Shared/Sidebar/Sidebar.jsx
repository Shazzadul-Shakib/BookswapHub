import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../provider/authProviders";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { allIconsData } from "../../../data/all-icons-data";
import logo from "../../../assets/logo.ico";
import ProfileCard from "../ProfileCard/ProfileCard";
import { useGetUserBorrowedBooksQuery, useLogoutUserMutation } from "../../../redux/api/users-api";
import ModalBody from "../ModalBody/ModalBody";
import Loader from "../Loader/Loader";
import profile from "../../../assets/pIcon.png";
import { toast } from "react-toastify";

const Sidebar = () => {
  const { logout, user } = useContext(AuthContext);
  const [open, setOpen, ref] = useOutsideClick(false);
  const { data, isLoading } = useGetUserBorrowedBooksQuery(user.email);
  const [logoutUser]=useLogoutUserMutation();
  const { home, add, bookmark, borrowedbook, notification } = allIconsData;
  const location = useLocation();

  const toggle = () => {
    setOpen(!open);
  };

  // Handle logout
  const handleLogout = async() => {
    await logout();
    const userCredentials={userEmail:user?.email};
    await logoutUser(userCredentials);
    toast.success("Logged out successfully")
  };

  const getLinkClass = (path) =>
    location.pathname === path ? "text-secondary" : "text-icon";

  return (
    <main>
      <div className="flex flex-col justify-between py-8 bg-tertiary h-[95dvh] w-[70px] rounded-xl relative">
        <section>
          {/* Logo  */}
          <Link to="/">
            <img className="h-10 w-16" src={logo} alt="logo" />
          </Link>
          {/* Icons */}
          <ul className="my-10 flex flex-col items-center gap-6">
            <Link to="/" className={`text-xl ${getLinkClass("/")}`}>
              {home}
            </Link>
            <Link
              to="/addbook"
              className={`text-xl ${getLinkClass("/addbook")}`}
            >
              {add}
            </Link>
            <Link
              to="/bookmark"
              className={`text-xl ${getLinkClass("/bookmark")}`}
            >
              {bookmark}
            </Link>
            <Link
              to="/borrowedbook"
              className={`text-lg ${getLinkClass("/borrowedbook")}`}
            >
              {borrowedbook}
            </Link>
            <Link
              to="/notification"
              className={`relative text-2xl ${getLinkClass("/notification")}`}
            >
              {notification}
              <p
                className={`absolute top-0 -mt-1 flex items-center justify-center text-[10px] text-secondary h-[13px] w-[13px] bg-accent rounded-full ${
                  data?.data[0]?.userNotification?.length === 0 ? "hidden" : ""
                }`}
              >
                {data?.data[0]?.userNotification?.length}
              </p>
            </Link>
          </ul>
        </section>
        {/* Profile section */}
        <div ref={ref} className=" ">
          <div
            onClick={toggle}
            className="w-full flex cursor-pointer items-center justify-center "
          >
            {user.photoURL ? (
              <img
                className="h-[40px] w-[40px]  border-2 border-secondary rounded-full object-cover"
                src={user.photoURL}
                alt="user Image"
              />
            ) : (
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={profile}
                alt="user Image"
              />
            )}
          </div>
          {open && (
            <div className="absolute ml-[100%] left-3 bottom-0 z-10">
              <ProfileCard handleLogout={handleLogout} />
            </div>
          )}
        </div>
      </div>
      {isLoading && <ModalBody modal={<Loader />} />}
    </main>
  );
};

export default Sidebar;
