import { useContext } from "react";
import { allIconsData } from "../../../data/all-icons-data";
import useToggle from "../../../hooks/useToggle";
import { useGetBookQuery } from "../../../redux/api/books-api";
import RecommendedCard from "../../Cards/RecommendedCard";
import AddbookForm from "../../Forms/Addbook_form";
import Loader from "../../Shared/Loader/Loader";
import ModalBody from "../../Shared/ModalBody/ModalBody";
import { AuthContext } from "../../../provider/authProviders";
import NoNotification from "../../InitialPages/NoNotification";

const YourCollection = () => {
  const { data, isLoading } = useGetBookQuery();
  const { user } = useContext(AuthContext);
  const [isOpen, toggle] = useToggle();

  const books = data?.data || [];
  const { add_btn } = allIconsData;
  const selfCollection = books.filter(
    (book) => book?.user?.userEmail == user?.email
  );

  return (
    <div>
      {/* Headers section */}
      <header className="flex justify-between items-center mt-6 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
            Your books collection
          </h1>
        </div>
        <div>
          <button
            onClick={toggle}
            className="flex gap-2 items-center px-6 py-2 bg-accent rounded-lg text-secondary font-semibold"
          >
            <span className="hidden text-md sm:block">Add book</span>
            <span className="text-lg font-bold">{add_btn}</span>
          </button>
          {isOpen && <ModalBody modal={<AddbookForm close={toggle} />} />}
        </div>
      </header>
      <main className="h-[calc(100dvh-195px)] lg:h-[calc(100dvh-140px)] overflow-y-auto custom-scrollbar">
        {isLoading ? (
          <ModalBody modal={<Loader />} />
        ) : selfCollection.length === 0 ? (
          <NoNotification element={"Books Uploaded"} />
        ) : (
          <div className="w-full grid items-center justify-items-center gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {selfCollection
              .slice()
              .reverse()
              .map((book) => (
                <RecommendedCard key={book._id} book={book} />
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default YourCollection;
