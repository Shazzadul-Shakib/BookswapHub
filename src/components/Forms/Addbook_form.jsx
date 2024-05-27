import { useAddBookMutation } from "../../redux/api/books-api";
import { useForm } from "react-hook-form";
import useGetImageUrl from "../../hooks/useGetImageUrl";
import { allIconsData } from "../../data/all-icons-data";
import { useContext } from "react";
import { AuthContext } from "../../provider/authProviders";

const AddbookForm = ({ close }) => {
  const { user } = useContext(AuthContext);
  const [addBook] = useAddBookMutation();
  const { image, cancel } = allIconsData;
  const { getImageUrl } = useGetImageUrl();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const uploadedImageUrl = await getImageUrl(data.bookImage[0]);
      data.bookImage = uploadedImageUrl;
      data.userEmail = user.email;
      await addBook(data);
      reset();
      close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative bg-primary md:w-[600px] max-h-[90vh] overflow-y-auto custom-scrollbar p-10 rounded-lg">
      <header
        onClick={close}
        className="absolute top-2 right-3 my-2 text-2xl text-accent cursor-pointer"
      >
        {cancel}
      </header>
      <main className="my-5 mx-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            {/* Label and icon display */}
            <label
              htmlFor="Image"
              className="flex justify-center items-center w-full text-center py-2 bg-white rounded cursor-pointer"
            >
              <div className="text-4xl text-accent">{image}</div>
            </label>

            {/* File input */}
            <input
              type="file"
              name="Image"
              id="Image"
              className="hidden"
              {...register("bookImage", { required: false })}
            />
            {errors.bookImage && (
              <p className="text-accent text-xs">Image is required</p>
            )}
          </div>

          <div className="mb-4">
            {/* Book name input */}
            <input
              type="text"
              placeholder="Book's name"
              className="w-full px-3 py-2 rounded border border-secondary"
              {...register("bookName", { required: true })}
            />
            {errors.bookName && (
              <p className="text-accent text-xs">Book's name is required</p>
            )}
          </div>

          <div className="mb-4">
            {/* Book author name input */}
            <input
              type="text"
              placeholder="Author's name"
              className="w-full px-3 py-2 rounded border border-secondary"
              {...register("author", { required: true })}
            />
            {errors.authorName && (
              <p className="text-accent text-xs">Author'a name is required</p>
            )}
          </div>
          <div className=" flex gap-4">
            <div className="mb-4 w-full">
              {/* Book's Language' input */}
              <input
                type="text"
                placeholder="Book's Language name"
                className="w-full px-3 py-2 rounded border border-secondary"
                {...register("language", { required: true })}
              />
              {errors.language && (
                <p className="text-accent text-xs">
                  Book's language is required
                </p>
              )}
            </div>
            <div className="mb-4 w-full">
              {/* Bookpage number input */}
              <input
                type="number"
                placeholder="Book's page number"
                className="w-full px-3 py-2 rounded border border-secondary"
                {...register("page", { required: true })}
              />
              {errors.page && (
                <p className="text-accent text-xs">
                  Book's page number is required
                </p>
              )}
            </div>
          </div>

          <div className="mb-3">
            {/* Book description textarea */}
            <textarea
              cols="30"
              rows="10"
              placeholder="Book description"
              className="w-full resize-none px-3 py-2 rounded border border-secondary"
              {...register("bookDescription", { required: true })}
            />
            {errors.bookDescription && (
              <p className="text-accent text-xs">Description is required</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full px-3 py-2 bg-accent rounded text-secondary font-bold"
          >
            Add Book
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddbookForm;
