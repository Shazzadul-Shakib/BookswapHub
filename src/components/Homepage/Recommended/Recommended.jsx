import { useGetBookQuery } from "../../../redux/api/books-api";
import RecommendedCard from "../../Cards/RecommendedCard";
import Loader from "../../Shared/Loader/Loader"

const Recommended = () => {
  const {data , isLoading }=useGetBookQuery();
  isLoading? <Loader/>:console.log(data.data);

  return (
    <>
      <div className="my-5 px-2 ">
        <h1 className="text-secondary text-2xl pb-4">Recommended for you</h1>
        <div>
          <div className="grid items-center justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
            <RecommendedCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
