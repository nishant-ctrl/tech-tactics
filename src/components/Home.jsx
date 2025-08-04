import { FaTrophy } from "react-icons/fa";
import logo from "../assets/logo.png";
import StatsSection from "./StatsSection";
import { useNavigate } from "react-router-dom";
import { rounds } from "../constants";

const TechQuizHome = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f051d] to-[#19053a] text-white px-6 py-10 font-sans">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 flex-wrap">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text flex items-center gap-2">
                    <img src={logo} alt="Logo" className="w-30 h-24 mt-4" />
                    <div className="h-24 flex items-center text-6xl">
                        Anuvrat
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 text-cyan-400 cursor-pointer hover:text-cyan-300">
                    <div className="flex items-center justify-center gap-2">
                        <FaTrophy />
                        <span className="text-lg font-medium text-center">
                            Competitive Tech Challenge
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-center mb-6">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
                    TECH TACTIX
                </h1>
                <p className="mt-4 text-gray-300 text-lg px-5 ">
                    Challenge your knowledge across three intense rounds of
                    technology <br /> questions.
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
            <div className="flex flex-row justify-center">
                <span className="text-pink-500 font-semibold text-6xl">
                    {" "}
                    QUIZ
                </span>{" "}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
                {rounds.map((round, index) => {
                    if (index < 3) {
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border-2 ${round.borderColor} bg-[#0e0a2b] p-6 text-center hover:scale-105 transition-transform cursor-pointer`}
                                onClick={() => navigate(`/round/${round.id}`)}
                            >
                                <div
                                    className={`mx-auto w-14 h-14 rounded-full bg-gradient-to-br ${round.gradient} flex items-center justify-center text-xl font-bold mb-4`}
                                >
                                    {round.number}
                                </div>
                                <h2 className="text-xl font-semibold">
                                    {round.title}
                                </h2>
                                <p className="text-gray-400 mt-2">
                                    {round.description}
                                </p>
                                <div className="flex justify-center mt-4 gap-1">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-50"></span>
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-25"></span>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="flex flex-row justify-center">
                <span className=" text-cyan-400 font-semibold text-6xl mt-12 ">
                    {" "}
                    CODE DEBUGING
                </span>{" "}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:px-50 gap-8 mt-10 max-w-6xl mx-auto">
                {rounds.map((round, index) => {
                    if (index >= 3) {
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border-2 ${round.borderColor} bg-[#0e0a2b] p-6 text-center hover:scale-105 transition-transform cursor-pointer`}
                                onClick={() =>
                                    navigate(`/code-round/${round.id}`)
                                }
                            >
                                <div
                                    className={`mx-auto w-14 h-14 rounded-full bg-gradient-to-br ${round.gradient} flex items-center justify-center text-xl font-bold mb-4`}
                                >
                                    {round.number}
                                </div>
                                <h2 className="text-xl font-semibold">
                                    {round.title}
                                </h2>
                                <p className="text-gray-400 mt-2">
                                    {round.description}
                                </p>
                                <div className="flex justify-center mt-4 gap-1">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-50"></span>
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-25"></span>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="mt-30">
                <StatsSection />
            </div>
        </div>
    );
};

export default TechQuizHome;
