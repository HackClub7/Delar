import land from "../assets/landlocation.png";

import { useEffect, useState } from "react";
import Modal from "../components/Modal";

const LandDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  const handle_modalOpen_CLose = () => {
    setIsOpen((pre: boolean) => !pre);
  };

  return (
    <div className="relative  flex flex-col w-full h-screen px-6 mt-5">
      {/* buy button */}
      <div className="w-full flex justify-end">
        <button
          onClick={handle_modalOpen_CLose}
          className=" p-2 md:mr-28 mt-2 rounded-md bg-gradient-to-r from-[#ece2dd] via-[#ce9f89] to-[#aca4a0] text-black font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Buy Land
        </button>
      </div>

      {/* section for location and details */}
      <section className="w-full flex flex-col items-center md:flex-row  mt-10">
        {/* image and location */}
        <div className="mt-8 md:w-[30%] h-full flex flex-col items-center">
          <img
            src={land}
            alt=""
            className="w-full object-cover h-[100%] rounded-[20px]"
          />
          <h2 className="text-black font-bold text-lg">Location</h2>
        </div>

        {/* transaction history */}
        <div className="w-screen flex justify-start md:ml-6 md:w-[60%] h-full mt-6 md:mt-0 ">
          {isOpen && <Modal setIsOpen={setIsOpen} />}
          <table className="w-full bg-white table-auto">
            <thead>
              <tr>
                <th className="md:py-2 md:px-4 p-2 text-sm md:text-base bg-black text-left text-white whitespace-nowrap">
                  No.of plots:
                </th>
                <th className="md:py-2 md:px-4 p-2 text-sm md:text-base bg-black text-left text-white whitespace-nowrap">
                  Verified:
                </th>
                <th className="md:py-2 md:px-4 p-2 text-sm md:text-base bg-black text-left text-white whitespace-nowrap">
                  Land ID
                </th>
                <th className="md:py-2 md:px-4 p-2 text-sm md:text-base bg-black text-left text-white whitespace-nowrap">
                  Price
                </th>
                <th className="md:py-2 md:px-4 p-2 text-sm md:text-base bg-black text-left text-white whitespace-nowrap">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 flex  whitespace-nowrap  text-sm ">
                  <span className="text-sm ">
                    ddd
                  </span>
                </td>
                <td className="  text-sm whitespace-nowrap">
                <span className="text-sm ">
                    ddddd
                  </span>
                </td>
                <td className="py-3 px-4 text-sm">dddddddd</td>
                <td className="py-3 px-4">dddddd</td>
                <td className="py-3 px-4">ddddddddddddd</td>
              
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default LandDetails;
