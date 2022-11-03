import React, { useEffect } from 'react'
import Result from "./Result";
import Start from "./Start";
import Quiz from "./Quiz";
import { useNavigate } from "react-router-dom"
import { QuizContext } from "../Context/QuizHolder";
import { useContext } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { start, exit, isLoggedIn, setIsLoggedIn } = useContext(QuizContext);

  useEffect(() => {
    const checkLogin = async () => {
      const getAccessToken = await JSON.parse(sessionStorage.getItem('access_token'))
      if (!getAccessToken) {
        navigate('/login')
      } else {
        setIsLoggedIn(true)
      }
    }
    checkLogin();
  }, [])
  return (
    <>
      {
        exit === false
          ?
          <>
            {
              start === true && isLoggedIn === true
                ?
                <Quiz />
                :
                <Start />
            }
          </>
          : <Result />
      }
    </>
  )
}

export default Home