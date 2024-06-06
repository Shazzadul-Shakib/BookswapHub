import { useAddBookMutation } from "../../redux/api/books-api";
import { useForm } from "react-hook-form";
import useGetImageUrl from "../../hooks/useGetImageUrl";
import { allIconsData } from "../../data/all-icons-data";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/authProviders";

const AddBookForm = ({ close }) => {
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
  const [selectedImage, setSelectedImage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const uploadedImageUrl = await getImageUrl(selectedImage);
      data.bookImage = uploadedImageUrl;
      data.userEmail = user.email;
      await addBook(data);
      reset();
      close();
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
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
            <div className="flex justify-center items-center my-4">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected Preview"
                  className="mt-2 w-auto h-[100px] rounded"
                />
              )}
            </div>
            <label
              htmlFor="Image"
              className="flex justify-center items-center w-full text-center py-2 bg-white rounded cursor-pointer"
            >
              <div className="text-4xl text-accent">{image}</div>
            </label>
            <input
              type="file"
              name="Image"
              id="Image"
              className="hidden"
              {...register("bookImage", { required: true })}
              onChange={handleImageChange}
            />
            {errors.bookImage && (
              <p className="text-accent text-xs">Image is required</p>
            )}
          </div>

          <div className="mb-4">
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
            <input
              type="text"
              placeholder="Author's name"
              className="w-full px-3 py-2 rounded border border-secondary"
              {...register("author", { required: true })}
            />
            {errors.author && (
              <p className="text-accent text-xs">Author's name is required</p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="mb-4 w-full">
              <input
                type="text"
                placeholder="Book's Language"
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

export default AddBookForm;
