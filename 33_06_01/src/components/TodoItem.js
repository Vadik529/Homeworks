import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li
      className={
        completed
          ? "text-decoration-line-through list-group-item bg-danger"
          : "list-group-item"
      }
    >
      <div className="container d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-4"
            checked={completed}
            onChange={handleCompleteClick}
          ></input>
          <b className="ml-3">{title}</b>
        </span>
        <button className="btn btn-secondary" onClick={handleDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  );
};
