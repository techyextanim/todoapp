import React, { useState } from 'react'

import style from './newtodos.module.css'




export default function Newtodo(props) {

    const [todo,settodos]=useState({title:"" ,des:""})
const {title,des}=todo

const handleSubmit=(event)=>{
event.preventDefault();
props.onHandle(todo)
settodos({title:"" ,des:" "})

}

const handleChange=(e)=>{
  const name=e.target.name;
  settodos((prevtodos)=>{
    return {...prevtodos,[name]:e.target.value}
  })


}
  return <form onSubmit={handleSubmit} className={style.field}>
 <div className={style["field-form"]}>
  <label htmlFor='title'>Title    : </label>
  <input onChange={handleChange} name="title" id="title" value={title}></input>

 </div>

 <div className={style["field-form"]}>
  <label htmlFor='des'>Description:</label>
  <textarea  onChange={handleChange} name="des" id="des" value={des}></textarea>

 </div>
 <button type='submit'>Submit</button>


  </form>
}
