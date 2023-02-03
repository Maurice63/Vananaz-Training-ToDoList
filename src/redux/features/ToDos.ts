import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

const initialState: todoprops[] = [];

export type todoprops = {
  id: string;
  todotext: string;
  complete: boolean;
};

export type todos = {
  todos: todoprops[];
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: {
      reducer(state, action: PayloadAction<todoprops>) {
        state.push(action.payload);
      },
      prepare({ todotext }: todoprops) {
        return {
          payload: {
            id: nanoid(),
            todotext,
            complete: false,
          },
        };
      },
    },
    addtodos(state, action: PayloadAction<todoprops[]>) {
      const todos = [...action.payload];
      state = todos;
    },
    updatetodo(state, action: PayloadAction<todoprops>) {
      const { id, todotext } = action.payload;
      const existingtodo = state.find((todo: todoprops) => todo.id === id);
      if (existingtodo) {
        existingtodo.todotext = todotext;
        state.splice(
          state.findIndex((todo: todoprops) => todo.id === id),
          1
        );
        state.push(existingtodo);
      }
    },
    completetodo(state, action: PayloadAction<todoprops>) {
      const { id } = action.payload;
      const existingtodo = state.find((todo: todoprops) => todo.id === id);
      if (existingtodo) {
        existingtodo.complete = !existingtodo.complete;
      }
    },
    completetodos(state, action: PayloadAction<todoprops[]>) {
      const todos = action.payload;
      todos.forEach((currenttodo) => {
        const correctTodo = state.find((todo: todoprops) => {
          return todo.id === currenttodo.id;
        });
        if (correctTodo) {
          correctTodo.complete = !correctTodo.complete;
        }
      });
    },
    deletetodo(state, action: PayloadAction<todoprops>) {
      const { id } = action.payload;
      state.splice(
        state.findIndex((todo: todoprops) => todo.id === id),
        1
      );
    },
    deletetodos(state, action: PayloadAction<todoprops[]>) {
      const todos = action.payload;
      todos.forEach((currenttodo) => {
        state.splice(
          state.findIndex((todo: todoprops) => todo.id === currenttodo.id),
          1
        );
      });
    },
  },
});

export const selectAlltodos = (state: todos) => state.todos;

export const {
  todoAdded,
  addtodos,
  completetodo,
  completetodos,
  deletetodo,
  deletetodos,
  updatetodo,
} = todosSlice.actions;

export default todosSlice.reducer;
