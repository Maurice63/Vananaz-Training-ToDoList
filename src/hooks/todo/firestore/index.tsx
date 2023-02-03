import { useCallback } from "react";
import { useDispatch } from "react-redux";
import firebase from "../../../firebase/firebaseConfig";
import { addtodos, todoprops } from "../../../redux/features/ToDos";
import { userProps } from "../../../redux/features/User";

import { TodoHooks } from "../index";

export const COLLECTION_NAME = "todos";

export const useTodoAction: TodoHooks["useTodoAction"] = () => {
  //redux user.uid const { user } = useAuth();
  const dispatch = useDispatch();
  const fetchTodoList = useCallback(async (user: userProps) => {
    const todoList: todoprops[] = [];
    await firebase
      .firestore()
      .collection(COLLECTION_NAME)
      .get()
      .then((result) => {
        result.forEach((item) => {
          if (item.get("userId") === user.uid) {
            todoList.push({
              id: item.id,
              todotext: item.get("todotext"),
              complete: item.get("complete"),
            });
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(todoList);
    console.log(user);
    await dispatch(addtodos(todoList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateTodo = useCallback(
    async (
      user: userProps,
      id: string,
      todotext: string | undefined,
      complete: boolean | undefined
    ) => {
      if (user.uid !== "") {
        throw new Error(`User not loggeed in`);
      }
      const docRef = firebase.firestore().collection(COLLECTION_NAME).doc(id);
      if (todotext !== "" && (complete === null || complete === undefined)) {
        await docRef
          .update({
            todotext: todotext,
          })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      }
      if (todotext === "" && (complete !== null || complete !== undefined)) {
        await docRef
          .update({
            complete: complete,
          })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      }
    },
    []
  );

  const addTodo = useCallback(async (todotext: string, user: userProps) => {
    if (user.uid !== "") {
      throw new Error(`User not loggeed in`);
    }
    await firebase.firestore().collection(COLLECTION_NAME).add({
      complete: false,
      todotext: todotext,
      userId: user.uid,
    });
  }, []);
  const deleteTodo = useCallback(async (id: string, user: userProps) => {
    if (user.uid !== "") {
      throw new Error(`User not loggeed in`);
    }
    await firebase
      .firestore()
      .collection(COLLECTION_NAME)
      .doc(id)
      .delete()
      .then();
  }, []);
  return { fetchTodoList, deleteTodo, addTodo, updateTodo };
};
