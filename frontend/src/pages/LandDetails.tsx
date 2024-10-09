import img from "../assets/icon.png";
import land from "../assets/landlocation.png";

const LandDetails = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen ">
        {/* Land Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-[1270px] ml-[90px] gap-[99px]">
          <div className="flex w-[1270px] h-[316px] mt-[217px] gap-[79px]">
            <div className="flex w-[665px] h-[277px] gap-[20px]">
              <img src={land} alt=""  className="w-[268px] h-[235px] rounded-[20px]"/>
              <div className="w-[315px] text-white h-[277px] gap-[17px]">
                <img
                  src={img}
                  alt="Land"
                  className="w-12 h-12 rounded-md mb-4"
                />
                <h3 className="text-lg  font-bold">Owner</h3>
                <p className="text-sm text-gray-700">OXmgkZR3UgYMCrpC...</p>
                <p className="text-sm text-gray-700">Land ID: PI 234009</p>
                <p className="text-xl font-semibold text-green-800 mt-2">+ 1.09 eth</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded-md mt-4">
                  Buy Land
                </button>
              </div>
            </div>
            <div className="bg-[#6CC838] text-[#ffffff] w-[526px] h-[245px] p-[20px] rounded-[20px] mr-[170px] shadow-md flex flex-col gap-[8px]">
            <h3 className="w-[486px] text-[24px] text-left font-['Object_Sans']">Title Status</h3>
            
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

        {/* Chain of Title Section */}
        <div className="mt-6">
          <div className=" w-full flex gap-[67%]">
            <h3 className="text-white font-semibold">Chain of Title</h3>
            <button className="bg-green-500 text-white text-left px-4 rounded-md">
              View all previous owners
            </button>
          </div>
          <div className="grid mr-[70px] md:grid-cols-3 gap-[20px] mt-4">
            {/* Current Owner */}
            <div className="bg-[#6CC838] text-white w-[359px] h-[481px] p-20 rounded-[20px] gap-[8px] shadow-md">
              <h4 className="font-semibold">Current Owner:</h4>
              <p className="font-medium">Name: Sarah Johnson</p>
              <p>Acquisition Date: May 15, 2023</p>
              <p>Transfer Method: Direct Purchase (Smart Contract: 0xA3F..8D91)</p>
              <p className="mt-2 text-sm text-gray-600">
                Acquired through a direct sale from the previous owner with
                verified ownership and no outstanding claims.
              </p>
            </div>

            {/* Previous Owners */}
            <div className="bg-[#90DE64] text-white w-[359px] h-[481px] p-20 rounded-[20px] gap-[8px] shadow-md">
              <h4 className="font-semibold">Previous Owner:</h4>
              <p className="font-medium">Name: Sarah Johnson</p>
              <p>Acquisition Date: May 15, 2023</p>
              <p>Transfer Method: Direct Purchase (Smart Contract: 0xA3F..8D91)</p>
              <p className="mt-2 text-sm text-gray-600">
                Acquired through a direct sale from the previous owner with
                verified ownership and no outstanding claims.
              </p>
            </div>

            <div className="bg-[#90DE64] text-white w-[359px] h-[481px] p-20 rounded-[20px] gap-[8px] shadow-md">
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
  );
};

export default LandDetails;
