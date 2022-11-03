import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../Context/QuizHolder'

export default function Result() {
    const navigate = useNavigate();
    const { correct, setCorrect, setExit, setStart, isLoggedIn, count, setCount } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
        setCorrect(0);
        navigate('/');
        setCount(0);
    }

    useEffect(() => {
        const checkLogin = async () => {
            const getAccessToken = await JSON.parse(sessionStorage.getItem('access_token'))
            if (!getAccessToken) {
                navigate('/login')
            }
        }
        checkLogin();
    }, [isLoggedIn])

    return (
        <div className='w-full h-90 flex justify-center items-center'>
            <div className='w-[40%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-2xl p-3 my-2'>{correct} are correct out of {count}</h2>
                <button onClick={playAgain} className='border border-orange-500 p-3 text-2xl rounded'>
                    Go to home page
                </button>
            </div>
        </div>
    )
}