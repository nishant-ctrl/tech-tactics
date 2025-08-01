import React from "react";
import { FaTrophy } from "react-icons/fa";

const rounds = [
    {
        number: "01",
        title: "ROUND 1",
        description: "Fundamentals & Basics",
        borderColor: "border-blue-500",
        gradient: "from-blue-500 to-purple-500",
    },
    {
        number: "02",
        title: "ROUND 2",
        description: "Intermediate Concepts",
        borderColor: "border-pink-500",
        gradient: "from-pink-500 to-purple-500",
    },
    {
        number: "03",
        title: "ROUND 3",
        description: "Advanced & Expert",
        borderColor: "border-cyan-400",
        gradient: "from-cyan-400 to-blue-400",
    },
];

const TechQuizHome = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f051d] to-[#19053a] text-white px-6 py-10 font-sans">
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text flex items-center gap-2">
                    <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
                    Anuvrat <span className="font-light">Tech Quiz</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 cursor-pointer hover:text-cyan-300">
                    <FaTrophy />
                    <span className="text-sm font-medium">
                        Competitive Tech Challenge
                    </span>
                </div>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
                    TECH QUIZ
                </h1>
                <p className="mt-4 text-gray-300 text-lg">
                    Challenge your knowledge across three intense rounds of
                    technology questions.
                    <span className="text-pink-500 font-semibold">
                        {" "}
                        10 questions per round{" "}
                    </span>{" "}
                    •
                    <span className="text-cyan-400 font-semibold">
                        {" "}
                        30 seconds each
                    </span>
                </p>
            </div>

            {/* Rounds */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
                {rounds.map((round, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border-2 ${round.borderColor} bg-[#0e0a2b] p-6 text-center hover:scale-105 transition-transform`}
                    >
                        <div
                            className={`mx-auto w-14 h-14 rounded-full bg-gradient-to-br ${round.gradient} flex items-center justify-center text-xl font-bold mb-4`}
                        >
                            {round.number}
                        </div>
                        <h2 className="text-xl font-semibold">{round.title}</h2>
                        <p className="text-gray-400 mt-2">
                            {round.description}
                        </p>
                        <div className="flex justify-center mt-4 gap-1">
                            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                            <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-50"></span>
                            <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-25"></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechQuizHome;
