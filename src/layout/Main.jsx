import Searchbar from "../components/Sidebar/Searchbar/Searchbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Trending from "../components/Homepage/Trending/Trending";

const Main = () => {
  return (
    <div className=" max-w-screen-xl m-auto h-[100dvh] grid grid-cols-[auto_1fr] gap-7">
      <div className="grid items-center">
        <Sidebar />
      </div>

      {/* Main section to display */}
      <div className="mt-10">
        <Searchbar />
        <Trending />
      </div>
    </div>
  );
};

export default Main;
