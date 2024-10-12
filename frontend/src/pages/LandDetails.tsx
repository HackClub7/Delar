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
    <div className="flex mt-20 gap-20 w-full h-[377px] justify-center items-center">
      <div className="mt-8">
        <img src={land} alt="" className="w-[468px] h-[335px] rounded-[20px]" />
        <h2 className="text-white">Location</h2>
      </div>
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        {isOpen && <Modal setIsOpen={setIsOpen} />}
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

        <button
          onClick={handle_modalOpen_CLose}
          className="bg-green-200 text-white mt-2 rounded-md "
        >
          Buy Land
        </button>
      </div>
    </div>
  );
};

export default LandDetails;
