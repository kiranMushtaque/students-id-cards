// components/Card.tsx
import React from "react";

interface CardProps {
  Name: string;
  RollNo: number;
  day: string;
  ClassName?: string; // Optional prop for Class Name
}

const Card: React.FC<CardProps> = ({ Name, RollNo, day, ClassName }) => {
  return (
    <div className="max-h-48 text-center flex flex-col items-center justify-center p-6 rounded-xl font-serif shadow-lg border border-gray-400 w-full max-w-xs mx-auto">
      <div className="bg-slate-300 w-full p-4 rounded-xl">
        <h1 className="font-bold">Name: {Name}</h1>
        <h2>Roll No: {RollNo}</h2>
        <h2>Day: {day}</h2>
        {ClassName && <h2>Class: {ClassName}</h2>}{" "}
        {/* Render ClassName if provided */}
      </div>
    </div>
  );
};

export default Card;
