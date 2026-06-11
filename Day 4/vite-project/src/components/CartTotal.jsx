export default function CartTotal() {
  const cart = [
    { product: "Laptop", price: 50000 },
    { product: "Mouse", price: 500 },
    { product: "Keyboard", price: 1500 },
  ];

  const totalAmount = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          🛒 Shopping Cart
        </h1>

        <div className="space-y-3">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg hover:bg-blue-50 transition"
            >
              <span className="font-medium text-gray-700">
                {item.product}
              </span>
              <span className="font-semibold text-green-600">
                ₹{item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">
              Total Amount
            </span>
            <span className="text-2xl font-bold text-blue-600">
              ₹{totalAmount}
            </span>
          </div>
        </div>

        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}