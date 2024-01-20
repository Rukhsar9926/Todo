import React from 'react'

const ListItem = ({item,deleteList}) => {

    
return (
   <>
   <li class="list-group-item" >{item?.text}   
   <button type="button" class="btn btn-danger float-end"onClick={()=>deleteList(item.id)} >Delete</button>
   <button type="button" class="btn btn-warning float-end " >Edit</button>
   </li>
   </>
  )
}

export default ListItem