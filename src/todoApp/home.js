import React,{useState} from 'react'

import Todos from './todos'
import style from "./home.module.css"
import Newtodo from './new-todo';
import {v4 as uuidv4} from "uuid"






export default function Home() {

  const [todos,settodo]=useState([])
  const handleTodo=(todo)=>{
settodo((prevstodo)=>{
  return [...prevstodo, {id:uuidv4(), todo}]
})

  }

  const handleremove=(id)=>{

settodo((prevstodo)=>{
  const filtertodo=prevstodo.filter((todo)=>todo.id!==id)
  return filtertodo
})
  }
  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <Newtodo  onHandle={handleTodo}/>
      <Todos todos={todos}  onremove={handleremove}/>
    </div>
  )
}
