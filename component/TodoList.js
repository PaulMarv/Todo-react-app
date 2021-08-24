import React from 'react'
import { Todo } from './Todo';

export const TodoList = ({todos, setTodos, filterTodo}) => {
    return (
        
        <div className="todo-container">
          <ul className="todo-list"> 
            {filterTodo.map(todo =>( 
                <Todo key ={ todo.id } 
                      text = { todo.text }
                      todo = {todo}
                      todos= { todos } 
                      setTodos = {setTodos}

                />
            ))}
          </ul>
        </div>
    )
}
