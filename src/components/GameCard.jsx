import React, { useEffect, useState } from "react";

export default function Game() {
  const [pointsA, setPointsA] = useState([1]);
  const [pointsB, setPointsB] = useState([1]);
  const [status, setStatus] = useState("Same points");

  useEffect(() => {
    if (pointsA > pointsB) {
      setStatus("A is winning");
    } else if (pointsA < pointsB) {
      setStatus("B is winning");
    } else {
      setStatus("Same point");
    }
  }, [pointsA, pointsB]);

  const handleRace = () => {
    const randomIncrement = Math.random() < 0.5 ? "A" : "B";
    if (randomIncrement === "A") {
      setPointsA((prePoints) => [...prePoints, 1]);
    } else {
      setPointsB((prePoints) => [...prePoints, 1]);
    }
  };

  const handleReset = () => {
    setPointsA([1]);
    setPointsB([1]);
    setStatus("Same point");
  };
  return (
    <div className="container mx-auto p-4">
      <div className="text-left">
        <div className="score font-bold">{status}</div>
        <div>
          <p>
            Character A:{" "}
            <div className="flex items-center">
              {pointsA.map((_, index) => (
                <span
                  key={index}
                  className="bg-green-700 h-5 w-10 border-black border-2 ml-1"
                ></span>
              ))}
            </div>
          </p>
          <p>
            Character B:{" "}
            <div className="flex items-center">
              {pointsB.map((_, index) => (
                <span
                  key={index}
                  className="bg-green-700 h-5 w-10 border-black border-2 ml-1"
                ></span>
              ))}
            </div>
          </p>
        </div>
        <div className="mt-2">
          <button
            className="bg-green-600 p-1 rounded-lg w-16 mr-2"
            onClick={handleRace}
          >
            Race
          </button>
          {(pointsA.length > 1 || pointsB.length > 1) && (
            <button
              className="bg-red-500 p-1 rounded-lg w-16"
              onClick={handleReset}
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
