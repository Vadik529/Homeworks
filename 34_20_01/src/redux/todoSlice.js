import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://127.0.0.1:3333";
const SLICE_NAME = "todos";

export const fetchTodos = createAsyncThunk(
  `${SLICE_NAME}/fetchTodos`,
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetch(`${API_URL}/${SLICE_NAME}`).then((response) =>
        response.json()
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFetchTodo = createAsyncThunk(
  `${SLICE_NAME}/deleteFetchTodo`,
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const data = await fetch(`${API_URL}/${SLICE_NAME}/${id}`, {
        method: "DELETE",
      });
      dispatch(deleteTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postTodo = createAsyncThunk(
  `${SLICE_NAME}/postTodo`,
  async (text, { rejectWithValue, dispatch }) => {
    try {
      const newTodo = {
        id: Date.now(),
        title: text,
        completed: false,
      };
      const response = await fetch(`${API_URL}/${SLICE_NAME}`, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch(addTodo(data));
      return response;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const statusTodo = createAsyncThunk(
  `${SLICE_NAME}/statusTodo`,
    async (id, {rejectWithValue, dispatch, getState}) => {
      const todo = getState().todos.todosList.find((item) => item.id === id);
      try {
        const response = await fetch(`${API_URL}/${SLICE_NAME}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },  
          body: JSON.stringify({id: id, title: todo.title, completed: !todo.completed})
        })
        if(!response.ok) {
          throw new Error("Can't change todo's status")
        }
        dispatch(toggleComplete({id}))
      } catch (error) {
        rejectWithValue(error.message)
      }
  }
)

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todosList: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todosList.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const index = state.todosList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todosList[index].completed = !state.todosList[index].completed;
    },
    deleteTodo: (state, action) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, { payload }) => {
      state.status = "resolved";
      state.todosList = payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "resolved";
      state.error = action.payload;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
