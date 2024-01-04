import React, { useEffect, useRef, useState } from 'react'
import './css/Todo.css';
import TodoItems from './TodoItems.jsx';


let count =0;
const Todo = () => {

    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = ()=>{
        setTodos([...todos, {no:count++, text:inputRef.current.value,display:""}]);
        inputRef.current.value="";
        localStorage.setItem("todos_count",count);
    }
    
    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count = localStorage.getItem("todos_count")
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos))
        },100);
    },[todos])

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          add();
        }
      };
  return (
    <div className='todo'>
        <div className='todo-header'>
            To-Do List
        </div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='Add your task' className='todo-input' onKeyPress={handleKeyPress}/>
            <div className="todo-add-btn" onClick={()=>add()} >ADD</div>
        </div>
            <div className="todo-list">
                {todos.map((items,index)=>{
                    return <TodoItems setTodos={setTodos} key={index} no={items.no} display= {items.display} text={items.text}/>
                })}
            </div>
    </div>
  )
}

export default Todo