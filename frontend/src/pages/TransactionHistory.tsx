

import land from "../assets/landbloc.png";

interface Transaction {
  id: string;
  price: string;
  location: string;
  status: "Pending" | "Confirmed" | "Cancelled";
}

const transactions: Transaction[] = [
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

const getStatusClasses = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-400 text-yellow-800";
    case "Confirmed":
      return "bg-green-400 text-green-800";
    case "Cancelled":
      return "bg-red-400 text-red-800";
    default:
      return "";
  }
};

const TransactionHistory = () => {
  return (
    <div className="flex justify-center">
            <div className="bg-green-200 shadow-md rounded-lg overflow-x-auto  h-full max-w-4xl mt-10 mx-4">
        <h2 className="text-xl font-semibold text-gray-800 p-4 bg-green-300">
          Transaction History
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-green-500 text-left text-white whitespace-nowrap">
                  Transaction ID
                </th>
                <th className="py-2 px-4 bg-green-500 text-left text-white">
                  Price
                </th>
                <th className="py-2 px-4 bg-green-500 text-left text-white">
                  Location
                </th>
                <th className="py-2 px-4 bg-green-500 text-left text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 flex items-center whitespace-nowrap">
                    <img
                      src={land}
                      alt="transaction"
                      className="w-10 h-10 mr-3 hidden md:block"
                    />
                    <span className="text-sm">{transaction.id}</span>
                  </td>
                  <td className="py-3 px-4 text-sm">{transaction.price}</td>
                  <td className="py-3 px-4 text-sm">{transaction.location}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`py-1 px-3 rounded-full text-sm ${getStatusClasses(
                        transaction.status
                      )}`}
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
    </div>
    
  );
};

export default TransactionHistory;
