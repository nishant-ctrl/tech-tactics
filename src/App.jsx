import TechQuizHome from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Round from "./components/Round";
import CodeRound from "./components/CodeRound";
import Questions from "./components/Questions";
import CodeQuestions from "./components/CodeQuestions";


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<TechQuizHome />} />
                <Route path="/round/:roundNo/" element={<Round />} />
                <Route
                    path="/round/:roundNo/question/:questionNo"
                    element={<Questions />}
                />
                <Route path="/code-round/:roundNo/" element={<CodeRound />} />
                <Route
                    path="/code-round/:roundNo/question/:questionNo"
                    element={<CodeQuestions />}
                />
            </Routes>
        </div>
    );
}
export default App;
