import { useEffect, useState } from "react";

const DigitalClockStopwatch = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Digital Clock
  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  // Stopwatch
  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, "0");
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  const handleStart = () => setIsRunning(true);

  const handleStop = () => setIsRunning(false);

  const handleResume = () => setIsRunning(true);

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">
          Digital Clock & Stopwatch
        </h1>

        {/* Current Time */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-600">
            Current Time
          </h2>
          <p className="text-4xl font-bold text-indigo-700 mt-2">
            {currentTime}
          </p>
        </div>

        {/* Stopwatch */}
        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-3">
            Stopwatch
          </h2>

          <p className="text-5xl font-bold text-purple-700 mb-6">
            {formatTime(seconds)}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={handleStart}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Start
            </button>

            <button
              onClick={handleStop}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Stop
            </button>

            <button
              onClick={handleResume}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Resume
            </button>

            <button
              onClick={handleReset}
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalClockStopwatch;