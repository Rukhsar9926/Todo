import React, { useState,us } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Component/Navbar';
import Form from './Component/Form';
import ListGroup from './Component/ListGroup';




const App = () => {
  const [todos, setTodos] = useState([

  ])

  const [edit,setEdit]=useState({
    item:{},
    editMode: false



  })



  const addList = (text) => {
    const newLi = {
      id: crypto.randomUUID(),
      text: text

    }
    setTodos([newLi, ...todos])
  }


  const deleteList = (id) => {
    const todoData = todos.filter((item) => {
      if (item.id !== id) {
        return item
      }

    })
    console.log(todoData, "todoData")
    setTodos(todoData)
  }



  const editList= (item) => {
    setEdit({
      item : item,
      editMode: true
    })
    }


  
  const updateList =(oldId,newText)=>{
    setTodos(todos.map((newitem)=>
    newitem.id==oldId ?{id:oldId,text:newText}:newitem))

    setEdit({
      item :{},
      editMode:false
    })
  }






  return (

    <>
      <Navbar />
      <div className='container mt-3'>
        <Form addList={addList} edit={edit} updateList={updateList}/>
        <ListGroup todos={todos} deleteList={deleteList} editList={editList}  />

      </div>





    </>



  )
}

export default App

