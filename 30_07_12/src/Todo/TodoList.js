import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import "./Components/styles.css"
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  const [filter, setFilter] = useState(props);

  useEffect(() => {
    setFilter(props);
  }, [props]);

  function todoFilter(status) {
    if (status === "all") {
      setFilter(props);
    } else {
      const newTodo = props.todos.filter((item) => item.completed === status);
      setFilter((prev) => ({ ...prev, todos: newTodo }));
    }
  }

  return (
    <>
      <div className={"btn-wrapper"}>
        <button className={"btn"} onClick={() => todoFilter("all")}>All</button>
        <button className={"btn"} onClick={() => todoFilter(true)}>Completed</button>
        <button className={"btn"} onClick={() => todoFilter(false)}>In Progress</button>
      </div>
      <ul style={styles.ul}>
        {filter.todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              index={index}
              onChange={props.onToggle}
            />
          );
        })}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
