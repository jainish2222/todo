import React from 'react'
import './Todo.css'

const Todo = ({todo}) => {

  return (
    <div>
     {todo.map((todo) =>{
        return<div key={todo._id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button>{todo.complete === true?'complete':'mark as complete'}</button>
        </div>
     })

     }
    </div>
  )
}

export default Todo
