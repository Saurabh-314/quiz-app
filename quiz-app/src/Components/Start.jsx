import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../Context/QuizHolder'

export default function Start() {
  const navigate = useNavigate();
  const { isLoggedIn, startFun } = useContext(QuizContext)

  useEffect(() => {
    const checkLogin = async () => {
      const getAccessToken = await JSON.parse(sessionStorage.getItem('access_token'))
      if (!getAccessToken) {
        navigate('/login')
      }
    }
    checkLogin();
  }, [isLoggedIn, navigate])
  return (
    <div className='w-full h-80 flex justify-center items-center'>
      <button onClick={() => { startFun() }} className='border border-orange-500 p-3 text-5xl rounded'>Start</button>
    </div>
  )
}