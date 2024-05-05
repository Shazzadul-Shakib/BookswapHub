import RecommendedCard from "../../Cards/RecommendedCard";

const Recommended = () => {
  return (
    <>
      <div className="my-5 px-2 ">
        <h1 className="text-secondary text-2xl pb-4">Recommended for you</h1>
        <div>
          <div
            className=" grid grid-cols-4 cursor-pointer"
            style={{
              maxWidth: "calc(100vw - 180px)",
            }}
          >
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
