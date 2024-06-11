import { BiSolidBookAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaBookOpen, FaBookmark, FaEdit, FaFacebookSquare, FaGoogle, FaRegImage } from "react-icons/fa";
import { FaRegSquarePlus } from "react-icons/fa6";
import { HiSquares2X2 } from "react-icons/hi2";
import { ImCancelCircle, ImNotification } from "react-icons/im";
import { IoIosNotifications, IoMdLogOut, IoMdSettings } from "react-icons/io";
import {
  IoBookmark,
  IoBookmarkOutline,
  IoCloudUpload,
  IoSearchOutline,
} from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { PiDotsThreeCircleLight } from "react-icons/pi";

export const allIconsData = {
  home: <HiSquares2X2 />,
  add: <FaRegSquarePlus />,
  bookmark: <IoBookmark />,
  bookmarkOutline: <IoBookmarkOutline />,
  profile: <CgProfile />,
  search: <IoSearchOutline />,
  google: <FaGoogle />,
  facebook: <FaFacebookSquare />,
  setting: <IoMdSettings />,
  logout: <IoMdLogOut />,
  update: <IoCloudUpload />,
  add_btn: <BiSolidBookAdd />,
  image: <FaRegImage />,
  cancel: <ImCancelCircle />,
  borrowedbook: <FaBookOpen />,
  notification: <IoIosNotifications />,
  dots: <BsThreeDotsVertical />,
  notAvailable: <ImNotification />,
  deleteIcon: <MdDelete />,
  editIcon: <FaEdit />,
};
