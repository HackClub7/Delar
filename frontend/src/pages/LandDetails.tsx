import { Link } from "react-router-dom";
import img from "../assets/icon.png";
import land from "../assets/landlocation.png";
import landOwner from "../assets/landOwner.png";

const LandDetails = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full h-full ">
      <div className="flex w-full h-full gap-[10px] justify-center items-center">
        <div className="flex w-[600px] h-[277px] justify-center mr-8 items-center">
          <img src={land} alt=""  className="w-[268px] h-[235px] rounded-[20px]"/>
          <div className="w-[355px] text-white p-8 h-[277px]">
            <h3 className="text-lg  font-bold">Owner</h3>
            <div className="flex">
              <img
              src={img}
              alt="Land"
              className="w-8 h-8 rounded-md"
              />
              <p className="text-sm text-gray-700">OXmgkZR3UgYMCrpC...</p>
            </div>
            <p className="text-sm text-gray-700">Land ID: <br /> PI 234009</p>
            <p>Price:</p>
            <p className="text-xl font-semibold text-green-800 mt-2">+ 1.09 eth</p>
            <Link to={"/transactionhistory"}>
              <button className="bg-green-500 text-white mt-2 rounded-md ">
                Buy Land
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-[#6CC838] text-[#ffffff] w-[406px] h-[245px] p-[20px] rounded-[20px] shadow-md flex flex-col">
          <h3 className="w-[306px] text-[24px] text-left font-['Object_Sans']">Title Status</h3>
          
          <div className="flex justify-between">
            <p>Encumbrances:</p>
            <span>none</span>
          </div>

          <div className="flex justify-between">
            <p>Disputes:</p>
            <span>none</span>
          </div>

          <div className="flex justify-between">
            <p>Survey Verification:</p>
            <span>Verified</span>
          </div>

          <div className="flex justify-between">
            <p>Smart Contract:</p>
            <span>0xDF3..F1A2</span>
          </div>

          <div className="flex justify-between">
            <p>Last Updated:</p>
            <span>October 6, 2024</span>
          </div>
        </div>

      </div>
          
      <div className="text-white w-[1100px] col-span-1 md:col-span-3 mt-6">
        <h3 className="text-white font-semibold">Land Description</h3>
        <p className="text-white mt-2">
          Lorem ipsum dolor sit amet consectetur. Blandit adipiscing lectus
          odio netus sed nam lobortis amet. Id ut lorem magna iaculis
          suspendisse eget. Pharetra sed egestas auctor eget. Aliquam
          sodales quis enim amet blandit in natoque sed elementum.
        </p>
      </div>

      <div className="mt-10 gap-8 w-[1145px]">
        <div className="grid items-center p-8 gap-20 justify-center md:grid-cols-3">
          <div className="">
            <h3 className="text-white font-semibold ml-8 mb-2">Chain of Title</h3>
            <div className="bg-[#6CC838] text-white w-[259px] h-[311px] p-8 rounded-[20px] shadow-md">
              <h4 className="font-semibold">Current Owner:</h4>
              <p className="font-medium">Name: Sarah Johnson</p>
              <p>Acquisition Date: May 15, 2023</p>
              <p>Transfer Method: Direct Purchase (Smart Contract: 0xA3F..8D91)</p>
              <p className="mt-2 text-sm text-gray-600">
                Acquired through a direct sale from the previous owner with
                verified ownership and no outstanding claims.
              </p>
            </div>
          </div>
          

          <img src={landOwner} alt=""  className="w-[259px]"/>

          {/* Previous Owners */}
          <div>
            <button className="bg-green-500 text-white ml-8 p-2 mb-2 rounded-md">
              View all previous owners
            </button>
            <div className="bg-[#90DE64] text-white w-[259px] h-[300px] p-8 rounded-[20px] shadow-md">
              <h4 className="font-semibold">Previous Owner:</h4>
              <p className="font-medium">Name: Sarah Johnson</p>
              <p>Acquisition Date: May 15, 2023</p>
              <p>Transfer Method: Direct Purchase (Smart Contract: 0xA3F..8D91)</p>
              <p className="mt-2 text-sm text-gray-600">
                Acquired through a direct sale from the previous owner with
                verified ownership and no outstanding claims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandDetails;
