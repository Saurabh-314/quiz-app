import React, { useState } from 'react'
import { createContext } from 'react'
import axios from "axios";

const QuizContext = createContext();

const ENDPOINT = "https://quizz-server1122.herokuapp.com";

export default function QuizHolder(props) {
  // const [quizzes, setQuizzes] = useState([]);
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isError, setIsError] = useState("");
  const [count, setCount] = useState(0);
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const startFun = () => {
    setStart(true);
  }

  const login = async (values) => {
    const { email, password } = values;
    const { data } = await axios.post(`${ENDPOINT}/api/user/login`, {
      email, password
    });
    if (data.success) {
      setIsLoggedIn(true);
      setLoggedInUser(data.user);
      setToken(data.authToken);
      setRole(data.role);
      sessionStorage.setItem('access_token', JSON.stringify(data.authToken));
      return true;
    }
    else {
      alert(data.message)
      setIsError(data.message);
      return false;
    }
  }

  const Register = async (values) => {
    const { name, email, password } = values;
    const { data } = await axios.post(`${ENDPOINT}/api/user/register`, {
      name, email, password
    });
    if (data.success) {
      setLoggedInUser(data.user);
      return true;
    }
    else {
      alert(data.message)
      setIsError(data.message);
      return false;
    }
  }

  const logout = async () => {
    setStart(false);
    setIsLoggedIn(false);
    sessionStorage.removeItem('access_token');
    return true;

  }

  const addQuestion = async (values) => {
    const { data } = await axios.post(`${ENDPOINT}/api/admin/addquestion`, values);
    if (data.success) {
      setIsLoggedIn(true);
      setLoggedInUser(data.user);
      return true;
    }
    else {
      // alert(data.message)
      setIsError(data.message);
      return false;
    }
  }

  return (
    <QuizContext.Provider value={{
      start, setStart, startFun, ENDPOINT, exit, setExit, correct, setCorrect, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser, isError, setIsError, login, Register, logout, addQuestion, count, setCount, token, role
    }}>
      {props.children}
    </QuizContext.Provider>
  )
}

export { QuizContext };