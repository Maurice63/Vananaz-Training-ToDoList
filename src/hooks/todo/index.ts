import React from "react";
import { todoprops } from "../../redux/features/ToDos";
import { useClient } from "../client";

export type firestoretodo = {
  todotext: string;
  complete: boolean;
  userId: string;
};

export type TodoHooks = {
  useTodoAction(): {
    fetchTodoList: () => Promise<void>;
    updateTodo: (
      id: string,
      todotext: string,
      complete: boolean
    ) => Promise<void>;
    addTodo: (todotext: string) => Promise<void>;
    deleteTodo: (id: string) => Promise<void>;
    batchProcess: (todos: todoprops[], complete: boolean) => Promise<void>;
  };
};

export const TodoHooksContext = React.createContext<TodoHooks | null>(null);

export const useTodoAction: TodoHooks["useTodoAction"] = () => {
  const client = useClient(TodoHooksContext);
  return client.useTodoAction();
};
