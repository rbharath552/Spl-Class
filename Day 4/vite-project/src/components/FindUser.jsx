export default function FindUser() {
  const users = [
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Kumar" },
    { id: 3, name: "Ravi" },
  ];

  const user = users.find((u) => u.id === 2);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Find User
        </h1>

        {user ? (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4">
            <div>
              <p className="text-gray-500 text-sm">User ID</p>
              <p className="text-xl font-semibold text-gray-800">
                {user.id}
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-sm">User Name</p>
              <p className="text-xl font-semibold text-gray-800">
                {user.name}
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-red-100 text-red-600 p-4 rounded-lg text-center font-medium">
            User Not Found
          </div>
        )}

        <div className="mt-6 text-center">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            User Found Successfully
          </span>
        </div>
      </div>
    </div>
  );
}