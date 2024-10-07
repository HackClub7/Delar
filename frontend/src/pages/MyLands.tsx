import LandDetails from "../components/LandDetails"
import card from "../assets/cards.png"

const MyLands = () => {
  return (
    <div className="container mx-auto px-4">
        <h2 className="text-white m-4">My Lands</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4  md:w-full md:grid-cols-3 gap-4 mx-auto">
            {Array(4).fill(0).map((_, index) => (
              <div
                key={index}
              className="bg-green-200 border border-green-200 rounded-3xl w-full sm:w-auto h-auto sm:h-auto flex flex-col"
              >
                <div className="p-2 text-white text-center">
                  <img src={card} alt="card" className="mx-auto mb-2" />
                  <p>Owner</p>
                </div>
                <LandDetails />
              </div>
            ))}
          </div>
    </div>
  )
}

export default MyLands