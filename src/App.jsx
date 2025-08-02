import { useState } from "react";
import TechQuizHome from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Round from "./components/Round";
import Questions from "./components/Questions";
import useQuizStore from "./store/quizStore";

function App() {
    //   const loadFromStorage = useQuizStore((state) => state.loadFromStorage);
    //   useEffect(() => {
    //       loadFromStorage(); // Load persisted answers on first load
    //   }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<TechQuizHome />} />
                <Route path="/round/:roundNo/" element={<Round />} />
                <Route
                    path="/round/:roundNo/question/:questionNo"
                    element={<Questions />}
                />
            </Routes>
        </div>
    );
}
export default App;
