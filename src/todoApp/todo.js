import React from 'react'

import style from "./todo.module.css"


export default function Todo(props) {
    const {title,des}=props.todo;
  const {id}=props
    const handleClick=(id)=>{
    props.onremoveitem(id)
    }

  return (
    <article className={style.list}>
    <div>
       <h3> {title}</h3>
       <p>{des}</p>
    </div>
   <div> 
    <button className={style.btn} onClick={()=>{handleClick(id)}}>
        <i className="fa fa-trash fa-2x"> </i>
    </button>
   </div>


    </article>
  )
}
