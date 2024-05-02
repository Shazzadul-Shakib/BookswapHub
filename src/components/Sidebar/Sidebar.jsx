import logo from "../../assets/logo.ico";
import { allIconsData } from "../../data/all-icons-data";

const Sidebar = () => {
  const { home, add, bookmark, profile } = allIconsData;

  return (
    <section className=" flex flex-col justify-between py-8 bg-tertiary h-[95dvh] w-16 rounded-xl">
      <section>
        {/* Logo  */}
        <div>
          <img className="h-10 w-16" src={logo} alt="logo" />
        </div>
        {/* Icons */}
        <ul className=" my-10 flex flex-col items-center gap-6">
          <li className=" text-xl text-secondary">{home}</li>
          <li className=" text-xl text-icon">{add}</li>
          <li className=" text-xl text-icon">{bookmark}</li>
        </ul>
      </section>
      {/* Profile section */}
      <div className="flex justify-center text-accent text-3xl">{profile}</div>
    </section>
  );
};

export default Sidebar;
