import React from 'react'
import { useParams } from 'react-router-dom'
import {questions} from "../constants"

function Round() {
    const { roundNo } = useParams();
  return (
    <div>Round {questions[roundNo].length}</div>
  )
}

export default Round