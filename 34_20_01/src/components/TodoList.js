import React from "react";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";
import { Container, Box, List } from "@mui/material";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return todos.length ? (
    <Container maxWidth="md" sx={{display: "flex", justifyContent: "space-between"}}>
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
    <Box sx={{display: "flex", justifyContent: "center", mt: "50px"}}>There aren't todos</Box>
  );
};
