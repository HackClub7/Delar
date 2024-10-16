/* eslint-disable @typescript-eslint/no-explicit-any */
import useRegisterLand from "../hooks/useRegisterLand";
import { useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios";
import { Camera} from 'lucide-react';
// import OverlayLoader from "overlay-loading-react";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleRegisterLand = useRegisterLand();
  const [image, setImage] = useState(null);
  const [imageCID, setImageCID] = useState(null);
  const [file, setFile] = useState(null);
  const [filePrev, setFilePrev] = useState(null);

  const [state, setState] = useState({
    numberOfPlots: "",
    landLocation: "",
    titleNumber: 0,
  });

  const getSignedUrlFromPinata = async (cid) => {
  
    const fileUrl = `https://${import.meta.env.VITE_PINATA_GATEWAY}/${cid}`;
  
    console.log(fileUrl)
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: fileUrl,
        expires: 500000,
        date: Math.floor(Date.now() / 1000),
        method: 'GET',
      }),
    };
  
    try {
      const response = await fetch(import.meta.env.VITE_PINATA_API_URL, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.data)
      return data.data;
    } catch (error) {
      console.error('Error fetching signed URL from Pinata:', error);
      throw new Error('Could not fetch signed URL');
    }
  };

  const handleFileChange = async (e: any) => {
    setIsSubmitting(true);
    setFile(e.target.files[0]);
    console.log(e.target.files[0])
    console.log(file)
    if (e.target.files[0]) {
      console.log(file)
      const data = new FormData();
      data.append('name', commodityName);
      data.append('file', e.target.files[0]);

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://uploads.pinata.cloud/v3/files',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_PINATA_JWT}`
        },
        data: data
      };

      try {
        const response = await axios.request(config);

        console.log("Response data:", response.data);
        setSuccess(true);

        const reader = new FileReader();
        
        reader.onloadend = async () => {
          const base64Data = reader.result.split(",")[1];
          console.log(base64Data);
          setImage(response.data.data.id)
          setImageCID(response.data.data.cid)
          setFilePrev(base64Data)
        };

        reader.readAsDataURL(e.target.files[0]);

        toast.success("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("Failed to upload file.");
      }
    }
  };

  const handleInputChange = (data: any, e: any) => {
    setState((preState) => ({ ...preState, [data]: e.target.value }));
  };

  /**
   * Get image from Pinata using CID
   * functions is getSignedUrlFromPinata(cid) and argument is CID from uploaded imaged
  **/
  const img: any = getSignedUrlFromPinata("bafkreib5dnxhbpeg6t4g2phub653obabikvkgk3ke7djeorjm6nw34toum");
  console.log(img);

  return (
    <div className="flex flex-col items-center justify-center mt-7 mx-5 md:mx-0">
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-gray-900 text-center text-3xl font-semibold mb-6">
          Register Land
        </h2>

        <div className="flex flex-col mb-4">
          <label htmlFor="landId" className="text-gray-700 font-semibold mb-1">
            Title Number
          </label>
          <input
            type="text"
            id="landId"
            value={state.titleNumber}
            placeholder="Enter Title Number"
            onChange={(e) => handleInputChange("titleNumber", e)}
            className="bg-gray-200 border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="landSize"
            className="text-gray-700 font-semibold mb-1"
          >
            Land Location
          </label>
          <input
            type="text"
            id="landSize"
            placeholder="Enter Land Location"
            value={state.landLocation}
            onChange={(e) => handleInputChange("landLocation", e)}
            className="bg-gray-200 border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="landPrice"
            className="text-gray-700 font-semibold mb-1"
          >
            Number of Plots
          </label>
          <input
            type="text"
            id="landPrice"
            placeholder="Enter Number of Plots"
            value={state.numberOfPlots}
            onChange={(e) => handleInputChange("numberOfPlots", e)}
            className="bg-gray-200 border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col mb-4">
          <div>
            <img src={getSignedUrlFromPinata()} alt=""/>
          </div>
          {/* <label
            htmlFor="landImage"
            className="text-gray-700 font-semibold mb-1"
          >
            Upload Land Image
          </label>
          <input
            type="file"
            id="landPrice"
            placeholder="Upload land image"
            accept="image/*"
            value={state.landImage}
            onChange={(e) => handleInputChange("landImage", e)}
            className="bg-gray-200 border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          /> */}

          <label htmlFor="file-upload" className="block font-semibold mb-1 text-gray-700">
            Upload Land Image
          </label>
          <div className="relative">
            <input
              id="file-upload"
              type="file"
              className=""
              accept="image/*"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg mt-2 cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-2 pb-3">
                <Camera className="w-6 h-6 mb-3 text-gray-400" />
                <p className="mb-1 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 10MB)</p>
              </div>
            </label>
          </div>
          {file && (
            <div className="flex items-center justify-center">
              <img
                src={`data:image/png;base64,${filePrev}`}
                alt="Uploaded Preview"
                className="mt-2 h-6 w-auto rounded-lg"
              />
            </div>
            )}
        </div>


        <button
          className="bg-[#5C4033] text-white px-4 py-2 rounded-lg hover:bg-green-100 hover:text-black transition duration-300 w-full"
          onClick={() =>
            handleRegisterLand(state.numberOfPlots, state.landLocation, state.titleNumber)
          }
        >
          Register Land
        </button>
      </div>
    </div>
  );
};

export default Register;
