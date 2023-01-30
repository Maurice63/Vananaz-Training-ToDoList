import React from 'react'
import { useHistory } from 'react-router-dom'
import ToDoListTemplate from '../../template/ToDoList'



const ToDoListPage = () => {
  const history = useHistory();
  const onLogOut = ()=>{
    //add LogOut
    history.push("/");
  }
  return (
    <ToDoListTemplate
    toLogIn={onLogOut}
    />
  )
}

export default ToDoListPage