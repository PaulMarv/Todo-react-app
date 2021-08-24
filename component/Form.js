import React from 'react';

export const Form =({inputText, 
    setInputText, 
    todos,
    setTodos,
    setStatus}) => {
    const inputTextHandler = (e)=>{
        console.log(e.target.value)
        setInputText(e.target.value)
    }
    const newTodo =  {text: inputText, completed: false, id:Math.random()*1000}
    const submitTodoHandler = (e) =>{
        e.preventDefault()
        setTodos([
            ...todos, newTodo  
        ]);
        setInputText("")
    }

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    }
    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                    <button onClick = {submitTodoHandler} type="submit" className="todo-button">+</button>
                    <div className="select">
                        <select onChange ={statusHandler} name="todo" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
             </form>
        </div>
    )
}
