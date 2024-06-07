import { Outlet } from "react-router-dom";
import Searchbar from "../components/Shared/Searchbar/Searchbar";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import BottomNavbar from "../components/Shared/BottomNavbar/BottomNavbar";
import useOutsideClick from "../hooks/useOutsideClick";
import ProfileCard from "../components/Shared/ProfileCard/ProfileCard";
import { useContext } from "react";
import { AuthContext } from "../provider/authProviders";
import profile from "../assets/pIcon.png";
const Main = () => {
  const { logout,user } = useContext(AuthContext);
  const [showProfileCard, setShowProfileCard, profileCardRef] =
    useOutsideClick(false);

  const toggleProfile = () => {
    setShowProfileCard(!showProfileCard);
  };

  return (
    <div className="h-full flex justify-center md:gap-6 overflow-hidden relative">
      {/* Sidebar for large devices */}
      <div className="hidden h-full lg:flex justify-center items-center ">
        <Sidebar />
      </div>
      {/* Bottom navbar for small devices */}
      <div className="absolute bottom-0 z-10 lg:hidden">
        <BottomNavbar />
      </div>
      {/* Main content section */}
      <div className=" p-4 w-[90vw] md:w-[calc(100vw-180px)]">
        <div className=" grid grid-cols-[1fr_auto]">
          <Searchbar />
          {/* Profile card section */}
          <div className="block md:hidden" ref={profileCardRef}>
            <div
              onClick={toggleProfile}
              className="w-full flex cursor-pointer items-center justify-center"
            >
              {user.photoURL ? (
                <img
                  className="h-[40px] w-[40px] rounded-full"
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
            {showProfileCard && (
              <div className=" absolute right-3 mt-3 z-10">
                <ProfileCard handleLogout={logout} />
              </div>
            )}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
