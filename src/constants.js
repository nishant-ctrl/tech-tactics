const questions = {
    1: [
        {
            id: 1,
            question: "What is the function of a diode in a circuit?",
            options: [
                "To increase current",
                "To store charge",
                "To allow current in one direction only",
                "To amplify signals",
            ],
            answer: 2,
        },
        {
            id: 2,
            question:
                "What happens to the depletion region of a PN junction diode when it is forward biased?",
            options: [
                "It becomes wider",
                "It breaks down",
                "It narrows",
                "It remains unchanged",
            ],
            answer: 2,
        },
        {
            id: 3,
            question:
                "In a Zener diode, what happens when the reverse voltage exceeds the breakdown voltage?",
            options: [
                "It conducts in reverse direction",
                "It gets damaged",
                "It becomes forward biased",
                "It stops conducting",
            ],
            answer: 0,
        },
        {
            id: 4,
            question: "Which of the following is true for an ideal Op-Amp?",
            options: [
                "Infinite gain, zero input impedance",
                "Zero gain, infinite input impedance",
                "Infinite gain, infinite input impedance",
                "Unity gain, zero output impedance",
            ],
            answer: 2,
        },
        {
            id: 5,
            question:
                "Which terminal is used to provide positive feedback in an Op-Amp circuit?",
            options: ["Inverting (-)", "Non-inverting (+)", "Output", "Ground"],
            answer: 1,
        },
        {
            id: 6,
            question:
                "In a purely inductive AC circuit, the average power consumed is:",
            options: ["V × I", "V × I × cos(ϕ)", "Zero", "V^2 / R"],
            answer: 2,
        },
        {
            id: 7,
            question:
                "Which Indian satellite mission discovered water on the Moon?",
            options: ["Mangalyaan", "INSAT", "Chandrayaan-1", "PSLV-C37"],
            answer: 2,
        },
        {
            id: 8,
            question:
                "Which of the following is NOT a characteristic of a linked list?",
            options: [
                "Dynamic size",
                "Efficient random access",
                "Efficient insertions/deletions",
                "Uses pointers",
            ],
            answer: 1,
        },
        {
            id: 9,
            question: "Who is considered the father of electronics?",
            options: [
                "Nikola Tesla",
                "Thomas Edison",
                "Lee De Forest",
                "James Clerk Maxwell",
            ],
            answer: 2,
        },
        {
            id: 10,
            question:
                "Which technology is widely used in recent smartphones for fast wireless charging?",
            options: [
                "Infrared charging",
                "Magnetic resonance charging",
                "Solar charging",
                "USB charging",
            ],
            answer: 1,
        },
    ],

    2: [
        {
            id: 1,
            question:
                "Which configuration of a transistor offers the highest voltage gain?",
            options: [
                "Common Base",
                "Common Emitter",
                "Common Collector",
                "Emitter Follower",
            ],
            answer: 1,
        },
        {
            id: 2,
            question:
                "Which of the following conditions must be met for a BJT to operate in the saturation region?",
            options: [
                "VBE > 0 and VCE > 0",
                "VBE < 0 and VCE < 0",
                "VBE > 0 and VCE ≈ 0",
                "VBE = VCE",
            ],
            answer: 2,
        },
        {
            id: 3,
            question: "When a BJT is operated in inverse active region:",
            options: [
                "Base-collector junction is forward biased, and base-emitter is reverse biased",
                "Both junctions are reverse biased",
                "Both junctions are forward biased",
                "It operates like a diode",
            ],
            answer: 0,
        },
        {
            id: 4,
            question:
                "In an n-channel enhancement-mode MOSFET, the device turns on when:",
            options: [
                "VGS is zero",
                "VGS is less than Vth",
                "VGS is greater than Vth",
                "VDS is zero",
            ],
            answer: 2,
        },
        {
            id: 5,
            question: "In saturation region, the MOSFET behaves like:",
            options: [
                "A variable resistor",
                "A constant current source",
                "A diode",
                "A voltage source",
            ],
            answer: 1,
        },
        {
            id: 6,
            question:
                "Which country launched the world’s first 6G satellite in space (2020)?",
            options: ["USA", "China", "Japan", "South Korea"],
            answer: 1,
        },
        {
            id: 7,
            question:
                "Which Indian startup launched the country’s first reusable rocket prototype?",
            options: [
                "Agnikul Cosmos",
                "Skyroot Aerospace",
                "ISRO",
                "Bellatrix Aerospace",
            ],
            answer: 1,
        },
        {
            id: 8,
            question:
                "Which sensor is used in smartphones for orientation detection?",
            options: [
                "Proximity sensor",
                "Gyroscope",
                "Motion sensor",
                "Infrared sensor",
            ],
            answer: 1,
        },
        {
            id: 9,
            question:
                "What breakthrough did India’s Chandrayaan-3 achieve in 2023?",
            options: [
                "First Moon orbit",
                "First Indian rover on Moon",
                "First Mars entry",
                "Deep space imaging",
            ],
            answer: 1,
        },
        {
            id: 10,
            question: "The current gain (β) of a BJT is defined as ",
            options: ["IC / IB", "IC / IE", "IB / IC", "VCE / VBE"],
            answer: 0,
        },
    ],

    3: [
        {
            id: 1,
            question:
                "A MOSFET operates in saturation. If VDS is increased further, the drain current ID:",
            options: [
                "Increases linearly",
                "Remains constant ideally but increases slightly due to channel length modulation",
                "Decreases due to reverse bias",
                "Saturates and drops to zero",
            ],
            answer: 1,
        },
        {
            id: 2,
            question:
                "In saturation region, the drain current (ID) of an nMOS is approximately given by:",
            options: [
                "ID = μCox (W/L) (VGS - Vth)² VDS",
                "ID = μCox (W/L) (VGS - Vth)² / 2",
                "ID = β (VGS + Vth)²",
                "ID = (VDS - VGS)²",
            ],
            answer: 1,
        },
        {
            id: 3,
            question:
                "In CMOS technology, the combination of pMOS and nMOS is used to:",
            options: [
                "Increase voltage",
                "Save power",
                "Amplify current",
                "Increase gain",
            ],
            answer: 1,
        },
        {
            id: 4,
            question: "A PN junction diode exhibits avalanche breakdown when:",
            options: [
                "Depletion width becomes zero",
                "Thermally generated carriers increase",
                "Impact ionization occurs at high reverse voltages",
                "Zener effect dominates",
            ],
            answer: 2,
        },
        {
            id: 5,
            question:
                "What is the function of the armature reaction in a DC machine?",
            options: [
                "To increase the flux in the main pole",
                "To weaken the flux and cause distortion",
                "To increase the speed",
                "To control voltage",
            ],
            answer: 1,
        },

        {
            id: 6,
            question:
                "Which country launched the first 3D-printed rocket into space (2023)?",
            options: ["China", "USA", "Japan", "Russia"],
            answer: 1,
        },
        {
            id: 7,
            question:
                "In a MOSFET, channel-length modulation is responsible for?",
            options: [
                "Reducing threshold voltage",
                "Increasing drain current slightly in saturation region",
                "Decreasing gate capacitance",
                "Causing the device to enter triode region",
            ],
            answer: 2,
        },
        {
            id: 8,
            question:
                "In 2023, which company became the world’s first to hit a $3 trillion market capitalization?",
            options: ["Microsoft", "Apple", "Amazon", "Alphabet"],
            answer: 1,
        },
        {
            id: 9,
            question:
                "The Artemis II mission by NASA is planned to send astronauts around the Moon. Which year is it scheduled for?",
            options: ["2023", "2024", "2025", "2026"],
            answer: 2,
        },
        {
            id: 10,
            question: "The Early effect in a BJT refers to ",
            options: [
                "Reduction in base width due to increase in collector-base voltage",
                "Increase in base current at high frequencies",
                "Delay in switching due to junction capacitance",
                "Thermal runaway at high temperature",
            ],
            answer: 0,
        },
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

// const codeQuestions = {
//     4: [
//         {
//             id: 1,
//             question: `#include <stdio.h>
// int main() {
//     char str[] = "hello";
//     if (str == "hello") {
//         printf("Equal");
//     } else {
//         printf("Not Equal");
//     }
//     return 0;
// }
// // What is the error/bug in this code?`,
//         },
//         {
//             id: 2,
//             question: `#include <stdio.h>
// int main() {
//     int a = 5;
//     int b = 0;
//     printf("%d", a/b);
//     return 0;
// }
// // What will happen when this code runs?`,
//         },
//         {
//             id: 3,
//             question: `#include <stdio.h>
// int main() {
//     int arr[5];
//     for (int i = 0; i <= 5; i++) {
//         arr[i] = i * 2;
//     }
//     return 0;
// }
// // What is the bug in this code?`,
//         },
//         {
//             id: 4,
//             question: `#include <stdio.h>
// int main() {
//     char *s;
//     scanf("%s", s);
//     printf("%s", s);
//     return 0;
// }
// // What is wrong with this code?`,
//         },
//         {
//             id: 5,
//             question: `#include <stdio.h>
// int main() {
//     int x = 10;
//     if (x = 5) {
//         printf("True");
//     } else {
//         printf("False");
//     }
//     return 0;
// }
// // What logical error exists here?`,
//         },
//         {
//             id: 6,
//             question: `#include <stdio.h>
// int main() {
//     int a = 2;
//     switch(a) {
//         case 1: printf("One");
//         case 2: printf("Two");
//         case 3: printf("Three");
//         default: printf("Default");
//     }
//     return 0;
// }
// // What bug does this code have?`,
//         },
//         {
//             id: 7,
//             question: `#include <stdio.h>
// int main() {
//     int x = 2147483647;
//     printf("%d", x + 1);
//     return 0;
// }
// // What problem occurs in this code?`,
//         },
//         {
//             id: 8,
//             question: `#include <stdio.h>
// int main() {
//     char str[5] = "hello";
//     printf("%s", str);
//     return 0;
// }
// // What issue does this code have?`,
//         },
//     ],

//     5: [
//         {
//             id: 1,
//             question: `#include <stdio.h>
// #include <stdlib.h>
// int main() {
//     int *p = (int*)malloc(sizeof(int));
//     *p = 10;
//     free(p);
//     printf("%d", *p);
//     return 0;
// }
// // What is the bug in this code?`,
//         },
//         {
//             id: 2,
//             question: `#include <stdio.h>
// int main() {
//     char *s = "world";
//     s[0] = 'W';
//     printf("%s", s);
//     return 0;
// }
// // What happens in this code?`,
//         },
//         {
//             id: 3,
//             question: `#include <stdio.h>
// int main() {
//     int a = 5;
//     int b = 10;
//     int *p = &a;
//     *p = b;
//     printf("%d %d", a, b);
//     return 0;
// }
// // What output/error will this produce?`,
//         },
//         {
//             id: 4,
//             question: `#include <stdio.h>
// int main() {
//     int arr[3] = {1,2,3};
//     printf("%d", arr[5]);
//     return 0;
// }
// // What is wrong in this code?`,
//         },
//         {
//             id: 5,
//             question: `#include <stdio.h>
// int func() {
//     int x = 10;
//     return x;
// }
// int main() {
//     int *p = &func();
//     printf("%d", *p);
//     return 0;
// }
// // What is the bug in this program?`,
//         },
//         {
//             id: 6,
//             question: `#include <stdio.h>
// int main() {
//     int a = 5;
//     int b = 0;
//     if (a && b = 1) {
//         printf("True");
//     } else {
//         printf("False");
//     }
//     return 0;
// }
// // What is the logical bug here?`,
//         },
//         {
//             id: 7,
//             question: `#include <stdio.h>
// int main() {
//     char s1[] = "abc";
//     char s2[] = "abc";
//     if (s1 == s2) {
//         printf("Equal");
//     } else {
//         printf("Not Equal");
//     }
//     return 0;
// }
// // What is wrong in this code?`,
//         },
//         {
//             id: 8,
//             question: `#include <stdio.h>
// int main() {
//     int x = printf("Hello");
//     printf("%d", x);
//     return 0;
// }
// // What will this program output?`,
//         },
//     ],
// };
const codeQuestions = {
    4: [
        {
            id: 1,
            question: `#include <stdio.h>
int main() {
    int a = 5, b = 2;
    float c = a / b;
    printf("%f", c);
    return 0;
}
// What is wrong in this calculation?`,
        },
        {
            id: 2,
            question: `#include <stdio.h>
int main() {
    int arr[3] = {1, 2, 3};
    for (int i = 0; i <= 3; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
// Identify the bug in this loop.`,
        },
        {
            id: 3,
            question: `#include <stdio.h>
int main() {
    int a = 10;
    if (a = 5) {
        printf("True");
    } else {
        printf("False");
    }
    return 0;
}
// What logical error is present?`,
        },
        {
            id: 4,
            question: `#include <stdio.h>
int main() {
    int i = 1;
    while (i = 5) {
        printf("Looping");
        break;
    }
    return 0;
}
// What is wrong in this loop condition?`,
        },
        {
            id: 5,
            question: `#include <stdio.h>
int main() {
    int a = 2;
    switch(a) {
        case 1: printf("One");
        case 2: printf("Two");
        case 3: printf("Three");
        default: printf("Default");
    }
    return 0;
}
// What issue exists in this switch statement?`,
        },
        {
            id: 6,
            question: `#include <stdio.h>
int main() {
    char str[5] = "Hello";
    printf("%s", str);
    return 0;
}
// Why is this string initialization problematic?`,
        },
        {
            id: 7,
            question: `#include <stdio.h>
int main() {
    int x = 2147483647;
    printf("%d", x + 1);
    return 0;
}
// What problem occurs in this calculation?`,
        },
        {
            id: 8,
            question: `#include <stdio.h>
int main() {
    float f = 0.1;
    if (f == 0.1)
        printf("Equal");
    else
        printf("Not Equal");
    return 0;
}
// Why does this comparison fail?`,
        },
    ],

    5: [
        {
            id: 1,
            question: `#include <stdio.h>
int main() {
    int a = 5, b = 0;
    printf("%d", a/b);
    return 0;
}
// What happens when this runs?`,
        },
        {
            id: 2,
            question: `#include <stdio.h>
int main() {
    int *p;
    *p = 10;
    printf("%d", *p);
    return 0;
}
// What is wrong in this pointer usage?`,
        },
        {
            id: 3,
            question: `#include <stdio.h>
void func() {
    static int x = 0;
    x++;
    printf("%d ", x);
}
int main() {
    for (int i = 0; i < 3; i++) {
        func();
    }
    return 0;
}
// What will be the output of this program?`,
        },
        {
            id: 4,
            question: `#include <stdio.h>
int main() {
    char *ptr = "Hello";
    ptr[0] = 'Y';
    printf("%s", ptr);
    return 0;
}
// What problem occurs here?`,
        },
        {
            id: 5,
            question: `#include <stdio.h>
int main() {
    int a = 10;
    int b = 20;
    const int *p = &a;
    *p = 30;
    printf("%d", *p);
    return 0;
}
// What mistake is present with this pointer?`,
        },
        {
            id: 6,
            question: `#include <stdio.h>
int main() {
    int arr[3] = {1, 2, 3};
    int *p = arr + 5;
    printf("%d", *p);
    return 0;
}
// What error will this cause?`,
        },
        {
            id: 7,
            question: `#include <stdio.h>
int main() {
    char s1[] = "ECE";
    char s2[] = "ECE";
    if (s1 == s2) {
        printf("Equal");
    } else {
        printf("Not Equal");
    }
    return 0;
}
// Why does this comparison fail?`,
        },
        {
            id: 8,
            question: `#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 5; i++)
        sum += i;
    printf("Sum = %d\\n", sum);
    for (int i = 0; i < 5; i++); {  
        printf("Loop executed\\n");
    }

    return 0;
}
// Why does this loop behave incorrectly?`,
        },
    ],
};

export { questions, rounds, codeQuestions };
