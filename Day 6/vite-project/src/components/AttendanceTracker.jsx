import { useState } from "react";

const AttendanceTracker = ({ employees }) => {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const presentEmployees = employees.filter(
    (emp) => emp.status === "Present"
  );

  const absentEmployees = employees.filter(
    (emp) => emp.status === "Absent"
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Employee Attendance Tracker
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search Employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-100 p-5 rounded-xl shadow text-center">
            <h2 className="font-semibold text-green-700">
              Present Employees
            </h2>
            <p className="text-3xl font-bold">
              {presentEmployees.length}
            </p>
          </div>

          <div className="bg-red-100 p-5 rounded-xl shadow text-center">
            <h2 className="font-semibold text-red-700">
              Absent Employees
            </h2>
            <p className="text-3xl font-bold">
              {absentEmployees.length}
            </p>
          </div>

          <div className="bg-blue-100 p-5 rounded-xl shadow text-center">
            <h2 className="font-semibold text-blue-700">
              Total Present Count
            </h2>
            <p className="text-3xl font-bold">
              {presentEmployees.length}
            </p>
          </div>
        </div>

        {/* Employee Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3">Employee Name</th>
                <th className="p-3">Check In</th>
                <th className="p-3">Check Out</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-b text-center hover:bg-gray-100"
                >
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.checkIn}</td>
                  <td className="p-3">{emp.checkOut}</td>
                  <td
                    className={`p-3 font-semibold ${
                      emp.status === "Present"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {emp.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredEmployees.length === 0 && (
            <p className="text-center text-red-500 mt-4">
              No Employee Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;