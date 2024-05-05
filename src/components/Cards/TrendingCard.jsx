import { allIconsData } from "../../data/all-icons-data";

const TrendingCard = ({ bookImage }) => {
  const { bookmarkOutline } = allIconsData;

  return (
    <div>
      <div className="h-[180px] w-[370px] rounded-xl flex justify-center items-center relative overflow-hidden cursor-pointer">
        <img
          className="max-h-full max-w-full"
          src={bookImage}
          alt="Book Image"
        />
        <div className="absolute top-3 right-3 text-secondary text-lg">
          {bookmarkOutline}
        </div>
        {/* name and info section */}
        <div className="absolute h-full flex items-end w-full p-3 bg-gradient-to-t from-[#0f0e0ed3] via-black-opacity-50 to-transparent">
          <h2 className="text-lg font-semibold text-white">
            How to Win Friends and Influence People
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
