import { create } from "zustand";
import { persist } from "zustand/middleware";

const useQuizStore = create(
    persist(
        (set) => ({
            answeredQuestions: {},

            // mark question as answered
            markAnswered: (round, qNo) =>
                set((state) => ({
                    answeredQuestions: {
                        ...state.answeredQuestions,
                        [`${round}-${qNo}`]: true,
                    },
                })),
        }),
        {
            name: "quiz-answered-storage", // localStorage key
        }
    )
);

export default useQuizStore;
