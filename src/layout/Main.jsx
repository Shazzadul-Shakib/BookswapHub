import { Outlet } from "react-router-dom";
import Searchbar from "../components/Shared/Searchbar/Searchbar";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import BottomNavbar from "../components/Shared/BottomNavbar/BottomNavbar";
import { allIconsData } from "../data/all-icons-data";
import useOutsideClick from "../hooks/useOutsideClick";
import ProfileCard from "../components/Shared/ProfileCard/ProfileCard";
import { useContext } from "react";
import { AuthContext } from "../provider/authProviders";

const Main = () => {
  const { logout } = useContext(AuthContext);
  const [showProfileCard, setShowProfileCard, profileCardRef] =
    useOutsideClick(false);
  const { profile } = allIconsData;

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
          <div ref={profileCardRef}>
            <div
              onClick={toggleProfile}
              className=" text-secondary text-4xl md:text-4xl lg:hidden"
            >
              {profile}
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
