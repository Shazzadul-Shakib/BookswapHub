import { useState } from "react";
import { allIconsData } from "../../data/all-icons-data";

const AddbookForm = () => {
  const { image, cancel } = allIconsData;
  const [selectedImage, setSelectedImage] = useState(null);

//   Get image to show as a preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="relative bg-primary md:w-[600px] max-h-[90dvh] overflow-y-auto custom-scrollbar p-10 rounded-lg">
      <header className=" absolute top-2 right-3 my-2 text-2xl text-accent">
        {cancel}
      </header>
      <main className=" my-5 mx-2">
        <form>
          <div className="mb-4">
            {/* Label and icon display */}
            <label
              htmlFor="Image"
              className="flex justify-center items-center w-full text-center py-2 bg-white rounded cursor-pointer"
            >
              <div className="text-4xl text-accent">{image}</div>
            </label>

            {/* Display selected image */}
            <div className="flex justify-center">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="mt-4 rounded  h-[150px] "
                />
              )}
            </div>

            {/* File input */}
            <input
              type="file"
              name="Image"
              id="Image"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          <div className="mb-4">
            {/* Book name input */}
            <input
              type="text"
              placeholder="Book's name"
              className="w-full px-3 py-2 rounded border border-secondary"
            />
          </div>

          <div className="mb-3">
            {/* Book description textarea */}
            <textarea
              cols="30"
              rows="10"
              placeholder="Book description"
              className="w-full resize-none px-3 py-2 rounded border border-secondary"
            />
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
