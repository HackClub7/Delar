// import { Link } from "react-router-dom";
// import img from "../assets/icon.png";
import land from "../assets/landlocation.png";

import landOwner from "../assets/landOwner.png";

import { useEffect, useState } from "react";



const LandDetails = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },[isOpen])
 const  handle_modalOpen_CLose = () => {
     setIsOpen((pre:boolean)=> !pre)
  }

  return (

    <div className="flex mt-20 gap-20 w-full h-[377px] justify-center items-center">
      <div className="mt-8">
        <img src={land} alt=""  className="w-[468px] h-[335px] rounded-[20px]"/>
        <h2 className="text-white">Location</h2>

    <div className=" flex flex-col justify-center items-center w-full h-full ">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
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
              <button onClick={handle_modalOpen_CLose} className="bg-green-500 text-white mt-2 rounded-md ">
                Buy Land
              </button>
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

      <table className="w- bg-white  mt-8table-auto">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-green-300 text-left text-white whitespace-nowrap">
            Number of plots:
            </th>
            <th className="py-2 px-4 bg-green-300 text-left text-white">
            Verified:
            </th>
            <th className="py-2 px-4 bg-green-300 text-left text-white whitespace-nowrap">
              Land ID
            </th>
            <th className="py-2 px-4 bg-green-300 text-left text-white">
              Price
            </th>
            <th className="py-2 px-4 bg-green-300 text-left text-white">
              Location
            </th>
            <th className="py-2 px-4 bg-green-300 text-left text-white">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 px-4 flex items-center whitespace-nowrap">
              <span className="text-sm"></span>
            </td>
            <td className="py-3 px-4 text-sm"></td>
            <td className="py-3 px-4 text-sm"></td>
            <td className="py-3 px-4"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LandDetails;