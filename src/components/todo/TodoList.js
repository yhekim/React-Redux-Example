import React from "react";
import TodoItem from "./TodoItem";
import { useSelector,useDispatch } from "react-redux";
import { clearTodoList } from "../../redux/actions/todoActions";

const TodoList = () => {
  const dispatch=useDispatch();
  const {list}=useSelector(state=>state.todoReducer);
  console.log("list",list)

  const handleClearList = () => {
dispatch(clearTodoList())
  };
  
  return (
    <div>
      <div>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
