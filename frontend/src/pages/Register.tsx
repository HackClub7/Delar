import useRegisterLand from "../hooks/useRegisterLand";
import { useState } from "react";

const Register = () => {
  
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<LandFormInputs>();

  // const onSubmit: SubmitHandler<LandFormInputs> = (data) => {
  //   console.log("Form Data: ", data);
    
  // };

  // const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files) {
  //     setSelectedFiles(event.target.files);
  //   }
  // };

  const handleRegisterLand = useRegisterLand();

  const [state, setState] = useState({
    numberOfPlots: "",
    landLocation: "",
    titleNumber: 0,
  });

  const handleInputChange = (data: any, e: any) => {
    setState((preState) => ({ ...preState, [data]: e.target.value }));
  };

  const { numberOfPlots, landLocation, titleNumber } = state; 

  // const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  //   if (event.dataTransfer.files) {
  //     setSelectedFiles(event.dataTransfer.files);
  //   }
  // };

  // const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  // };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h2 className="text-white text-center font-semibold">Lease Land</h2>
      
          <div className="flex flex-col">
            <label htmlFor="landId" className="text-gray-700 font-semibold mb-1">
              Title Number
            </label>
            <input
              type="text"
              id="landId"
              value={titleNumber}
              placeholder="Enter Tittle Number"
              onChange={(e) => handleInputChange("titleNumber", e)}
              className="bg-gray-200 border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="landSize" className="text-gray-700 font-semibold mb-1">
              Land Location
            </label>
            <input
              type="text"
              id="landSize"
              placeholder="Enter Land Location"
              value={landLocation}
              onChange={(e) => handleInputChange("landLocation", e)}
              className="bg-gray-200 border border-gray-400 rounded-lg p-2  focus:ring-2 focus:ring-blue-400"
             
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="landPrice" className="text-gray-700 font-semibold mb-1">
              Number of Plots
            </label>
            <input
              type="text"
              id="landPrice"
              placeholder="Enter Number of Plolts"
              value={numberOfPlots}
              onChange={(e) => handleInputChange("numberOfPlots", e)}
              className="bg-gray-200 border border-gray-400 rounded-lg p-2  focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            className="bg-green-300 text-white px-4 py-2  rounded-lg hover:bg-green-200 transition duration-300 w-full"
            onClick={() => handleRegisterLand(numberOfPlots, landLocation, titleNumber)}
          >
            Lease Land
          </button>
        
      </div>
  );
};

export default Register;
