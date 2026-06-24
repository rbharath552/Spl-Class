import { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeForm() {
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState("");

  const [form, setForm] = useState({
    name: "",
    salary: "",
    experience: "",
    employeesManaged: "",
    testingTool: "",
    teamSize: "",
  });

  // Fetch departments from backend
  useEffect(() => {
     const fetchDepartments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/departments"
      );

      setDepartments(res.data.departments);
    } catch (error) {
      console.log(error);
    }
  };
  fetchDepartments();
  }, []);

 

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      department,
      ...form,
    };

    console.log(employeeData);

    alert("Employee Data Submitted");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-5 text-center">
        Employee Form
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Department Dropdown */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Department
          </label>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Department</option>

            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Developer Fields */}
        {department === "Developer" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-3"
            />

            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={form.salary}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-3"
            />

            <input
              type="text"
              name="experience"
              placeholder="Experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-3"
            />
          </>
        )}

        {/* HR Fields */}
        {department === "HR" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-3"
            />

            <input
              type="number"
              name="employeesManaged"
              placeholder="Employees Managed"
              value={form.employeesManaged}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-3"
            />
          </>
        )}

        {/* Tester Fields */}
        {department === "Tester" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-3"
            />

            <input
              type="text"
              name="testingTool"
              placeholder="Testing Tool"
              value={form.testingTool}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-3"
            />
          </>
        )}

        {/* Manager Fields */}
        {department === "Manager" && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-3"
            />

            <input
              type="number"
              name="teamSize"
              placeholder="Team Size"
              value={form.teamSize}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mb-3"
            />
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}