import Sidebar from "../components/Sidebar/Sidebar";

const Main = () => {
    return (
      <div className="py-6 max-w-screen-xl m-auto grid h-[100dvh] grid-rows-[auto_1fr]">
        <Sidebar />
      </div>
    );
};

export default Main;