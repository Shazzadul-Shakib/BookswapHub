import { useParams } from "react-router-dom";
import { allIconsData } from "../data/all-icons-data";
import { useGetSingleBookQuery } from "../redux/api/books-api";
import Loader from "../components/Shared/Loader/Loader";
import ModalBody from "../components/Shared/ModalBody/ModalBody";
import Borrowbook_form from "../components/Forms/Borrowbook_form";
import useToggle from "../hooks/useToggle";

const BookDetails = () => {
  const { book_id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(book_id);
  const { profile } = allIconsData;
  const [isOpen,_, setIsOpen]=useToggle();

  let bookInfo = data?.data || [];

  return (
    <main className=" w-[90%] h-[80dvh] mx-auto flex flex-col justify-center lg:justify-start lg:flex-row items-center gap-14 py-4 lg:py-0">
      {/* Image section */}
      <section className=" h-[300px] lg:h-[calc(100dvh-147px)] w-full lg:w-[25dvw] flex justify-center md:items-center rounded overflow-hidden">
        <img
          className=" h-full lg:h-fit lg:w-full rounded"
          src={bookInfo?.bookImage}
          alt="Book's Image"
        />
      </section>

      {/* Details section */}
      <section className=" w-full lg:w-fit text-secondary flex flex-col flex-1  gap-y-6 text-balance">
        {/* Book Name */}
        <div>
          <h1 className=" text-xl font-semibold ">{bookInfo?.bookName}</h1>
        </div>
        {/* User profile  */}
        <div className=" flex items-center gap-3">
          <div className=" text-4xl">{profile} </div>
          <h2 className=" text-lg">{bookInfo?.user?.userName}</h2>
        </div>
        {/* Book's description */}
        <div>
          <p className=" text-sm">{bookInfo?.bookDescription}</p>
        </div>
        {/* Other additional info */}
        <div className="space-y-2">
          <div className="flex justify-between w-full">
            <h3 className="w-1/4 text-sm font-semibold">Author</h3>
            <h3 className="w-3/4 text-sm">{bookInfo?.author}</h3>
          </div>
          <div className="flex justify-between w-full">
            <h3 className="w-1/4 text-sm font-semibold">Language</h3>
            <h3 className="w-3/4 text-sm">{bookInfo?.language}</h3>
          </div>
          <div className="flex justify-between w-full">
            <h3 className="w-1/4 text-sm font-semibold">Page</h3>
            <h3 className="w-3/4 text-sm">{bookInfo?.page}</h3>
          </div>
        </div>
        {/* Borrow book button */}
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className=" px-6 py-2 bg-accent rounded-lg text-sm text-secondary font-semibold"
          >
            Borrow Book
          </button>
        </div>
      </section>
      
      {isLoading && <ModalBody modal={<Loader />} />}
      {isOpen && <ModalBody modal={<Borrowbook_form bookInfo={bookInfo} close={()=>setIsOpen(false)} />} />}
    </main>
  );
};

export default BookDetails;
