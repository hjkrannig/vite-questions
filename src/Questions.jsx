import React, { useState } from 'react'
import data from './data'

import Question from './Question'

const Questions = () => {
  const [questions, setQuestions] = useState(data)
  const [openedId, setOpenedId] = useState(null)

  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            openedId={openedId}
            setOpenedId={setOpenedId}
          />
        )
      })}
    </section>
  )
}

export default Questions
