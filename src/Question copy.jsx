import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ id, title, info, setQuestion }) => {
  const [show, setShow] = useState(false)

  const toggleShow = (id) => {
    setShow((currentState) => {
      currentState ? setQuestion(-1) : setQuestion(id)
      return !currentState
    })
  }

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => toggleShow(id)}
        >
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  )
}

export default Question
