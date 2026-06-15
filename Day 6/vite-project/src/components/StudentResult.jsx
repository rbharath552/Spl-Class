const StudentResult = ({ students }) => {
  const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
  );

  const averageMarks = (totalMarks / students.length).toFixed(2);

  const topper = students.reduce((top, student) =>
    student.marks > top.marks ? student : top
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Online Exam Result System
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Marks</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="text-center border-b hover:bg-gray-100"
                >
                  <td className="py-3 px-4">{student.name}</td>
                  <td className="py-3 px-4">{student.marks}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      student.marks >= 40
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {student.marks >= 40 ? "Pass" : "Fail"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-blue-100 p-4 rounded-xl text-center shadow">
            <h3 className="text-lg font-semibold text-blue-700">
              Total Marks
            </h3>
            <p className="text-2xl font-bold">{totalMarks}</p>
          </div>

          <div className="bg-green-100 p-4 rounded-xl text-center shadow">
            <h3 className="text-lg font-semibold text-green-700">
              Average Marks
            </h3>
            <p className="text-2xl font-bold">{averageMarks}</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-xl text-center shadow">
            <h3 className="text-lg font-semibold text-yellow-700">
              Topper
            </h3>
            <p className="text-xl font-bold">
              {topper.name} ({topper.marks})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentResult;