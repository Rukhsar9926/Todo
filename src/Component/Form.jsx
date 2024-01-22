import React, { useEffect, useState } from 'react'

const Form = ({ addList,edit,updateList }) => {

  const [text, setText] = useState("")

  const handleChange = (e) => {
    if (e.target.value) {
      setText(e.target.value)
      console.log(text)
    }

  }


  const handleSubmit = (e) => {
    // console.log(ext)
    if (text) {
      setText("")
      // addList(text)
      if(edit.editMode===true){
        updateList(edit.item.id,text)
      }
      else{
        addList(text)

      }
    }
  }


  useEffect(()=>{
    console.log(123)
    setText(edit.item.text)

  },[edit])






  return (
    <>
      <form>
        <input type="text" class="form-control" placeholder="Enter" onChange={handleChange} value={text} />
        <div class="d-grid gap-2">
          <button class="btn btn-primary mt-3" type="button" onClick={handleSubmit}>Add</button>


        </div>




      </form>

    </>
  )
}

export default Form