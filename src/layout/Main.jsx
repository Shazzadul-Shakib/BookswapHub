import Searchbar from "../components/Shared/Searchbar/Searchbar";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import Trending from "../components/Homepage/Trending/Trending";
import Recommended from "../components/Homepage/Recommended/Recommended";

const Main = () => {
  return (
    <div className="h-full flex justify-center md:gap-6 overflow-hidden">
      <div className="hidden h-full lg:flex justify-center items-center ">
        <Sidebar />
      </div>

      <div className=" p-4 ">
        <div>
          <Searchbar />
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
