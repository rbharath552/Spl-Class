import { useState } from "react";

const MovieBooking = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [seats, setSeats] = useState(1);

  const movie = movies.find((m) => m.id === Number(selectedMovie));

  const totalAmount = movie ? movie.price * seats : 0;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Movie Ticket Booking
        </h1>

        {/* Movie Selection */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Select Movie
          </label>
          <select
            value={selectedMovie}
            onChange={(e) => setSelectedMovie(e.target.value)}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Choose a Movie</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name} - ₹{movie.price}
              </option>
            ))}
          </select>
        </div>

        {/* Seat Selection */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">
            Number of Seats
          </label>
          <input
            type="number"
            min="1"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Total Amount */}
        <div className="bg-blue-100 p-4 rounded-lg mb-4">
          <h2 className="font-semibold text-blue-700">
            Total Amount
          </h2>
          <p className="text-2xl font-bold">₹{totalAmount}</p>
        </div>

        {/* Booking Summary */}
        {movie && (
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold text-green-700 mb-2">
              Booking Summary
            </h2>

            <p>
              <strong>Movie:</strong> {movie.name}
            </p>

            <p>
              <strong>Seats:</strong> {seats}
            </p>

            <p>
              <strong>Price per Ticket:</strong> ₹{movie.price}
            </p>

            <p>
              <strong>Total Amount:</strong> ₹{totalAmount}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieBooking;