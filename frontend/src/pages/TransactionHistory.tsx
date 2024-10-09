import land from "../assets/landbloc.png";

const transactions = [
  {
    id: "0XmgkZR3UgYMCrpC654925374920v",
    price: "1.09 eth",
    location: "Rayfield, Jos",
    status: "Pending",
  },
  {
    id: "0XmgkZR3UgYMCrpC654925374920v",
    price: "1.09 eth",
    location: "Rayfield, Jos",
    status: "Confirmed",
  },
  {
    id: "0XmgkZR3UgYMCrpC654925374920v",
    price: "1.09 eth",
    location: "Rayfield, Jos",
    status: "Confirmed",
  },
  {
    id: "0XmgkZR3UgYMCrpC654925374920v",
    price: "1.09 eth",
    location: "Rayfield, Jos",
    status: "Cancelled",
  },
];

const statusClasses = {
  Pending: "bg-yellow-400 text-yellow-800",
  Confirmed: "bg-green-400 text-green-800",
  Cancelled: "bg-red-400 text-red-800",
};

const TransactionHistory = () => {
  return (
    <div className="p-6 min-h-screen flex items-center justify-center">
      <div className="bg-green-200 shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-800 p-4 bg-green-300">
          Transaction History
        </h2>
        <table className="w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-green-500 text-left text-white">Transaction ID</th>
              <th className="py-2 px-4 bg-green-500 text-left text-white">Price</th>
              <th className="py-2 px-4 bg-green-500 text-left text-white">Location</th>
              <th className="py-2 px-4 bg-green-500 text-left text-white">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-4 flex items-center">
                  <img
                    src={land}
                    alt="transaction"
                    className="w-10 h-10 mr-3"
                  />
                  {transaction.id}
                </td>
                <td className="py-3 px-4">{transaction.price}</td>
                <td className="py-3 px-4">{transaction.location}</td>
                <td className="py-3 px-4">
                    <span
                        className={`py-1 px-3 rounded-full text-sm ${
                            transaction.status === "Pending"
                            ? "bg-yellow-400 text-yellow-800"
                            : transaction.status === "Confirmed"
                            ? "bg-green-400 text-green-800"
                            : "bg-red-400 text-red-800"
                        }`}
                        >
                        {transaction.status}
                    </span>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
