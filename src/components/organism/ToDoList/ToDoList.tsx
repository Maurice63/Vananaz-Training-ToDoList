import React,{useState} from 'react'
import { completetodo, completetodos, deletetodo, deletetodos, selectAlltodos, todoprops} from '../../../redux/features/ToDos'
import DeleteSelectedToDoDrawer from '../../molecule/DeleteSelectToDoDrawer'
import DeleteToDoDrawer from '../../molecule/DeleteToDoDrawer'
import ToDoItem from '../../molecule/ToDoItem'
import { ToDoListContainer, ToDoListList } from './elements'
import { ToDoListProps } from './types'
import { useSelector,useDispatch } from "react-redux"
import Toast from '../../atom/Toast'

const ToDoList = ({selectionMode,UpdateCallback}: ToDoListProps) => {
    //global state >
    const todos = useSelector(selectAlltodos)
    const dispatch = useDispatch()
    //<
    //local states >
    const [selectedToDos,setSelectedToDos] = useState<todoprops[]>([]);
    const [targetToDo,setTargetToDo] = useState<todoprops>({} as todoprops);
    const [deletedrawer,setDeletedrawer] = useState<boolean>(true);
    //<
    //sorts between complete and uncomplete >
    const uncompletedtodos = todos.filter(currentTodo =>{return !currentTodo.complete})
    const completedtodos = todos.filter(currentTodo =>{return currentTodo.complete})
    //<
    //Additional helper func>
    const DrawerOnYes = ()=> {Toast({message:"To Do Deleted."}); dispatch(deletetodo(targetToDo))}
    const SDrawerOnDeleteSelected = () =>{Toast({message:"To Dos Deleted."}); dispatch(deletetodos([...selectedToDos]))}
    const SDrawerOnCompleteSelected = () =>{Toast({message:"To Dos Completed."});dispatch(completetodos([...selectedToDos]))}
    
    //<
        const todoitem = (todo: todoprops) => {
            //Additional helper func>
            const todoitemOnSelect = () => { if(selectedToDos.includes(todo)){
                setSelectedToDos(selectedToDos.filter(currentTodo =>{ return !(currentTodo.id===todo.id)}))
                } else{ 
                setSelectedToDos(prevselectedToDos => [...prevselectedToDos,todo])
                }
            }
            const todoitemOnTextClick = () => {setTargetToDo(todo);dispatch(completetodo(targetToDo))}
            const todoitemOnDelete = () =>{ setTargetToDo(todo);setDeletedrawer(false)}
            const todoitemOnUpdate = () =>{ Toast({message:"To Do Updated."}); UpdateCallback()}
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
    <ToDoListContainer>
        <ToDoListList>
            {
                uncompletedtodos.map((todo: todoprops) =>{ return todoitem(todo)})
            }
            { selectionMode? "":
                completedtodos.map((todo: todoprops) =>{ return todoitem(todo)}) 
            }
        </ToDoListList>
            <DeleteSelectedToDoDrawer 
            onDeleteSelected={()=>{SDrawerOnDeleteSelected()}} 
            onCompleteSelected={()=>{SDrawerOnCompleteSelected()}} 
            onSelectAll={()=>{setSelectedToDos([...todos])}} 
            hide={()=>setSelectedToDos([])} 
            hidden={selectedToDos.length===0}/>
            <DeleteToDoDrawer 
            onYes={()=> {DrawerOnYes()}} 
            hide={()=>{setDeletedrawer(true)}} 
            hidden={deletedrawer}/>
    </ToDoListContainer>
  )
}

export default ToDoList