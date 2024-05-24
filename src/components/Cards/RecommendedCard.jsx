import { allIconsData } from "../../data/all-icons-data";

const RecommendedCard = ({ book }) => {
  const { bookmarkOutline, profile } = allIconsData;

  return (
    <>
      <div className=" flex flex-col my-4">
        <div className="  h-[130px] w-[260px] rounded-xl my-1 flex justify-center relative overflow-hidden cursor-pointer">
          <img
            className=" max-h-full max-w-full"
            src={book?.bookImage}
            alt="Book Image"
          />
          <div className=" absolute top-3 right-4 text-secondary text-sm">
            {bookmarkOutline}
          </div>
          <div className="absolute flex items-end p-3 h-full w-full  bg-gradient-to-t from-[#0f0e0ed3] via-black-opacity-50 to-transparent">
            <h2 className=" w-full text-secondary text-center font-bold text-xs py-1">
              {book?.bookName}
            </h2>
          </div>
        </div>

        <div className=" text-secondary flex gap-2 items-center">
          <div className=" text-2xl">
            {book?.user?.userImage != "" ? book?.user?.userImage : profile}
          </div>
          <h2 className=" text-sm font-semibold py-1">{book?.user.userName}</h2>
        </div>
      </div>
    </>
  );
};

export default RecommendedCard;
