export default function StudentManagementSystem() {
  const students = [
    { id: 1, name: "Arun", mark: 85 },
    { id: 2, name: "Karthik", mark: 45 },
    { id: 3, name: "Vijay", mark: 92 },
    { id: 4, name: "Ajay", mark: 35 },
  ];

  // filter()
  const passedStudents = students.filter(
    (student) => student.mark >= 50
  );

  // find()
  const foundStudent = students.find(
    (student) => student.id === 3
  );

  // reduce()
  const totalMarks = students.reduce(
    (total, student) => total + student.mark,
    0
  );

  const averageMark = totalMarks / students.length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Student Management System
        </h1>

        {/* All Students */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            All Students (map)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="border rounded-lg p-4"
              >
                <p>
                  <strong>ID:</strong> {student.id}
                </p>
                <p>
                  <strong>Name:</strong> {student.name}
                </p>
                <p>
                  <strong>Mark:</strong> {student.mark}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Passed Students */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Passed Students (filter)
          </h2>

          {passedStudents.map((student) => (
            <div
              key={student.id}
              className="border rounded-lg p-4 mb-3 bg-green-50"
            >
              <p>
                <strong>Name:</strong> {student.name}
              </p>
              <p>
                <strong>Mark:</strong> {student.mark}
              </p>
            </div>
          ))}
        </div>

        {/* Found Student */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Student with ID = 3 (find)
          </h2>

          <div className="border rounded-lg p-4 bg-blue-50">
            <p>
              <strong>ID:</strong> {foundStudent.id}
            </p>
            <p>
              <strong>Name:</strong> {foundStudent.name}
            </p>
            <p>
              <strong>Mark:</strong> {foundStudent.mark}
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Statistics (reduce)
          </h2>

          <div className="space-y-3">
            <p className="text-lg">
              <strong>Total Marks:</strong> {totalMarks}
            </p>

            <p className="text-lg">
              <strong>Average Mark:</strong>{" "}
              {averageMark.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}