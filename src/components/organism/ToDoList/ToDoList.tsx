import React, { useEffect, useState } from "react";
import { selectAlltodos, todoprops } from "../../../redux/features/ToDos";
import DeleteSelectedToDoDrawer from "../../molecule/DeleteSelectToDoDrawer";
import DeleteToDoDrawer from "../../molecule/DeleteToDoDrawer";
import ToDoItem from "../../molecule/ToDoItem";
import {
  Container,
  NoToDoContainer,
  NoToDoImg,
  NoToDop,
  ToDoListContainer,
  ToDoListList,
} from "./elements";
import { ToDoListProps } from "./types";
import { useSelector } from "react-redux";
import checkListSVG from "../../../assets/checkListSVG.png";
import TextLink from "../../atom/TextLink";
import { useTodoAction } from "../../../hooks/todo";

const ToDoList = ({
  selectionMode,
  UpdateCallback,
  searchedTodos,
  addToDo,
  search,
}: ToDoListProps) => {
  //global state>
  const reduxToDos = useSelector(selectAlltodos);
  const { deleteTodo, updateTodo, batchProcess } = useTodoAction();
  //<
  //compoment state>
  const [selectedToDos, setSelectedToDos] = useState<todoprops[]>([]);
  const [targetToDo, setTargetToDo] = useState<todoprops>({} as todoprops);
  const [deletedrawer, setDeletedrawer] = useState<boolean>(true);
  let sortedToDos: todoprops[] = [];
  //<
  //override/sort>
  if (search) {
    if (searchedTodos === undefined) {
    } else {
      if (searchedTodos.length > 0) {
        sortedToDos = [...searchedTodos];
      }
    }
  } else {
    //sorts between complete and uncomplete >
    const uncompletedtodos = reduxToDos.filter((currentTodo) => {
      return !currentTodo.complete;
    });
    const completedtodos = reduxToDos.filter((currentTodo) => {
      return currentTodo.complete;
    });
    sortedToDos = [...uncompletedtodos, ...completedtodos];
    //<
  }
  //<
  //>
  const isFilled = sortedToDos.length;
  const selectedAll = sortedToDos === selectedToDos;
  const noReduxToDos = !(reduxToDos.length > 0);
  //<
  //Additional helper func>
  useEffect(() => {
    setSelectedToDos([]);
  }, [selectionMode]);
  const onYes = () => {
    deleteTodo(targetToDo.id);
  };
  const onDeleteAllSelected = () => {
    batchProcess(selectedToDos, false);
  };
  const onCompleteAllSelected = () => {
    batchProcess(selectedToDos, true);
  };
  const todoitemOnSelect = (todo: todoprops) => {
    if (selectedToDos.includes(todo)) {
      setSelectedToDos(
        selectedToDos.filter((currentTodo) => {
          return !(currentTodo.id === todo.id);
        })
      );
    } else {
      setSelectedToDos((prevselectedToDos) => [...prevselectedToDos, todo]);
    }
  };
  const todoitemOnTextClick = (todo: todoprops) => {
    updateTodo(todo.id, "", todo.complete);
  };
  const todoitemOnDelete = (todo: todoprops) => {
    setTargetToDo(todo);
    setDeletedrawer(false);
  };
  const todoitemOnUpdate = (todo: todoprops) => {
    UpdateCallback(todo);
  };
  const onSelectAll = () => {
    if (selectedAll) {
      setSelectedToDos([]);
    } else {
      setSelectedToDos([...sortedToDos]);
    }
  };
  const PreparedTodoitem = (todo: todoprops) => {
    return (
      <ToDoItem
        onSelect={() => todoitemOnSelect(todo)}
        selected={selectedToDos.includes(todo)}
        selectionMode={selectionMode}
        key={todo.id}
        value={todo.todotext}
        completed={todo.complete}
        deleteDrawer={targetToDo.id === todo.id && !deletedrawer}
        onTextClick={() => {
          todoitemOnTextClick(todo);
        }}
        onDelete={() => {
          todoitemOnDelete(todo);
        }}
        onUpdate={() => {
          todoitemOnUpdate(todo);
        }}
      />
    );
  };
  //<
  return (
    <Container>
      {isFilled ? (
        <>
          <ToDoListContainer className={isFilled ? "" : "NoToDo"}>
            <ToDoListList>
              {sortedToDos.map((todo: todoprops) => {
                return PreparedTodoitem(todo);
              })}
            </ToDoListList>
          </ToDoListContainer>
          <DeleteSelectedToDoDrawer
            onDeleteSelected={() => {
              onDeleteAllSelected();
            }}
            onCompleteSelected={() => {
              onCompleteAllSelected();
            }}
            onSelectAll={() => {
              onSelectAll();
            }}
            allSelected={selectedAll}
            hide={() => setSelectedToDos([])}
            hidden={selectedToDos.length === 0}
          />
          <DeleteToDoDrawer
            onYes={() => {
              onYes();
            }}
            hide={() => {
              setDeletedrawer(true);
            }}
            hidden={deletedrawer}
          />
        </>
      ) : (
        <NoToDoContainer>
          <NoToDoImg>
            <img src={checkListSVG} alt={"No To Do Icon"} width={"100%"} />
          </NoToDoImg>
          {noReduxToDos && selectionMode ? (
            <NoToDop>{"No to do yet"}</NoToDop>
          ) : noReduxToDos ? (
            <NoToDop>{"To do list increases productivity"}</NoToDop>
          ) : (
            <NoToDop>{"No to do found."}</NoToDop>
          )}
          {noReduxToDos ? (
            <TextLink onClick={addToDo} text={"Add your first to do"} />
          ) : (
            <NoToDop>{"Try different keywords."}</NoToDop>
          )}
        </NoToDoContainer>
      )}
    </Container>
  );
};

export default ToDoList;
