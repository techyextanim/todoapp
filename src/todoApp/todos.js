import React from 'react'

import Todo from './todo'
import style from "./todos.module.css"

export default function Todos(props) {
   
  return (

<section className={style.todos}>

{props.todos.map((todo)=>(<Todo key={todo.id} todo={todo.todo} id={todo.id} onremoveitem={props.onremove} />))}


</section>
  
  
  )
}
