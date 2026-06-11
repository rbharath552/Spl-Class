export default function ProductCardRendering() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Keyboard", price: 1500 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
          Product Catalog
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Total Products: {products.length}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  Product #{product.id}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {product.name}
              </h2>

              <p className="text-3xl font-bold text-green-600">
                ₹{product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}