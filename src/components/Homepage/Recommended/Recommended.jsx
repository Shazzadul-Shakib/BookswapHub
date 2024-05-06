import RecommendedCard from "../../Cards/RecommendedCard";

const Recommended = () => {
  return (
    <>
      <div className="my-5 px-2 ">
        <h1 className="text-secondary text-2xl pb-4">Recommended for you</h1>
        <div>
          <div className=" max-w-[90vw] md:max-w-[calc(100vw - 180px)] grid items-center justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
