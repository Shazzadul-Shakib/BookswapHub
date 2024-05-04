import Searchbar from "../components/Sidebar/Searchbar/Searchbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Trending from "../components/Homepage/Trending/Trending";

const Main = () => {
  return (
    <div className="h-full max-w-[1400px] mx-auto  flex gap-6 overflow-hidden">
      <div className=" h-full flex justify-center items-center">
        <Sidebar />
      </div>

      <div className=" p-4">
        <Searchbar />
        <Trending />
      </div>
    </div>
  );
};

export default Main;
