import { useState } from "react";
import { toast } from "react-toastify"; // Import toast for notifications

interface LeaseModalProps {
  setIsOpen: (isOpen: boolean) => void;
  onConfirm: (landIndex: number, landPortion: number) => void;
}

const LeaseModal: React.FC<LeaseModalProps> = ({ setIsOpen, onConfirm }) => {
  const [landIndex, setLandIndex] = useState<number>(0);
  const [landPortion, setLandPortion] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleConfirm = () => {
    // Validate form inputs
    if (landIndex <= 0 || landPortion <= 0) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    setLoading(true); // Start loading

    // Simulate transaction (replace with real transaction logic)
    setTimeout(() => {
      setLoading(false); // Stop loading
      toast.success("Land leased successfully!");
      onConfirm(landIndex, landPortion); // Trigger confirm action
      setIsOpen(false); // Close modal after success
    }, 2000); // Mock transaction delay
  };

  const handleCancel = () => {
    setIsOpen(false); // Close modal
  };

  return (
    <div>
      <section className="fixed flex justify-center items-center left-0 right-0 top-0 bottom-0 bg-opacity-70 bg-gray-500 inset-0">
        <div className="mt-10 w-[80%] flex justify-center items-center flex-col bg-[#e5dfdd] rounded-xl shadow-lg">
          <form className="p-5 bg-white shadow-md rounded-md">
            <p className="font-serif text-2xl text-center mb-8">
              Are you sure you want to Lease This Land?
            </p>

            <label className="block mb-2 font-semibold">Land Index:</label>
            <input
              type="number"
              value={landIndex}
              onChange={(e) => setLandIndex(Number(e.target.value))}
              className="border rounded-md w-full p-2 mb-4"
              placeholder="Enter the land index"
              required
            />

            <label className="block mb-2 font-semibold">
              Portion to Sell (Plots):
            </label>
            <input
              type="number"
              value={landPortion}
              onChange={(e) => setLandPortion(Number(e.target.value))}
              className="border rounded-md w-full p-2 mb-4"
              placeholder="Enter the number of plots to sell"
              required
            />

            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="w-full lg:w-auto md:px-8 md:text-base text-sm md:py-3 px-6 py-1 rounded-lg bg-[#5C4033] text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirm}
                className="w-full lg:w-auto md:px-8 md:text-base text-sm md:py-3 px-6 py-1 rounded-lg bg-[#5C4033] text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Confirm"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LeaseModal;
