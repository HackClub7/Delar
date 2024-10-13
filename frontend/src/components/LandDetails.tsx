import icon from "../assets/location.svg";

interface LandDetailsProps {
  numberOfPlots: number;
  landLocation: string;
  titleNumber: string;
  plotForSale: string;
  netWorth: number;
}

const LandDetails: React.FC<LandDetailsProps> = ({
  numberOfPlots,
  landLocation,
  titleNumber,
  plotForSale,
}) => {
  return (
    <div className="rounded-lg flex flex-col h-full px-2 mt-2">
      <div className="flex items-center text-black">
        <img className="w-6 h-6 rounded-full" src={icon} alt="icon" />
        <p className="text-xs md:text-sm truncate ml-3">{landLocation}</p>
      </div>

      <p className="text-black text-xs md:text-sm">
        Available Plots: {numberOfPlots}
      </p>
      <p className="text-black text-xs md:text-sm mt-1 font-bold">
        Title No: {titleNumber}
      </p>
      <p className="text-black text-xs md:text-sm mt-1 font-bold">
        forSale: {plotForSale}
      </p>
    </div>
  );
};

export default LandDetails;
