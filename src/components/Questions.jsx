import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { questions } from "../constants";
import useQuizStore from "../store/quizStore";

const optionLabels = ["A", "B", "C", "D"];

function QuestionScreen() {
    const { roundNo, questionNo } = useParams();
    const navigate = useNavigate();

    const { answeredQuestions, markAnswered } = useQuizStore();
    const questionKey = `${roundNo}-${questionNo}`;
    const isAnswered = answeredQuestions[questionKey];

    const questionObj = questions[roundNo]?.[parseInt(questionNo) - 1];

    const [selected, setSelected] = useState(null);
    const [timeLeft, setTimeLeft] = useState(30);
    const [showCorrect, setShowCorrect] = useState(false);

    useEffect(() => {
        if (showCorrect && !isAnswered) {
            markAnswered(roundNo, questionNo);
        }
    }, [showCorrect]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((t) => {
                if (t <= 1) {
                    clearInterval(timer);
                }
                return t > 0 ? t - 1 : 0;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const checkAnswer = () => {
        if (selected !== null && !isAnswered) {
            markAnswered(roundNo, questionNo);
        }
        setShowCorrect(true);
    };

    const exit = () => {
        navigate(`/round/${roundNo}`);
    };

    if (!questionObj)
        return <div className="text-red-500">Invalid question!</div>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f051d] to-[#1a0642] text-white px-4 py-8 relative">
            <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 mt-4 gap-6">
                <div className="w-44 h-56 rounded-2xl shadow-md flex flex-col items-center justify-center transition-transform duration-300">
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold text-white mb-3">
                        Q{questionObj.id}
                    </div>
                    <div className="text-base font-semibold text-white">
                        Question {questionObj.id}
                    </div>
                </div>

                <div className="w-30 h-30 border-[8px] border-cyan-400 rounded-full flex items-center justify-center shadow-lg bg-[#121224]">
                    <span className="text-white text-[48px] font-extrabold leading-none">
                        {timeLeft}
                        <span className="text-sm">s</span>
                    </span>
                </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold text-center mt-auto mb-10 max-w-6xl">
                {questionObj.question}
            </h1>

            <div className="grid grid-cols-1  gap-4 w-full max-w-2xl mb-8">
                {questionObj.options.map((option, idx) => {
                    const isCorrect = idx === questionObj.answer;
                    const isWrongSelected =
                        selected === idx && selected !== questionObj.answer;

                    let bgClass =
                        "bg-[#23232b] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-500 hover:text-white";

                    if (showCorrect) {
                        if (isCorrect) {
                            bgClass = "bg-green-600 text-white";
                        } else if (isWrongSelected) {
                            bgClass = "bg-red-600 text-white";
                        } else {
                            bgClass = "bg-[#23232b] text-white";
                        }
                    } else if (selected === idx) {
                        bgClass =
                            "bg-gradient-to-r from-cyan-400 to-pink-500 text-white";
                    }

                    return (
                        <button
                            key={`${idx}-${option}`}
                            onClick={() => {
                                if (!showCorrect && !isAnswered)
                                    setSelected(idx);
                            }}
                            disabled={showCorrect || isAnswered}
                            className={`flex items-center gap-4 py-3 px-5 rounded-md text-left text-lg font-medium transition-all duration-200 
                                ${bgClass}
                                ${
                                    isAnswered
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }
                            `}
                        >
                            <div className="w-8 h-8 flex items-center justify-center font-bold text-white rounded-full bg-gradient-to-br from-cyan-400 to-pink-500">
                                {optionLabels[idx]}
                            </div>
                            {option}
                        </button>
                    );
                })}
            </div>

            {/* {showCorrect && (
                <div className="mt-4 text-lg text-green-400">
                    Correct Answer:{" "}
                    <span className="font-semibold">
                        {optionLabels[questionObj.answer]}.{" "}
                        {questionObj.options[questionObj.answer]}
                    </span>
                </div>
            )} */}
            {isAnswered && (
                <div className="mt-4 text-lg text-green-400">
                    Correct Answer:{" "}
                    <span className="font-semibold">
                        {optionLabels[questionObj.answer]}.{" "}
                        {questionObj.options[questionObj.answer]}
                    </span>
                </div>
            )}

            <div className="flex gap-4 mt-4">
                <button
                    onClick={exit}
                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                >
                    Exit Question
                </button>
                <button
                    onClick={checkAnswer}
                    disabled={selected === null || showCorrect}
                    className={`px-6 py-2 text-sm rounded ${
                        selected !== null && !showCorrect
                            ? "bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90"
                            : "bg-gray-600 cursor-not-allowed"
                    }`}
                >
                    Check Answer
                </button>
            </div>
        </div>
    );
}

export default QuestionScreen;
