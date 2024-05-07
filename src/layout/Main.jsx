import Searchbar from "../components/Shared/Searchbar/Searchbar";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import Trending from "../components/Homepage/Trending/Trending";
import Recommended from "../components/Homepage/Recommended/Recommended";
import BottomNavbar from "../components/Shared/BottomNavbar/BottomNavbar";
import { allIconsData } from "../data/all-icons-data";

const Main = () => {
  const {profile}=allIconsData;

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
      <div className=" p-4 ">
        <div className=" grid grid-cols-[1fr_auto]">
          <Searchbar />
          <div className=" text-secondary text-3xl md:text-4xl lg:hidden">{profile}</div>
        </div>
        <div className="h-full overflow-y-auto custom-scrollbar">
          <Trending />
          <Recommended />
        </div>
      </div>
    </div>
  );
};

export default Main;
