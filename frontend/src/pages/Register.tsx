
import React, { useState } from "react";
import vector from "../assets/Vector.svg"; // Check the path
import { SubmitHandler, useForm } from "react-hook-form";

const Register = () => {
  interface LandFormInputs {
    landId: string;
    landSize: string;
    landPrice: string;
    landDescription: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LandFormInputs>();

  const onSubmit: SubmitHandler<LandFormInputs> = (data) => {
    console.log("Form Data: ", data);
  };

  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setSelectedFiles(event.dataTransfer.files);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h2 className="text-white text-center font-semibold">Lease Land</h2>
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 w-full max-w-4xl mx-auto space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div
          className="border border-dashed border-[#3BA300] bg-white w-full md:w-[400px] h-[400px] p-6 rounded-lg text-center flex flex-col justify-center items-center"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="">
            <img className="mx-auto w-20" src={vector} alt="vector" />
            <p>
              Drag your file(s) or{" "}
              <label htmlFor="fileInput" className="cursor-pointer text-blue-500">
                Browse
              </label>
            </p>
            <p>Max 10 MB files are allowed</p>
            <p>JPEG, PNG, GIF, SVG, MP4</p>
            <input
              type="file"
              accept=".jpg,.png,.gif,.svg,.mp4"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="fileInput"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-w-md w-full p-6 min-h-[400px] bg-gray-100 rounded-lg"
        >
          <div className="flex flex-col">
            <label htmlFor="landId" className="text-gray-700 font-semibold mb-1">
              Title Number
            </label>
            <input
              type="text"
              id="landId"
              placeholder="Enter Tittle Number"
              className="bg-gray-200 border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              {...register("landId", { required: "Land Id is required" })}
            />
            {errors.landId && <span className="text-red-500 text-sm">{errors.landId.message}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="landSize" className="text-gray-700 font-semibold mb-1">
              Land Location
            </label>
            <input
              type="text"
              id="landSize"
              placeholder="Enter Land Location"
              className="bg-gray-200 border border-gray-400 rounded-lg p-2  focus:ring-2 focus:ring-blue-400"
              {...register("landSize", { required: "Land Size is required" })}
            />
            {errors.landSize && <span className="text-red-500 text-sm">{errors.landSize.message}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="landPrice" className="text-gray-700 font-semibold mb-1">
              Number of Plots
            </label>
            <input
              type="text"
              id="landPrice"
              placeholder="Enter Number of Plolts"
              className="bg-gray-200 border border-gray-400 rounded-lg p-2  focus:ring-2 focus:ring-blue-400"
              {...register("landPrice", { required: "Land Price is required" })}
            />
            {errors.landPrice && <span className="text-red-500 text-sm">{errors.landPrice.message}</span>}
          </div>
          <button
            type="submit"
            className="bg-green-300 text-white px-4 py-2  rounded-lg hover:bg-green-200 transition duration-300 w-full"
          >
            Lease Land
          </button>
        </form>
      </div>

      {selectedFiles && (
        <div className="mt-4">
          <h3 className="text-white">Selected Files:</h3>
          <ul className="text-gray-200">
            {Array.from(selectedFiles).map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Register;
