import { Outlet } from "react-router-dom";
import Searchbar from "../components/Shared/Searchbar/Searchbar";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import BottomNavbar from "../components/Shared/BottomNavbar/BottomNavbar";
import useOutsideClick from "../hooks/useOutsideClick";
import ProfileCard from "../components/Shared/ProfileCard/ProfileCard";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/authProviders";
import profile from "../assets/pIcon.png";
import { toast } from "react-toastify";
import { useLogoutUserMutation } from "../redux/api/users-api";
import { useGetBookQuery } from "../redux/api/books-api";

const Main = () => {
  const { logout, user } = useContext(AuthContext);
  const [logoutUser] = useLogoutUserMutation();
  const { error } = useGetBookQuery();
  const [showProfileCard, setShowProfileCard, profileCardRef] =
    useOutsideClick(false);

  const toggleProfile = () => {
    setShowProfileCard((prev) => !prev); // Toggle based on previous state
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      const userCredentials = { userEmail: user.email };
      await logoutUser(userCredentials); // Perform logout on server
      logout(); // Perform client-side logout
      window.location.reload();
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  useEffect(() => {
    if (error?.status === 401 || error?.status === 403) {
      handleLogout();
    }
  }, [error]);

  return (
    <main className="h-full flex justify-center md:gap-6 overflow-hidden relative">
      {/* Sidebar for large devices */}
      <div className="hidden h-full lg:flex justify-center items-center">
        <Sidebar />
      </div>

      {/* Bottom navbar for small devices */}
      <div className="absolute bottom-0 z-10 lg:hidden">
        <BottomNavbar />
      </div>

      {/* Main content section */}
      <div className="p-4 w-[90vw] md:w-[calc(100vw-180px)]">
        <div className="grid grid-cols-[1fr_auto]">
          <Searchbar />

          {/* Profile card section */}
          <div className="block lg:hidden" ref={profileCardRef}>
            <div
              onClick={toggleProfile}
              className="w-full flex cursor-pointer items-center justify-center"
            >
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={user.photoURL || profile}
                alt="user Image"
              />
            </div>
            {showProfileCard && (
              <div className="absolute right-3 mt-3 z-10">
                <ProfileCard handleLogout={handleLogout} />
              </div>
            )}
          </div>
        </div>

        {/* Main outlet */}
        <Outlet />
      </div>
    </main>
  );
};

export default Main;
