import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ id, title, info, openedId, setOpenedId }) => {
  const show = id === openedId

  const handleSwitchIdBtn = () => {
    setOpenedId((currentStateId) => {
      if (currentStateId === id) return null
      return id
    })
  }

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          type="button"
          name="switchId"
          onClick={handleSwitchIdBtn}
        >
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{info} </p>}
    </article>
  )
}

export default Question
