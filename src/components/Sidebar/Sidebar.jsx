import logo from '../../assets/logo.ico';
import { allIconsData } from '../../data/all-icons-data';

const Sidebar = () => {
    const {home,add,bookmark}=allIconsData;
    return (
      <section className=" py-8 bg-tertiary h-full w-16 rounded-xl">
        {/* Logo  */}
        <div>
          <img className="h-10 w-16" src={logo} alt="logo" />
        </div>
        {/* Icons */}
        <ul className=' my-10 flex flex-col items-center gap-6'>
            <li className=' text-xl text-secondary'>{home}</li>
            <li className=' text-xl text-icon'>{add}</li>
            <li className=' text-xl text-icon'>{bookmark}</li>
        </ul>
        {/* Profile section */}
        <div></div>
      </section>
    );
};

export default Sidebar;