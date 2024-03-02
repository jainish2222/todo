import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'
// import axios from 'axios'

function App() {
  const [todos, settodos] = useState([])
  
  return (
    <>
      <div className='div1'>Todo Application{todos}</div>
      <CreateTodo/>
      <Todo todo={todos} settodos={settodos}/>
    </>
  )
  
}

export default App
