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
    const [selectedToDos,setSelectedToDos] = useState<todoprops[]>([]);
    const [targetToDo,setTargetToDo] = useState<todoprops>({} as todoprops);
    const [deletedrawer,setDeletedrawer] = useState<boolean>(true);
    const todos = useSelector(selectAlltodos)
    const dispatch = useDispatch()
    const uncompletedtodos = todos.filter(currentTodo =>{return !currentTodo.complete})
    const completedtodos = todos.filter(currentTodo =>{return currentTodo.complete})
    const todoitem = (todo: todoprops) => {

        return <ToDoItem 
        onSelect={()=>{ if(selectedToDos.includes(todo)){
               setSelectedToDos(selectedToDos.filter(currentTodo =>{ return !(currentTodo.id===todo.id)}))
               } else{ 
               setSelectedToDos(prevselectedToDos => [...prevselectedToDos,todo])
               }
           }} 
        selected={selectedToDos.includes(todo)} 
        selectionMode={selectionMode} 
        key={todo.id} 
        value={todo.todotext} 
        completed={todo.complete}
        onTextClick={()=>{setTargetToDo(todo);dispatch(completetodo(targetToDo))}}
        onDelete={()=>{setTargetToDo(todo);setDeletedrawer(false)}}
        onUpdate={()=>{UpdateCallback()}}/>
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
            onDeleteSelected={()=>{<><Toast duration={3} message={"To Do's Deleted"}/>{dispatch(deletetodos([...selectedToDos]))}</>}} 
            onCompleteSelected={()=>{<><Toast duration={3} message={"To Do's Completed"}/>{dispatch(completetodos([...selectedToDos]))}</>}} 
            onSelectAll={()=>{setSelectedToDos([...todos])}} 
            hide={()=>setSelectedToDos([])} 
            hidden={selectedToDos.length===0}/>
            <DeleteToDoDrawer 
            onYes={()=> {<><Toast duration={3} message={"To Do Deleted"}/>{dispatch(deletetodo(targetToDo))}</>}} 
            hide={()=>{setDeletedrawer(true)}} 
            hidden={deletedrawer}/>
    </ToDoListContainer>
  )
}

export default ToDoList