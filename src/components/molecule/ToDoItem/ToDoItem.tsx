import React, { useState } from 'react'
import CheckBox from '../../atom/Checkbox'
import KebabMenu from '../../atom/KebabMenu'
import { ToDoItemContainer, ToDoItemText } from './elements'
import { ToDoItemProps } from './types'

const ToDoItem = ({onDelete,onUpdate,value,onSelect,selected,selectionMode,completed,deleteDrawer,onTextClick}: ToDoItemProps) => {
        const [popupmenu,setpopupmenu] = useState(false);
  return (
    <ToDoItemContainer className={selectionMode?" ":"justified"}>
        {completed?" ":selectionMode?<CheckBox checked={selected||false} onChange={onSelect}/>:" "}
        <ToDoItemText className={completed?"completed":popupmenu?"popupmenu":deleteDrawer?"deletedrawer":" "} onClick={selectionMode?()=>{}:onTextClick}>{value}</ToDoItemText>
        {completed?" ":selectionMode?" ":<KebabMenu onDelete={onDelete} onUpdate={onUpdate} onOpen={()=>{setpopupmenu(!popupmenu)}} onBlur={()=>{setpopupmenu(!popupmenu)}}/>}
    </ToDoItemContainer>
  )
}

export default ToDoItem