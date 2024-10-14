import DashSections from "./DashSections";
import Table from "../../components/Table";
const DashBoard = () => {
  return (
    <div className="w-full md:p-10">
      <h2 className="text-[#5C4033] font-bold text-2xl ml-8 md:ml-0">DashBoard</h2>
      <div className="bg-white">
        {/* dash sections  */}
        <div className="mt-8 flex flex-row items-center justify-between w-[65%]">
          <DashSections/>
          <DashSections/>
          <DashSections/>
          <DashSections/>
        </div>

        {/* registerd lands */}
        <div className="mt-10">
          <h2 className="text-[#5C4033] font-bold text-2xl md:text-3xl ml-8 md:ml-0">Registered lands</h2>
          <div className=" w-full md:w-[70%] mt-6">
              <Table/>
           </div>
        </div>
      </div>
    </div> 
  );
};

export default DashBoard;
