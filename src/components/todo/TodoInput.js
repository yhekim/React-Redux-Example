import React,{useState} from "react";
import {useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";


const TodoInput = () => {
  const dispatch=useDispatch()
  const [text, setText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hand",text)
    if (text) {
      dispatch(addTodo(text))
      setText("")
      
    }
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} className="todo-input" type="text" onChange={(e)=>setText(e.target.value)}  placeholder="Add Todo" />
      <button className="add-button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
