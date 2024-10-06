import card from "../assets/card.png"

const BuyersPage = () => {
  return (
    <div className="">
      <div className="text-white flex items-center justify-between w-3/5">
        <p>Recently Listed</p>
        <p>Hottest Land</p>
      </div>
        <div className="bg-green-200 border rounded-xl w-[240px] h-[320px]">
          <div className="px-2 py-4 text-white">
          <img src={card} alt="card"/>
          <p>Owner</p>
          </div>

        </div>
    </div>
  )
}

export default BuyersPage