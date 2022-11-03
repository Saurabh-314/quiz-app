import React, { useState, useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder';
import { useNavigate } from 'react-router-dom';

const AddQuestion = () => {
  const navigate = useNavigate();
  const { loggedInUser, role, addQuestion } = useContext(QuizContext);
  const [values, setValues] = useState({
    question: "", opt1: "", opt2: "", opt3: "", opt4: "", currect_answer: "", question_type: "", question_level: ""
  })
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  const formSubmit = async (e) => {
    e.preventDefault();
    await addQuestion(values);
    setValues({
      question: "", opt1: "", opt2: "", opt3: "", opt4: "", currect_answer: "", question_type: "", question_level: ""
    })
  }
  return (
    <>
      {
        (role === "admin") ?
          (
            <form onSubmit={formSubmit}>
              <div className="mt-4 p-2 max-w-md mx-auto rounded-xl shadow-md overflow-hidden">
                <div className="mb-6">
                  <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Question {loggedInUser}</label>
                  <input type="text" id="question" name='question' value={values.question} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option" />
                </div>
                <div className="mb-6">
                  <label htmlFor="opt1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 1</label>
                  <input type="text" id="opt1" name='opt1' value={values.opt1} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 1" />
                </div>
                <div className="mb-6">
                  <label htmlFor="opt2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 2</label>
                  <input type="text" id="opt2" name='opt2' value={values.opt2} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 2" />
                </div>
                <div className="mb-6">
                  <label htmlFor="opt3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 3</label>
                  <input type="text" id="opt3" name='opt3' value={values.opt3} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 3" />
                </div>
                <div className="mb-6">
                  <label htmlFor="opt4" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Option 4</label>
                  <input type="text" id="opt4" name='opt4' value={values.opt4} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 4" />
                </div>
                <div className="mb-6">
                  <label htmlFor="currect_answer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Currect Answer</label>
                  <input type="text" id="currect_answer" name='currect_answer' value={values.currect_answer} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Currect Answer" />
                </div>
                <div className="mb-6">
                  <label htmlFor="question_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Question Type</label>
                  <input type="text" id="question_type" name='question_type' value={values.question_type} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Question Type" />
                </div>
                <div className="mb-6">
                  <label htmlFor="question_level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Question Level</label>
                  <input type="text" id="question_level" name='question_level' value={values.question_level} onChange={changeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Question Level" />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>

              </div>
            </form>
          )
          :
          (
            <>
              {
                alert("You are not authorise")
              }
              {
                navigate("/")
              }
            </>
          )
      }

    </>
  )
}

export default AddQuestion