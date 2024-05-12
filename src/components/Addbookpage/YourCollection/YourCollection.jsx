import { allIconsData } from "../../../data/all-icons-data";
import RecommendedCard from "../../Cards/RecommendedCard";

const YourCollection = () => {
  const { add_btn } = allIconsData;
  return (
    <div>
      {/* Headers section */}
      <header className=" flex justify-between items- mt-6 mb-6">
        <div>
          <h1 className=" text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
            Your books collection
          </h1>
        </div>
        <div>
          <button className=" flex gap-2 items-center px-6 py-2 bg-accent rounded-lg text-secondary font-semibold">
            <span className=" hidden text-md sm:block">Add book </span>
            <span className=" text-lg font-bold">{add_btn}</span>
          </button>
        </div>
      </header>
      <main className=" h-[calc(100dvh-195px)] lg:h-[calc(100dvh-140px)]  overflow-y-auto custom-scrollbar">
        <div className=" w-full grid items-center justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </main>
    </div>
  );
};

export default YourCollection;
