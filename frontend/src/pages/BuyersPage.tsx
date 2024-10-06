import card from "../assets/card.png";
import land from "../assets/landOverview.png";
import Availables from "../components/Availables";
import LandDetails from "../components/LandDetails";

const BuyersPage = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-0 flex flex-col items-center justify-center ">
      <div className="w-full  max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="text-center">
          <p className="text-white mb-4 text-lg md:text-xl">Recently Listed</p>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:w-full md:grid-cols-3 gap-8 mx-4">
            {Array(3).fill(0).map((_, index) => (
              <div
                key={index}
              className="bg-green-200 border border-green-200 rounded-3xl w-full sm:w-auto h-[320px] sm:h-auto flex flex-col"
              >
                <div className="px-2 py-4 text-white text-center">
                  <img src={card} alt="card" className="mx-auto mb-2" />
                  <p>Owner</p>
                </div>
                <LandDetails />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-white p-4 text-lg md:text-xl">Available Listings</p>
            <div className="bg-green-200 rounded-2xl w-full md:w-[550px] h-[300px] mx-auto">
              <div className="flex items-center justify-between mx-8 pt-4 text-white">
                <p>Owner</p>
                <p>Price</p>
                <p>Location</p>
                <p className="text-green-300">Monitor</p>
              </div>
              <hr className="border-t-2 border-green-300 mx-4 mt-3" />
              <Availables />
            </div>
          </div>
        </div>

    
        <div className="text-center">
          <p className="text-white mb-4 text-lg md:text-xl">Hottest Land</p>
          <div className="relative w-full max-w-xs md:max-w-sm h-[700px] mx-auto">
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
  );
};

export default BuyersPage;
