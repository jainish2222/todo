import React from 'react'
import './CreateTodo.css'
import { useState } from 'react'
const CreateTodo = () => {

  const ondescriptionhandler = (event) => {
    setdescription( event.target.value)
    console.log(event.target.value)
  } 
  const ontitlehandler = (event) => {
    settitle( event.target.value)
    console.log(event.target.value)
  } 

  const [title,settitle] = useState('')
  const [description,setdescription] = useState('')
  return (
    <div className='div1'>
      <div>
      <input id='title1' type="text"  placeholder='title' onChange={ontitlehandler}/>
       <input id='disc1' type="text"  placeholder='discription' onChange={ondescriptionhandler}/>
       <button onClick={() =>{
        try{
          fetch('http://localhost:3000/create',
          {
           method: 'POST',
           body:JSON.stringify({
             title :title,
             description :description
           }),
           headers: {
             'Content-Type': 'application/json'
           }
          }
           )
           .then(async (res) => await res.json())
        }
        catch(e){
          console.log('errrrrrrrrrrrrrr')
        }
       }}>Add To Todo</button>
      </div>
       
    </div>
  )
}

export default CreateTodo
