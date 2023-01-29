import React from "react";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { Container, Box, List } from "@mui/material";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todosList);
  const { status, error } = useSelector((state) => state.todos);

  return todos.length && !error ? (
    <Container
      maxWidth="md"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <List>
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
          />
        ))}
      </List>
    </Container>
  ) : (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
      {status === "pending" && <h1>Loading...</h1>}
      {error ? <h1>There are some error...</h1> : <h1>There aren't todos</h1>}
    </Box>
  );
};
