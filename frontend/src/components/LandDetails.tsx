

import icon from "../assets/icon.png"
import ether from "../assets/Eth.svg"

const LandDetails = () => {
  return (
    <div>
          <div className="flex items-center gap-2 text-white">
          <img className="w-8 h-8 rounded-full" src={icon} alt="icon"/>
          <p className="text-xs">0XmghZR3UgYMCr...pC</p>
        </div>
          <p className="text-white ">Land id: Pl 234009</p>
          <div className="flex items-center mt-4 mx-1 text-white justify-between">
            <span className="flex items-center"><img src={ether} alt=""/>1.09 eth </span>
            <button className="border rounded-2xl py-1 px-2 text-sm">see details</button>
          </div>
    </div>
  )
}

export default LandDetails