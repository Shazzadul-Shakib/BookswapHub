import { useForm } from "react-hook-form";
import { allIconsData } from "../../data/all-icons-data";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/authProviders";
import useGetImageUrl from "../../hooks/useGetImageUrl";
import { useUpdateUserProfileInfoMutation } from "../../redux/api/users-api";
import { info } from "autoprefixer";

const UpdateProfileForm = ({ close }) => {
  const { cancel, image } = allIconsData;
  const { user, updateUserProfile } = useContext(AuthContext);
  const [updateUserProfileInfo] = useUpdateUserProfileInfoMutation();
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
      data.userImage = uploadedImageUrl;
      const result = await updateUserProfileInfo({
        userEmail: user.email,
        info: { userName: data.userName, userImage: data.userImage },
      });
      await updateUserProfile(data.userName, data.userImage);
      if (result) {
        reset();
        close();
      }
    } catch (error) {
      console.log(error);
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
              {...register("userImage", { required: true })}
              onChange={handleImageChange}
            />
            {errors.userImage && (
              <p className="text-accent text-xs">Image is required</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              defaultValue={user.displayName}
              className="w-full px-3 py-2 rounded border text-black border-secondary"
              {...register("userName", { required: true })}
            />
            {errors.userName && (
              <p className="text-accent text-xs">Name is required</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              value={user.email}
              readOnly
              className="w-full px-3 py-2 rounded border text-black border-secondary"
            />
          </div>

          <button
            type="submit"
            className="w-full px-3 py-2 bg-accent rounded text-secondary font-bold"
          >
            Upload Profile
          </button>
        </form>
      </main>
    </div>
  );
};

export default UpdateProfileForm;
