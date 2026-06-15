import StudentResult from './components/StudentResult'
import AttendanceTracker from './components/AttendanceTracker'
import MovieBooking from './components/MovieBooking'
import DigitalClockStopwatch from './components/DigitalClockStopwatch'

const App = () => {

   const students = [
    { id: 1, name: "Arun", marks: 85 },
    { id: 2, name: "Karthik", marks: 45 },
    { id: 3, name: "Vijay", marks: 92 },
    { id: 4, name: "Ajay", marks: 35 },
  ];

    const employees = [
    {
      id: 1,
      name: "Raj",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      status: "Present",
    },
    {
      id: 2,
      name: "Arun",
      checkIn: "-",
      checkOut: "-",
      status: "Absent",
    },
    {
      id: 3,
      name: "Karthik",
      checkIn: "09:15 AM",
      checkOut: "06:10 PM",
      status: "Present",
    },
    {
      id: 4,
      name: "Vijay",
      checkIn: "-",
      checkOut: "-",
      status: "Absent",
    },
  ];

   const movies = [
    { id: 1, name: "Leo", price: 200 },
    { id: 2, name: "Jailer", price: 180 },
    { id: 3, name: "Vikram", price: 220 },
    { id: 4, name: "Master", price: 190 },
  ];

  return (
  <>
   <StudentResult students={students} />
   <AttendanceTracker employees={employees} />;
   <MovieBooking movies={movies} />;
   <DigitalClockStopwatch />;
  </>
  )
}

export default App
