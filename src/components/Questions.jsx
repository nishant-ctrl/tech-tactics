import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { questions } from "../constants";


function Questions() {
    const { roundNo, questionNo } = useParams();
    const  question = questions[roundNo][parseInt(questionNo)-1];
    useEffect(()=>{
    },[roundNo,questionNo])
    if(!question) return <h1>Loading...</h1>
    return (
        <div>
            Questions
             <h1>{question.question}</h1>
            <h1></h1> 
        </div>
    );
}

export default Questions;
