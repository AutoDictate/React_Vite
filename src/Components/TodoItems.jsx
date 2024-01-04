import React from 'react'
import './css/TodoItems.css';
import tick from './assets/tick.png';
import not_tick from './assets/not_tick.png';
import cross from './assets/cross.png';

const TodoItems = ({no,display,text, setTodos}) => {

    const del = (no) =>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo)=> todo.no != no);
        setTodos(data);
    }

    const toggle = (no)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        for(let i=0;i<data.length;i++){
            if(data[i].no===no){
                if(data[i].display === ""){
                    data[i].display = "line-through";
                }
                else{
                    data[i].display = "";
                }
                break;
            }
        }
        setTodos(data);
    }
  return (
    
    <div className='todo-items'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
            {display ===""?<img className='tick' src={not_tick} alt="" />:<img className='tick' src={tick} alt="" />}
            <div className="todoitems-text">{text}</div>
        </div>
            <img className="todo-items-crossicon" onClick={()=>{del(no)}} src={cross} alt="" />
    </div>
  )
}

export default TodoItems