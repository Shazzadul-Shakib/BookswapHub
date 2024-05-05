import book1 from "../../assets/b1.jpg";

const RecommendedCard = () => {
  return (
    <>
      <div className=" h-[150px] w-[260px] rounded-xl my-4 flex justify-center relative overflow-hidden">
        <img className=" max-h-full max-w-full" src={book1} alt="Book Image" />
        <div className="absolute h-full w-full  bg-gradient-to-t from-[#0f0e0ed3] via-black-opacity-50 to-transparent"></div>
      </div>
    </>
  );
};

export default RecommendedCard;
