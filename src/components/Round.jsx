import { useNavigate, useParams } from "react-router-dom";
import { questions } from "../constants";
import { rounds } from "../constants";
import useQuizStore from "../store/quizStore";

const Round = () => {
    const { roundNo } = useParams();
    const navigate = useNavigate();

    const { answeredQuestions } = useQuizStore();

    const handleQuestionClick = (questionNumber) => {
        navigate(`/round/${roundNo}/question/${questionNumber}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-8">
            <div className="mb-6 flex items-center space-x-3">
                <button
                    onClick={() => navigate("/")}
                    className="text-blue-400 text-lg hover:underline"
                >
                    ← Back to Rounds
                </button>
            </div>

            <h1 className="text-4xl font-bold text-center mb-1">
                <span className="text-cyan-400">
                    {rounds[roundNo - 1].title}
                </span>{" "}
                <span className="text-white">-</span>{" "}
                <span className="text-pink-500">
                    {rounds[roundNo - 1].description}
                </span>
            </h1>
            <p className="text-center text-gray-300 mb-10">
                Select any question to begin
            </p>

            <div className="flex justify-center flex-wrap gap-6">
                {questions[roundNo].map((question,i) => {
                    
                        const isAnswered =
                            answeredQuestions[`${roundNo}-${question.id}`];
                        return (
                            <div
                                key={question.id}
                                onClick={() => handleQuestionClick(question.id)}
                                className={`cursor-pointer w-48 h-56 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center justify-center ${
                                    isAnswered
                                        ? "bg-green-700 border-green-500 scale-105"
                                        : "bg-[#0d0c1c] hover:bg-[#1b1a3c] border-blue-500 hover:scale-105"
                                }`}
                            >
                                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4">
                                    Q{question.id}
                                </div>
                                <div className="text-lg font-semibold">
                                    Question {question.id}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">
                                    Click to start
                                </div>
                            </div>
                        );
                    
                })}
            </div>
        </div>
    );
};

export default Round;
