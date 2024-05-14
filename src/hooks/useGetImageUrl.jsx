import axios from "axios";

const useGetImageUrl = () => {
  const getImageUrl = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", `${import.meta.env.VITE_cloudPreset}`);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_cloudName
        }/image/upload`,
        formData
      );

      if (response.data && response.data.secure_url) {
        return response.data.secure_url;
      } else {
        throw new Error("Failed to upload image to Cloudinary");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  return { getImageUrl };
};

export default useGetImageUrl;
