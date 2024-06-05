import Recommended from "../components/Homepage/Recommended/Recommended";
import Trending from "../components/Homepage/Trending/Trending";

const Homepage = () => {
    return (
      <div className="h-full overflow-y-auto custom-scrollbar">
        {/* <Trending /> */}
        <Recommended />
      </div>
    );
};

export default Homepage;