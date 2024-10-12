// import { Link } from "react-router-dom";
// import img from "../assets/icon.png";
import land from "../assets/landlocation.png";


const LandDetails = () => {

  return (
    <div className="flex mt-20 gap-20 w-full h-[377px] justify-center items-center">
      <div className="mt-8">
        <img src={land} alt=""  className="w-[468px] h-[335px] rounded-[20px]"/>
        <h2 className="text-white">Location</h2>
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