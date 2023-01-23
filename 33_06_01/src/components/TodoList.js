import React from "react";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return todos.length ? (
    <div className="container justify-content-center">
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  ) : (
    <div className="container text-center">There aren't todos</div>
  );
};
