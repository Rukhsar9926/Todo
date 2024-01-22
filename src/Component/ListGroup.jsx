import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({todos, deleteList, editList }) => {

  return (
   <>
   <ul class="list-group mt-3">
    
    {todos.map((item)=> <ListItem item={item} deleteList={deleteList} editList={editList}/> )}
   
    
   </ul >

   </>
  )
}

export default ListGroup