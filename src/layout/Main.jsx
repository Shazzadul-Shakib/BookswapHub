import Searchbar from "../components/Sidebar/Searchbar/Searchbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className=" max-w-screen-xl m-auto h-[100dvh] grid grid-cols-[auto_1fr] gap-7">
      <div className="grid items-center">
        <Sidebar />
      </div>
      <div className="mt-10">
        <Searchbar />
      </div>
    </div>
  );
};

export default Main;
