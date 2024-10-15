/* eslint-disable @typescript-eslint/no-explicit-any */
import useRegisterLand from "../hooks/useRegisterLand";
import { useState } from "react";

const Register = () => {
  const handleRegisterLand = useRegisterLand();

  const [state, setState] = useState({
    numberOfPlots: "",
    landLocation: "",
    titleNumber: 0,
  });

  const handleInputChange = (data: any, e: any) => {
    setState((preState) => ({ ...preState, [data]: e.target.value }));
  };


  return (
    <div className="flex flex-col items-center justify-center mt-7 mx-5 md:mx-0">
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-gray-900 text-center text-3xl font-semibold mb-6">
          Lease a Land
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
        {/* land description */}
        {/* <div className="w-full md:w-[85%] md:h-52">
          <label className="text-xs font-medium">Land Description</label>
          <textarea
            name="message"
            value={state.landDescription}
            placeholder="Enter a detailed description of your land"
            id="" rows={4} cols={40} onChange={(e) => handleInputChange("landDescription", e)}
            className="bg-gray-200 border border-gray-400 outline-none rounded-lg p-2 focus:ring-2 focus:ring-blue-400"

          />
        </div> */}

        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-300 transition duration-300 w-full"
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
