import { Helmet } from "react-helmet-async";
import Recommended from "../components/Homepage/Recommended/Recommended";

const Homepage = () => {
    return (
      <main className="h-full overflow-y-auto custom-scrollbar">
        {/* Helmet title provider */}
        <Helmet>
          <title>Bookswap Hub | Home</title>
        </Helmet>

        <Recommended />
      </main>
    );
};

export default Homepage;