

const Home = () => {
  return (
    <div className="text-[#FFFFFF] w-[1259.8px] h-[819px] mt-[132px] ml-[90px] gap-[20px] flex">
      <div className="w-[407.8px] h-[730.28px] p-[48px]">
        <div className="w-[399px] h-[260px] p-[32px]">
          <h2 className="w-[399px] h-[200px] text-5xl tracking-negative-5 font-normal tracking-negative-5 leading-[45.5px]">Revolutionizing Land Ownership with Blockchain</h2>
          <p className="w-[299px] h-[78px] ">Secure transparent, and borderless land transactions, powered by smart contracts</p>
        </div>
        <div className="w-[407.8px] h-[422.28px]">
          <button className="w-[183px] h-[47px] mt-[56.92px] ml-[110.7px] rounded-[12px] border-[1px]">Buy Land</button>
          {/* <div className="w-[83.09px] h-[96.81px] mt-[150.95px] ml-[171.18px] rounded-[161.05] rotate-[-19.95]"> */}

          {/* </div> */}
          <button className="w-[183px] h-[47px] mt-[201.92px] ml-[110.7px] rounded-[12px] border-[1px]">Sell Land</button>
        </div>
      </div>
      <div className="w-[832px] h-[819px] rounded-[20px]">
        <img src={''} alt="" className="w-[470px] h-[602px] ml-[427] rounded-[20px] border-[3px]"/>


      </div>
    </div>
  )
}

export default Home