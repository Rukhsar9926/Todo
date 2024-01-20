import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Component/Navbar';
import Form from './Component/Form';
import ListGroup from './Component/ListGroup';




const App = () => {
  const [todos,setTodos]=useState([
   
  ])

const addList=(text)=>{
    const newLi={
      id:crypto.randomUUID(),
      text:text

    }
    setTodos([newLi,...todos])
}


const deleteList=(id)=>{

    const todoData = todos.filter((item)=>{  if(item.id !==id){
        return item
      }

    })
    console.log(todoData,"todoData")
    setTodos(todoData)}
//fghjk
///fghjkl
//fghjkl
 
  return (
    
  <>
    <Navbar/>
    <div className='container mt-3'>
      <Form addList={addList}/>
      <ListGroup todos={todos} deleteList={deleteList}/>

    </div>



   
   
    </>
  
   

  )
}

export default App

