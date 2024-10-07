// import card from "../assets/card.png";

import land from "../assets/landOverview.png";
import Availables from "../components/Availables";
import LandDetails from "../components/LandDetails";

const BuyersPage = () => {
  return (
    <div className=" h-[900px]">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-5xl grid grid-cols-2 gap-8">
          <div className="text-center">
            <p className=" text-white mb-4">Recently Listed</p>
            <div className="grid grid-cols-3 gap-20 ml-4">
              <div className="bg-green-200 border border-green-200 rounded-3xl w-[180px] h-[320px]">
                <div className="px-2 py-4 text-white">
                  <img src={card} alt="card" />
                  <p>Owner</p>
                </div>
                <LandDetails />
              </div>
              <div className="bg-green-200 border border-green-200 rounded-3xl w-[180px] h-[320px]">
                <div className="px-2 py-4 text-white">
                  <img src={card} alt="card" />
                  <p>Owner</p>
                </div>
                <LandDetails />
              </div>
              <div className="bg-green-200 border border-green-200 rounded-3xl w-[180px] h-[320px]">
                <div className="px-2 py-4 text-white">
                  <img src={card} alt="card" />
                  <p>Owner</p>
                </div>
                <LandDetails />
              </div>
            </div>
            <div className="">
              <p className="text-white p-4">Availabel Listing</p>
              <div className=" bg-green-200 rounded-2xl w-[600px] h-[300px]">
                <div className="flex items-center justify-between mx-8 pt-4 text-white">
                  <p>Owner</p>
                  <p>Price</p>
                  <p>Location</p>
                  <p className="text-green-300">Monitor</p>
                </div>
                <hr className="border-t-2 border-green-300 mx-4 mt-3" />
              <Availables/>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white mb-4">Hottest Land</p>

            <div className="relative w-[300px] h-[700px] mx-auto">
              <img
                className="w-full h-full object-cover rounded-3xl"
                src={land}
                alt="land"
              />

              <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/60 to-transparent rounded-3xl">
                <div className="w-full">
                  <LandDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersPage;
