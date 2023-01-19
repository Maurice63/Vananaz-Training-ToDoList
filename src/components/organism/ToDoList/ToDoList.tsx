import React,{useEffect, useState} from 'react'
import { completetodo, completetodos, deletetodo, deletetodos, selectAlltodos, todoprops} from '../../../redux/features/ToDos'
import DeleteSelectedToDoDrawer from '../../molecule/DeleteSelectToDoDrawer'
import DeleteToDoDrawer from '../../molecule/DeleteToDoDrawer'
import ToDoItem from '../../molecule/ToDoItem'
import { Container, NoToDoContainer, NoToDoImg, NoToDop,ToDoListContainer, ToDoListList } from './elements'
import { ToDoListProps } from './types'
import { useSelector,useDispatch } from "react-redux"
import Toast from '../../atom/Toast'
import Vector from '../../../assets/Vector.png'
import TextLink from '../../atom/TextLink'


const ToDoList = ({selectionMode,UpdateCallback,searchedTodos,addToDo,search}: ToDoListProps) => {
    //global state>
    const reduxToDos = useSelector(selectAlltodos)
    const dispatch = useDispatch()
    //<
    //compoment state>
    const [selectedToDos,setSelectedToDos] = useState<todoprops[]>([]);
    const [targetToDo,setTargetToDo] = useState<todoprops>({} as todoprops);
    const [deletedrawer,setDeletedrawer] = useState<boolean>(true);
    let sortedToDos:todoprops[] = []
    //<
    //override/sort>
        if(search){
            if(searchedTodos===undefined){
            }else {
                if(searchedTodos.length > 0){
                    sortedToDos = [...searchedTodos];
                    }
            }
        }
        else {
            //sorts between complete and uncomplete >
            const uncompletedtodos = reduxToDos.filter(currentTodo =>{return !currentTodo.complete})
            const completedtodos = reduxToDos.filter(currentTodo =>{return currentTodo.complete})
            sortedToDos = [...uncompletedtodos,...completedtodos]
            //<
        }
    //<
    //>
    const Filled = sortedToDos.length;
    const selectedAll = sortedToDos === selectedToDos;
    const NoReduxToDos = !(reduxToDos.length > 0);
    //<
    //Additional helper func>
    useEffect(()=>{setSelectedToDos([])},[selectionMode])
    const DrawerOnYes = ()=> {
        Toast({message:"To Do Deleted."}); 
        dispatch(deletetodo(targetToDo)); 
    }
    const SDrawerOnDeleteSelected = () =>{
        Toast({message:"To Dos Deleted."}); 
        dispatch(deletetodos([...selectedToDos])); 
    }
    const SDrawerOnCompleteSelected = () =>{
        Toast({message:"To Dos Completed."});
        dispatch(completetodos([...selectedToDos])); 
    }
    const onSelectAll = () =>{
        if(selectedAll){
            setSelectedToDos([])
        } else {
            setSelectedToDos([...sortedToDos])
        }
    }
    //<
        const todoitem = (todo: todoprops) => {
            //Additional helper func>
            const todoitemOnSelect = () => { if(selectedToDos.includes(todo)){
                setSelectedToDos(selectedToDos.filter(currentTodo =>{ return !(currentTodo.id===todo.id)}))
                } else{ 
                setSelectedToDos(prevselectedToDos => [...prevselectedToDos,todo])
                }
            }
            const todoitemOnTextClick = () => {
                dispatch(completetodo(todo)); 
            }
            const todoitemOnDelete = () =>{ 
                setTargetToDo(todo);setDeletedrawer(false); 
            }
            const todoitemOnUpdate = () =>{UpdateCallback(todo)}
            //<
            return <ToDoItem 
            onSelect={()=>todoitemOnSelect()} 
            selected={selectedToDos.includes(todo)} 
            selectionMode={selectionMode} 
            key={todo.id} 
            value={todo.todotext} 
            completed={todo.complete}
            onTextClick={()=>{todoitemOnTextClick()}}
            onDelete={()=>{todoitemOnDelete()}}
            onUpdate={()=>{todoitemOnUpdate()}}/>
        }        
  return (
    <Container>
    {Filled?
    <>
        <ToDoListContainer className={Filled? "": "NoToDo"}>
            <ToDoListList>
                {sortedToDos.map((todo: todoprops) =>{ return todoitem(todo)})}
            </ToDoListList>
        </ToDoListContainer>
        <DeleteSelectedToDoDrawer 
        onDeleteSelected={()=>{SDrawerOnDeleteSelected()}} 
        onCompleteSelected={()=>{SDrawerOnCompleteSelected()}} 
        onSelectAll={()=>{onSelectAll()}} 
        allSelected={selectedAll}
        hide={()=>setSelectedToDos([])} 
        hidden={selectedToDos.length===0}/>
        <DeleteToDoDrawer 
        onYes={()=> {DrawerOnYes()}} 
        hide={()=>{setDeletedrawer(true)}} 
        hidden={deletedrawer}/>
        </>
        :
        <NoToDoContainer>
            <NoToDoImg>
                <img src={Vector} alt={"No To Do Icon"} width={"100%"}/>
            </NoToDoImg>
            {NoReduxToDos&&selectionMode? <NoToDop>{"No to do yet"}</NoToDop>: 
            NoReduxToDos? <NoToDop>{"To do list increases productivity"}</NoToDop>:
            <NoToDop>{"No to do found."}</NoToDop>}
            {NoReduxToDos? <TextLink onClick={addToDo} text={"Add your first to do"}/> : <NoToDop>{"Try different keywords."}</NoToDop>}
        </NoToDoContainer>
    }
    </Container>
  )
}

export default ToDoList