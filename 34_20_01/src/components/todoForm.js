import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";

export const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: value }));
    setValue("");
  };

  return (
    <Box component="form" onSubmit={onSubmitHandler} sx={{ mt: "20px", display: "flex", justifyContent: "center" }}>
      <TextField
        type="text"
        label="Add todo..."
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <Fab sx={{ml: "10px"}} variant="extended" type="submit">
        <AddIcon />
      </Fab>
    </Box>
  );
};
