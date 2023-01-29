import React from "react";
import { useDispatch } from "react-redux";
import { statusTodo, deleteFetchTodo } from "../redux/todoSlice";
import { Box, Button, List, Checkbox } from "@mui/material";

import "../index.css";

export const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(statusTodo(id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteFetchTodo(id));
  };

  return (
    <List sx={{ minWidth: "500px", display: "flex", ml: "100px"}}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid grey",
          borderRadius: "5px",
        }}
        className={completed ? "complete" : ""}
      >
        <Box>
          <Checkbox
            checked={completed}
            onChange={handleCompleteClick}
          ></Checkbox>
          <b>{title}</b>
        </Box>
        <Button color="error" variant="outlined" onClick={handleDeleteTodo}>
          Delete
        </Button>
      </Box>
    </List>
  );
};
