import React, { useState, useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const { Register } = useContext(QuizContext);
  const [values, setValues] = useState({
    name: "", email: "", password: ""
  })
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  const formSubmit = async (e) => {
    e.preventDefault();
    const res = await Register(values)
    if (res) {
      navigate('/');
    }
  }
  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mt-4 p-2 max-w-md mx-auto rounded-xl shadow-md overflow-hidden">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">User Name</label>
            <input type="text" id="name" name='name' value={values.name} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john Doe" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address </label>
            <input type="email" id="email" name='email' value={values.email} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input type="password" id="password" name='password' value={values.password} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

          <p className="text-gray-500 dark:text-gray-400">
            You Don't have an account ? &nbsp;
            <Link to="/login" className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}

export default SignUp