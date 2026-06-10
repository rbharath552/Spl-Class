import { useState, useRef, useEffect } from "react";

export default function PreviousSearchTracker() {
  const [search, setSearch] = useState("");
  const [previousSearch, setPreviousSearch] = useState("");

  const prevRef = useRef("");

  useEffect(() => {
    setPreviousSearch(prevRef.current);
    prevRef.current = search;
  }, [search]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">
          Previous Search Tracker
        </h1>

        <input
          type="text"
          placeholder="Type here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        <p className="mb-2">
          <strong>Current Search:</strong> {search || "None"}
        </p>

        <p>
          <strong>Previous Search:</strong> {previousSearch || "None"}
        </p>
      </div>
    </div>
  );
}