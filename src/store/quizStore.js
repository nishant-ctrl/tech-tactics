import { create } from "zustand";
import { persist } from "zustand/middleware";

const useQuizStore = create(
    persist(
        (set) => ({
            answeredQuestions: {},
            markAnswered: (round, qNo) =>
                set((state) => ({
                    answeredQuestions: {
                        ...state.answeredQuestions,
                        [`${round}-${qNo}`]: true,
                    },
                })),
        }),
        {
            name: "quiz-answered-storage",
        }
    )
);

export default useQuizStore;
