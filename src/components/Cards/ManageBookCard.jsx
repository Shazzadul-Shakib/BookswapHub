import { allIconsData } from "../../data/all-icons-data";
import useToggle from "../../hooks/useToggle";
import ModalBody from "../Shared/ModalBody/ModalBody";
import ConfirmDeleteBookCard from "./ConfirmDeleteBookCard";

const ManageBookCard = ({ book }) => {
  const { deleteIcon, editIcon } = allIconsData;
  const [isOpen,_,setIsOpen]=useToggle();

  return (
    <main className="w-full flex items-center bg-tertiary shadow-md rounded-lg p-2 mb-4">
      <div className="flex-shrink-0">
        <img
          src={book.bookImage}
          alt={book.bookName}
          className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-md md:ml-2"
        />
      </div>
      <div className="ml-2 md:ml-4 flex-1">
        <h3 className="text-sm md:text-xl font-bold text-secondary">
          {book.bookName}
        </h3>
        <p className="text-sm text-secondary">{book.author}</p>
      </div>
      {/* <button
        onClick={() => console.log(book._id)}
        className="ml-4 px-2 py-1 md:px-4 md:py-2 bg-icon text-lg text-tertiary rounded-lg"
      >
        {editIcon}
      </button> */}
      <button
        onClick={() => setIsOpen(true)}
        className="ml-2 px-2 py-1 md:px-4 md:py-2 bg-accent text-lg text-secondary rounded-lg"
      >
        {deleteIcon}
      </button>
      {isOpen && (
        <ModalBody
          modal={<ConfirmDeleteBookCard book={book} close={() => setIsOpen(false)} />}
        />
      )}
    </main>
  );
};

export default ManageBookCard;
