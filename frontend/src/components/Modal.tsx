import React from "react"

interface ModalProps{
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({setIsOpen}:ModalProps) => {
    const handle_modal_close = () => {
        setIsOpen((prev:boolean)=> !prev)
    }
  return (
      <section className="fixed flex justify-center items-center left-0 right-0 top-0 bottom-0 bg-opacity-70 bg-gray-500 inset-0">
          <div className=" h-[400px] w-[400px] flex justify-center align-middle items-center flex-col bg-white  shadow-lg">
          <p className="font-serif text-2xl text-center">Are you sure you want to continue with this transaction ??</p>
          <div className="mt-4 flex flex-row justify-between align-middle items-center">
              <button onClick={handle_modal_close} className=" border border-red-400 p-2 rounded-lg ">
                  No,Cancel
             </button>
              <button className=" border border-red-400 p-2 rounded-lg ml-4 ">
                  Yes, continue
             </button>
          </div>
          </div>
    </section>
  )
}


export default Modal

