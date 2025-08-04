const questions = {
    1: [
        {
            id: 1,
            question:
                "What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?",
            options: ["1", "2", "4", "3"],
            answer: 2,
        },

        {
            id: 2,
            question: "What is 2 + 2?",
            options: ["1", "2", "4", "3"],
            answer: 2,
        },

        {
            id: 3,
            question: "What is 2 + 2?",
            options: ["1", "2", "4", "3"],
            answer: 2,
        },

        {
            id: 4,
            question: "What is 2 + 2?",
            options: ["1", "2", "4", "3"],
            answer: 2,
        },

        {
            id: 5,
            question: "What is 2 + 2?",
            options: ["1", "2", "4", "3"],
            answer: 2,
        },

        {
            id: 6,
            question: "What is 2 + 2?",
            options: ["1", "2", "4", "3"],
            answer: 2,
        },

        {
            id: 7,
            question: "What is 2 + 2?",
            options: ["1", "2", "4", "3"],
            answer: 2,
        },

        {
            id: 8,
            question: "What is 2 + 2?",
            options: ["1", "2", "4", "3"],
            answer: 2,
        },

        {
            id: 9,
            question: "What is 2 + 2?",
            options: ["1", "2", "4", "3"],
            answer: 2,
        },

        // Add 9 more
    ],
    2: [
        {
            id:1,
            question: "Capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: 2,
        },
        // Add 9 more
    ],
    3: [
        {
            id:1,
            question: "What color is the sky?",
            options: ["Green", "Blue", "Red", "Yellow"],
            answer: 1,
        },
        // Add 9 more
    ],
};

const rounds = [
    {
        id: "1",
        number: "01",
        title: "ROUND 1",
        description: "Fundamentals & Basics",
        borderColor: "border-blue-500",
        gradient: "from-blue-500 to-purple-500",
    },
    {
        id: "2",
        number: "02",
        title: "ROUND 2",
        description: "Intermediate Concepts",
        borderColor: "border-pink-500",
        gradient: "from-pink-500 to-purple-500",
    },
    {
        id: "3",
        number: "03",
        title: "ROUND 3",
        description: "Advanced & Expert",
        borderColor: "border-cyan-400",
        gradient: "from-cyan-400 to-blue-400",
    },
    {
        id: "4",
        number: "01",
        title: "ROUND 1",
        description: "Code Basics",
        borderColor: "border-blue-500",
        gradient: "from-blue-500 to-purple-500",
    },
    {
        id: "5",
        number: "02",
        title: "ROUND 2",
        description: "Intermediate CODES",
        borderColor: "border-cyan-400",
        gradient: "from-cyan-400 to-blue-400",
    },
];



const codeQuestions = {
    4: [
        {
            id: 1,
            question: `// Finds the index of the first 'x'. Returns -1 if not found.
int find_char(char* str) {
    for (int i = 0; str[i] != '\0'; i++) {
        if (str[i] == 'x') {
            return i;
        }
    }
    // Bug: No return statement if the loop finishes
}`,
        },
        {
            id: 2,
            question:
                "What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?",
        },
        {
            id: 3,
            question:
                "What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?",
        },

        // Add 9 more
    ],
    5: [
        {
            id: 1,
            question:
                "What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?What is 2 + 2?",
        },
        // Add 9 more
    ],
};

export { questions,rounds,codeQuestions };
