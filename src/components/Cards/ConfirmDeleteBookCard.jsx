import { useDeleteSingleBookMutation, useGetBookQuery } from "../../redux/api/books-api";
import Loader from "../Shared/Loader/Loader";
import LoaderModalBody from "../Shared/ModalBody/LoaderModalBody";

const ConfirmDeleteBookCard = ({ book, close }) => {
  const [deleteSingleBook, { isLoading }] = useDeleteSingleBookMutation();
  const { refetch } = useGetBookQuery();

  const handleDeleteSingleBook = async () => {
    const result = await deleteSingleBook({ bookId: book?._id });
    if (result) {
      close();
      refetch();
    }
  };

  if (isLoading) {
    return <LoaderModalBody modal={<Loader />} />;
  }

  return (
    <main className=" bg-tertiary p-6 text-secondary rounded-md">
      <h1>
        Do you want to delete "
        <span className=" font-semibold">{book.bookName}</span>"?
      </h1>
      <div className=" w-full flex justify-center gap-4 items-center mt-4 font-bold">
        <button
          onClick={close}
          className=" text-sm px-4 py-2 bg-icon text-tertiary rounded"
        >
          No
        </button>
        <button
          onClick={handleDeleteSingleBook}
          className=" text-sm px-4 py-2 bg-accent text-secondary rounded"
        >
          Yes
        </button>
      </div>
    </main>
  );
};

export default ConfirmDeleteBookCard;
