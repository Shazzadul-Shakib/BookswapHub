import book1 from "../../assets/b1.jpg";
import { allIconsData } from "../../data/all-icons-data";

const RecommendedCard = () => {
  const { bookmarkOutline, profile } = allIconsData;
  return (
    <>
      <div className=" flex flex-col my-4">
        <div className="  h-[130px] w-[260px] rounded-xl my-1 flex justify-center relative overflow-hidden cursor-pointer">
          <img
            className=" max-h-full max-w-full"
            src={book1}
            alt="Book Image"
          />
          <div className=" absolute top-3 right-4 text-secondary text-sm">
            {bookmarkOutline}
          </div>
          <div className="absolute flex items-end p-3 h-full w-full  bg-gradient-to-t from-[#0f0e0ed3] via-black-opacity-50 to-transparent">
            <h2 className=" text-secondary text-xs py-1">
              How to Win Friends and Influence People
            </h2>
          </div>
        </div>

        <div className=" text-secondary flex gap-2 items-center">
          <div className=" text-2xl">{profile}</div>
          <h2 className=" text-sm font-semibold py-1">Shazzadul Islam Shakib</h2>
        </div>
      </div>
    </>
  );
};

export default RecommendedCard;
