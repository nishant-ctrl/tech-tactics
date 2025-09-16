import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { codeQuestions } from "../constants";
import useQuizStore from "../store/quizStore";
import Code from "./Code";

function QuestionScreen() {
    const { roundNo, questionNo } = useParams();
    const navigate = useNavigate();

    const { answeredQuestions, markAnswered } = useQuizStore();
    const questionKey = `${roundNo}-${questionNo}`;
    const isAnswered = answeredQuestions[questionKey];

    const questionObj = codeQuestions[roundNo]?.[parseInt(questionNo) - 1];
    const [timeLeft, setTimeLeft] = useState(120);
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
        markAnswered(roundNo, questionNo);
        exit();
    };

    const exit = () => {
        navigate(`/code-round/${roundNo}`);
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
                    <span className="text-white text-[30px] font-extrabold leading-none">
                        {Math.floor(timeLeft / 60)
                            .toString()
                            .padStart(2, "0")}
                        :{(timeLeft % 60).toString().padStart(2, "0")}
                        <span className="text-sm">s</span>
                    </span>
                </div>
            </div>

            <div className="w-full max-w-5xl mt-10 px-4 py-6 bg-[#1e1e2f] rounded-xl shadow-lg">
                <h2 className="text-xl font-bold mb-4">Find the Bug:</h2>
                <Code
                    code={questionObj.question}
                    language="c"
                    showLineNumbers={true}
                />
            </div>

            <div className="flex gap-4 mt-4">
                <button
                    onClick={exit}
                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm"
                >
                    Exit Question
                </button>
                <button
                    onClick={checkAnswer}
                    className={`px-6 py-2 text-sm rounded bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90`}
                >
                    Mark as completed
                </button>
            </div>
        </div>
    );
}

export default QuestionScreen;
