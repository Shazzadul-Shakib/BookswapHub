import { Helmet } from "react-helmet-async";
import notFoundImage from "../assets/404.png";

const NotFound = () => {
  return (
    <main className=" flex justify-center items-center h-full">
      {/* Helmet title provider */}
      <Helmet>
        <title>Bookswap Hub | 404 Not Found</title>
      </Helmet>

      {/* Not found illustration  */}
      <img
        className="h-[400px] md:h-[800px]"
        src={notFoundImage}
        alt="Not Found Image"
      />
    </main>
  );
};

export default NotFound;
