import React, { useContext, useState, useEffect } from 'react'
import Loader from "./Loader";
import axios from 'axios';
import { QuizContext } from '../Context/QuizHolder';

export default function Quiz() {
  return (
    <div className='w-full h-80 flex justify-center items-center bg-blue'>
      <Box />
    </div>
  )
}

const Box = () => {
  const [level, setLevel] = useState(5);
  const [question, setQuestion] = useState({});
  const { correct, setCorrect, ENDPOINT, setExit, isLoading, count, setCount, token } = useContext(QuizContext);
  const [ans, setAns] = useState("");

  useEffect(() => {
    const getQuestion = async () => {
      const { data } = await axios.get(`${ENDPOINT}/api/admin/question?level=${level}`, {
        headers: {
          "auth-token": token
        }
      })
      console.log("data",data);
      if (data.questions.length === 0) {
        setExit(true)
      } else {
        setCount(count + 1);
      }
      setQuestion(data.questions[0])
    }
    getQuestion();
  }, [level])

  if (isLoading) {
    return (
      <Loader />
    )
  }
  const saveHandler = () => {
    if (count <= 10) {
      if (question.currect_answer === ans) {
        setCorrect(correct + 1);
        if (count === 10 || level === 10) {
          setExit(true)
        }
        if (level === 10) {
          setLevel(10);
        } else {
          setLevel(level + 1);
        }
      } else {
        if (level === 1) {
          setExit(true)
        } else {
          setLevel(level - 1);
        }
      }
    }
  }
  return (
    <div className='w-[50%] border shadow-lg rounded-md overflow-hidden'>
      <div className='p-2 text-3xl'>{count} ) {question.question}</div>
      <div className='grid grid-cols-2 mt-3'>
        <div className={`p-2 border ${ans === (question.opt1) ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns(`${question.opt1}`)}>{question.opt1}</div>
        <div className={`p-2 border ${ans === (question.opt2) ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns(`${question.opt2}`)}>{question.opt2}</div>
        <div className={`p-2 border ${ans === (question.opt3) ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns(`${question.opt3}`)}>{question.opt3}</div>
        <div className={`p-2 border ${ans === (question.opt4) ? 'bg-blue-400 text-white' : ''} hover:bg-blue-400 hover:text-white duration-200 cursor-pointer`} onClick={() => setAns(`${question.opt4}`)}>{question.opt4}</div>
      </div>
      <div className='flex justify-between'>
        <div className='cursor-pointer h-[30px] px-3  bg-orange-500 text-white' >Difficulty {"(" + level + ")"}</div>
        <div className='cursor-pointer h-[30px] px-3 bg-green-500 text-white' onClick={saveHandler}>Save & Next</div>
        <div className='cursor-pointer h-[30px] px-3 bg-red-500 text-white' onClick={() => setExit(true)}>Exit</div>
      </div>
    </div>
  )
}