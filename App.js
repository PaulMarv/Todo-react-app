import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './component/Header';
import { Form } from './component/Form';
import { TodoList } from './component/TodoList'

const App = () => {
  
  const [inputText, setInputText] = useState("")
  const [todos,setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filterTodo, setFilterTodo] = useState([])

  useEffect(()=>{
    filterHandler()
  }, [todos, status])

  const filterHandler = () =>{
    switch (status) {
      case "completed":
        setFilterTodo(todos.filter(todo=> todo.completed))
        break;
      case "uncompleted":
        setFilterTodo(todos.filter(todo=> !todo.completed))
        break;
    
      default:
        setFilterTodo(todos)
        break;
    }
  }


  return (
    <div className = 'App'>
      <Header/>
      <Form setInputText= { setInputText }
        todos ={ todos }
        setTodos = { setTodos }
        inputText = { inputText }
        status={ status }
        setStatus = { setStatus }
       
      />
      <TodoList todos = { todos }
                setTodos = {setTodos}
                filterTodo ={filterTodo}
                />
    </div>
  )
}
 export default App;