import React, { useEffect, useRef, useState } from 'react'
import colors from '../../../constants/config/theme/colors'
import IconButton from '../../atom/IconButton'
import { ToDoListTProps,
         ToDoListTHeaderProps, 
         ToDoListInputProps } from './types'

import { LeftOutlined, 
         LogoutOutlined, 
         PlusOutlined, 
         SearchOutlined  } from "@ant-design/icons";

import { Container, 
         ToDoListHeaderContainer, 
         ToDoListHeaderText, 
         ToDoListInputButton, 
         ToDoListInputsContainer,} from './elements';

import ToDoList from '../../organism/ToDoList';
import TextInput from '../../atom/TextInput';
import Button from '../../atom/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlltodos, 
         todoAdded, 
         todoprops, 
         updatetodo } from '../../../redux/features/ToDos';
import Toast from '../../atom/Toast';


const ToDoListTemplate = ({toLogIn}: ToDoListTProps) => {
    //global state>
    const reduxToDos = useSelector(selectAlltodos)
    const dispatch = useDispatch()
    //<
    //component state>
    const [pageType,setPageType] = useState<ToDoListTHeaderProps["type"]>(undefined)
    const [textInput,setTextInput] = useState<string>("")
    let searchwords:string = ""
    const [searchedTodos,setSearchedTodos]= useState<todoprops[]>([])
    const targetToDo = useRef<todoprops>({id: " ",
    todotext: " ",
    complete: false})
    //<
    
    const toReset = () =>{
        setPageType(undefined)
        setTextInput("");
        setSearchedTodos([])
        targetToDo.current={id: " ",
            todotext: " ",
            complete: false}
    }
    const toAddToDo = () => {
        //to add page
        toReset();
        setPageType("add")
    }
    const addToDo = () => {
        //redux action
        const todo:todoprops = {
            id:" ",
            todotext:textInput,
            complete:false
        }
        dispatch(todoAdded(todo))
        Toast({message:"To Do Added"})
        toReset()
        setPageType("add")
    }
    const searchTodos = () =>{
        setSearchedTodos( reduxToDos.filter((todo)=>{
           return todo.todotext.toLowerCase().includes(searchwords.toLowerCase()) && !todo.complete
        }))
    }
    useEffect(()=>{
            if(pageType === undefined && searchwords) {setPageType("search")}
            if(pageType === "search"){
                setSearchedTodos( reduxToDos.filter((todo)=>{
                    return todo.todotext.toLowerCase().includes(searchwords.toLowerCase()) && !todo.complete
                }))
            }}
            ,[pageType, reduxToDos, searchwords])
    
    const updateToDo = () =>{
        const newtodo:todoprops = {
            id:targetToDo.current.id,
            todotext:textInput,
            complete:targetToDo.current.complete
        }
        dispatch(updatetodo(newtodo));
        Toast({message:"To Do Updated"})
        toReset();
        //redux action
    }
    const UpdateCallback = (todo:todoprops) => {
        //to update page
        targetToDo.current = todo;
        setPageType("update")
        setTextInput(targetToDo.current.todotext);
    }
    const onPressEnter=(e: React.KeyboardEvent<HTMLInputElement>):void=>{
        //do this for search, add, update
        setTextInput(e.currentTarget.value);
        if(pageType ==="add"){addToDo()} 
        if(pageType === "update"){updateToDo()}   
    }
    const onChange=(e: React.ChangeEvent<HTMLInputElement>):void=>{
        setTextInput(e.currentTarget.value);
        searchwords = e.currentTarget.value
        if(typeof pageType === 'undefined'){setPageType("search")}
        if(pageType ==="search"){searchTodos();}
        //do this for search
    }
    const onClick = ()=>{
        toReset();
        setPageType("select");
    }
  return (
    <Container>
        <ToDoListheader
        toLogIn={toLogIn}
        toBack={toReset}
        type={pageType}
        back={!(pageType === undefined)}
        />
        <ToDoListInput 
        type={undefined} 
        onChange={onChange} 
        onClick={onClick} 
        onPressEnter={onPressEnter} 
        hide={pageType ==="select"}
        value={textInput}
        />
        {pageType ==="add"||pageType ==="update"?"":
        <ToDoList addToDo={toAddToDo}
        UpdateCallback={UpdateCallback}
        selectionMode={pageType ==="select"||pageType ==="search"? true:false}
        search={pageType ==="search"? true:false}
        searchedTodos={searchedTodos}
        />}
        {(pageType===undefined)
        ?
        <IconButton 
            bShape={"circle"} 
            bType={"floatIconButton"} 
            bsize={"large"}
            color={colors.bluePrimary}
            fontColor={colors.white}
            children={<PlusOutlined/>}
            onClick={toAddToDo}
            style={{position:"absolute",
            bottom:"10px",
            right:"10px",
            zIndex:"revert-layer"}}/>:""}
    </Container>
  )
}

///could be moved as a separate component
const ToDoListInput = ({type,onChange,onClick,onPressEnter,hide,value}:ToDoListInputProps) =>{
    return(
        <ToDoListInputsContainer className={hide?"hide":""}>
            <TextInput 
            value={value}
            placeholder={type !== "search" || type ?"":"Search..."}
            prefix={type === "search"?<SearchOutlined/>: " "}
            style={{width:"100%"}}
            onPressEnter={onPressEnter} 
            onChange={onChange} 
            allowClear/>
            <ToDoListInputButton className={type?.length?"hide":""}>
            <Button onClick={onClick} bsize={"middle"} bType={"secondary"} label={"Select"}/>
            </ToDoListInputButton>
        </ToDoListInputsContainer>
    )
}

//could be moved as a separate component
const ToDoListheader = ({toLogIn,toBack,type,back}: ToDoListTHeaderProps) => {

    return(
        <ToDoListHeaderContainer className={back?"back":""}>
            {back? <IconButton 
            bShape={"square"} 
            bType={"iconButton"} 
            bsize={"middle"}
            color={colors.transparent}
            fontColor={colors.bluePrimary}
            children={<LeftOutlined/>}
            onClick={()=>{toBack()}}/>:" "}
            {
            <ToDoListHeaderText className={type===undefined?" ":"back"}>
                {type === "search"?"Search To Do": 
                 type === "select"?"Select To Do": 
                 type === "update" ? "Update To Do" : 
                 type === "add"? "Add To Do" :
                 "ToDoish"}
            </ToDoListHeaderText>
            }
            {back? " ":<IconButton 
            bShape={"square"} 
            bType={"iconButton"} 
            bsize={"middle"}
            color={colors.transparent}
            fontColor={colors.bluePrimary}
            children={<LogoutOutlined/>}
            onClick={()=>{toLogIn()}}/>}
        </ToDoListHeaderContainer>
    )
}
export default ToDoListTemplate