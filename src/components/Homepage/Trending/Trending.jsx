import TrendingCard from "../../Cards/TrendingCard";
import book1 from "../../../assets/b1.jpg";
import { TbMathIntegralX } from "react-icons/tb";

const Trending = () => {
  return (
    <TbMathIntegralX className="my-3">
      <h1 className="text-secondary text-2xl pb-4">Trending</h1>
      <div className="custom-scrollbar scroll-smooth overflow-x-auto flex gap-6">
        <TrendingCard bookImage={book1} />
      </div>
    </TbMathIntegralX>
  );
};

export default Trending;
