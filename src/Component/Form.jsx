import React, { useState } from 'react'

const Form = ({addList}) => {

  const[text,setText]=useState("")
  

  
  
const handleChange =(e)=>{
    setText(e.target.value)
    console.log(text)

  }
  const handleSubmit =(e)=>{
    console.log(text)
    setText("")
    addList(text)
}
  




   
  return (
  <>
  <form>
  <input type="text" class="form-control" placeholder="Enter"onChange={handleChange} value={text}/>
  <div class="d-grid gap-2">
  <button class="btn btn-primary mt-3" type="button" onClick={handleSubmit}>Add</button>

 
</div>
    
    


  </form>

  </>
  )
}

export default Form