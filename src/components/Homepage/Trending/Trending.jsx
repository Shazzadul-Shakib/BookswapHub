import TrendingCard from "../../Cards/TrendingCard";
import book1 from "../../../assets/b1.jpg";
import book2 from "../../../assets/b2.jpg";

const Trending = () => {
    return (
        <div className=" my-3">
            <h1 className=" text-secondary text-2xl pb-4">Trending</h1>
            <div className=" flex gap-6 ">
            <TrendingCard bookImage={book1}/>
            <TrendingCard bookImage={book2}/>
            <TrendingCard bookImage={book2}/>
            <TrendingCard bookImage={book2}/>
            </div>
        </div>
    );
};

export default Trending;