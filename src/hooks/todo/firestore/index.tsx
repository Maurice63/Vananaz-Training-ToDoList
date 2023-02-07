import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../../firebase/firebaseConfig";
import {
  addtodos,
  completetodo,
  completetodos,
  deletetodo,
  deletetodos,
  reset,
  todoAdded,
  todoprops,
  updatetodo,
} from "../../../redux/features/ToDos";
import { selectUser } from "../../../redux/features/User";
import Toast from "../../../components/atom/Toast";
import { TodoHooks } from "../index";

export const COLLECTION_NAME = "todos";

export const useTodoAction: TodoHooks["useTodoAction"] = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const fetchTodoList = useCallback(async () => {
    if (user.uid === "") {
      throw new Error(`User not loggeed in`);
    }

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
        dispatch(reset({}));
        dispatch(addtodos(todoList));
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateTodo = useCallback(
    async (id: string, todotext: string, complete: boolean) => {
      const todoUpdated = {
        id: id,
        todotext: todotext,
        complete: complete,
      };
      if (user.uid === "") {
        throw new Error(`User not loggeed in`);
      }

      const docRef = firebase.firestore().collection(COLLECTION_NAME).doc(id);
      if (todotext === "" && (complete !== null || complete !== undefined)) {
        await docRef
          .update({
            complete: !complete,
          })
          .then(() => {
            if (!complete) {
              Toast({ message: "To Do completed." });
            }
            dispatch(completetodo(todoUpdated));
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (todotext !== "" || todotext !== undefined) {
        await docRef
          .update({
            todotext: todotext,
          })
          .then((result) => {
            Toast({ message: "To Do updated." });
            dispatch(updatetodo(todoUpdated));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user.uid]
  );

  const addTodo = useCallback(
    async (todotext: string) => {
      if (user.uid === "") {
        throw new Error(`User not loggeed in`);
      }
      await firebase
        .firestore()
        .collection(COLLECTION_NAME)
        .add({
          complete: false,
          todotext: todotext,
          userId: user.uid,
        })
        .then((result) => {
          const newToDo: todoprops = {
            id: result.id,
            todotext: todotext,
            complete: false,
          };
          dispatch(todoAdded(newToDo));
          Toast({ message: "To Do added." });
          //add the result to redux
        })
        .catch(() => {});
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user.uid]
  );
  const deleteTodo = useCallback(
    async (id: string) => {
      if (user.uid === "") {
        throw new Error(`User not loggeed in`);
      }
      await firebase
        .firestore()
        .collection(COLLECTION_NAME)
        .doc(id)
        .delete()
        .then(() => {
          Toast({ message: "To Do deleted." });
          dispatch(deletetodo({ id: id } as todoprops));
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user.uid]
  );
  const batchProcess = useCallback(
    async (todos: todoprops[], complete: boolean) => {
      if (user.uid === "") {
        throw new Error(`User not loggeed in`);
      }
      const docRef = firebase.firestore().collection(COLLECTION_NAME);
      if (complete) {
        const batch = firebase.firestore().batch();
        todos.forEach((todo) => {
          batch.update(docRef.doc(todo.id), { complete: true });
        });
        await batch.commit().then(() => {
          Toast({ message: "To Dos completed." });
          dispatch(completetodos(todos));
        });
      } else {
        const batch = firebase.firestore().batch();
        todos.forEach((todo) => {
          batch.delete(docRef.doc(todo.id));
        });
        await batch.commit().then(() => {
          Toast({ message: "To Dos deleted." });
          dispatch(deletetodos(todos));
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user.uid]
  );
  return { fetchTodoList, deleteTodo, addTodo, updateTodo, batchProcess };
};
