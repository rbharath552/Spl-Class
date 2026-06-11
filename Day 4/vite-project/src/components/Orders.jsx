export default function Orders() {
  const orders = [
    { id: 1, customer: "John", amount: 5000, status: "Completed" },
    { id: 2, customer: "David", amount: 3000, status: "Pending" },
    { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
    { id: 4, customer: "Peter", amount: 2000, status: "Pending" },
  ];

  // Filter completed orders
  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );

  // Find order with ID = 3
  const foundOrder = orders.find((order) => order.id === 3);

  // Calculate total revenue
  const totalRevenue = orders.reduce(
    (total, order) => total + order.amount,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Orders Dashboard
        </h1>

        {/* All Orders */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">All Orders (map)</h2>

          {orders.map((order) => (
            <div
              key={order.id}
              className="flex justify-between items-center border-b py-2"
            >
              <div>
                <p className="font-medium">{order.customer}</p>
                <p className="text-sm text-gray-500">
                  Order ID: {order.id}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">₹{order.amount}</p>
                <p
                  className={`text-sm ${
                    order.status === "Completed"
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                >
                  {order.status}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Completed Orders */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Completed Orders (filter)
          </h2>

          {completedOrders.map((order) => (
            <div
              key={order.id}
              className="flex justify-between border-b py-2"
            >
              <span>{order.customer}</span>
              <span className="text-green-600 font-semibold">
                ₹{order.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Find Order */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Find Order ID = 3 (find)
          </h2>

          <p>
            <strong>Customer:</strong> {foundOrder.customer}
          </p>
          <p>
            <strong>Amount:</strong> ₹{foundOrder.amount}
          </p>
          <p>
            <strong>Status:</strong> {foundOrder.status}
          </p>
        </div>

        {/* Total Revenue */}
        <div className="bg-blue-600 text-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">
            Total Revenue (reduce)
          </h2>

          <p className="text-3xl font-bold">
            ₹{totalRevenue}
          </p>
        </div>
      </div>
    </div>
  );
}