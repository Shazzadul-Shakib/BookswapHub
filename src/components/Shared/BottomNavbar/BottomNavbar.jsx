import { allIconsData } from "../../../data/all-icons-data";

const BottomNavbar = () => {
    const {home,add,bookmark} =allIconsData;
    return (
      <div>
        <div className="flex justify-around items-center p-3 text-3xl text-icon bg-tertiary w-[100vw] ">
          <div className="text-secondary">{home}</div>
          <div>{add}</div>
          <div>{bookmark}</div>
        </div>
      </div>
    );
};

export default BottomNavbar;