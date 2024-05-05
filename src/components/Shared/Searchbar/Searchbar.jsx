import { allIconsData } from "../../../data/all-icons-data";

const Searchbar = () => {
  const { search } = allIconsData;

  return (
    <>
      <div className=" flex justify-center items-center gap-1 max-w-[80dvw]">
        <div className="text-xl text-secondary">{search}</div>
        <input
          className=" w-full rounded-sm p-2 bg-primary focus:outline-none text-secondary"
          type="text"
          placeholder="Search for books or notes"
        />
      </div>
    </>
  );
};

export default Searchbar;
