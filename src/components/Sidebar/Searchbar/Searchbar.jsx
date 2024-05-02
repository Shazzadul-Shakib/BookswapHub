import { allIconsData } from "../../../data/all-icons-data";

const Searchbar = () => {
  const { search } = allIconsData;

  return (
    <section className=" flex justify-center items-center gap-1">
      <div className="text-xl text-secondary">{search}</div>
      <input
        className=" w-full rounded-sm p-2 bg-primary focus:outline-none text-secondary"
        type="text"
        placeholder="Search for books or notes"
      />
    </section>
  );
};

export default Searchbar;
