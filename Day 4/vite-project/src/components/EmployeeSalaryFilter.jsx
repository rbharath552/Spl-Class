export default function EmployeeSalaryFilter() {
  const employees = [
    { id: 1, name: "John", salary: 25000 },
    { id: 2, name: "David", salary: 45000 },
    { id: 3, name: "Sam", salary: 60000 },
    { id: 4, name: "Peter", salary: 30000 },
  ];

  const highSalaryEmployees = employees.filter(
    (employee) => employee.salary > 40000
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Employees with Salary Greater Than ₹40,000
        </h1>

        <div className="space-y-4">
          {highSalaryEmployees.map((employee) => (
            <div
              key={employee.id}
              className="bg-blue-50 border border-blue-200 rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {employee.name}
              </h2>

              <p className="mt-2 text-gray-600">
                <span className="font-medium">Salary:</span>
                <span className="text-green-600 font-bold ml-2">
                  ₹{employee.salary.toLocaleString()}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Total Employees: {highSalaryEmployees.length}
          </span>
        </div>
      </div>
    </div>
  );
}