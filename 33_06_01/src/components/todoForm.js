import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: value }));
    setValue("");
  };

  return (
    <div className="container justify-content-center">
      <form onSubmit={onSubmitHandler} className="form-inline mt-3">
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Add todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mb-2">
          Add
        </button>
      </form>
    </div>
  );
};
