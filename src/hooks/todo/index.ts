import React from "react";
import { userProps } from "../../redux/features/User";
import { useClient } from "../client";

export type firestoretodo = {
  todotext: string;
  complete: boolean;
  userId: string;
};

export type TodoHooks = {
  useTodoAction(): {
    fetchTodoList: (user: userProps) => Promise<void>;
    updateTodo: (
      user: userProps,
      id: string,
      todotext?: string,
      complete?: boolean
    ) => Promise<void>;
    addTodo: (todotext: string, user: userProps) => Promise<void>;
    deleteTodo: (id: string, user: userProps) => Promise<void>;
  };
};

export const TodoHooksContext = React.createContext<TodoHooks | null>(null);

export const useTodoAction: TodoHooks["useTodoAction"] = () => {
  const client = useClient(TodoHooksContext);
  return client.useTodoAction();
};
