import { useState } from "react";

export default function EmployeeRegistration() {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      employee.name.trim() === "" ||
      employee.department.trim() === "" ||
      employee.salary === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    setEmployees([...employees, employee]);

    setEmployee({
      name: "",
      department: "",
      salary: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Employee Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">
              Employee Name
            </label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              placeholder="Enter department"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Salary
            </label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Add Employee
          </button>
        </form>

        <hr className="my-6" />

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-green-600">
            Total Employees: {employees.length}
          </h3>
        </div>

        <h3 className="text-2xl font-bold mb-4">Employee List</h3>

        {employees.length === 0 ? (
          <p className="text-gray-500 text-center">
            No Employees Added
          </p>
        ) : (
          <div className="space-y-3">
            {employees.map((emp, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {emp.name}
                </p>
                <p>
                  <span className="font-semibold">
                    Department:
                  </span>{" "}
                  {emp.department}
                </p>
                <p>
                  <span className="font-semibold">Salary:</span> ₹
                  {emp.salary}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}