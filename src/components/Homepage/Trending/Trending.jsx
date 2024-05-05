import TrendingCard from "../../Cards/TrendingCard";
import book1 from "../../../assets/b1.jpg";
import book2 from "../../../assets/b2.jpg";

const Trending = () => {
  return (
    <div className="my-3">
      <h1 className="text-secondary text-2xl pb-4">Trending</h1>
      <div
        className="custom-scrollbar scroll-smooth overflow-x-auto flex gap-6"
        style={{ maxWidth: "calc(100vw - 180px)" }}
      >
        <TrendingCard bookImage={book1} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
        <TrendingCard bookImage={book2} />
      </div>
    </div>
  );
};

export default Trending;
