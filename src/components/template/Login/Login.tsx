import { useState } from 'react'
import { LoginContainer, LoginForm, Loginh1, LoginHeader, Loginp } from './elements'
import undraw_To_Do_List from '../../../constants/assets/undraw_To_do_list_re_9nt71.png'
import TextInput from '../../atom/TextInput'
import {Input} from 'antd'
import Button from '../../atom/Button'

type props = {

}
const Login = (props:props) => {
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [canLogin,setcanLogin] = useState<boolean>(false)
    const onEnterEmail=(e: any):void=>{
        setEmail(e.target.value);
        checkCanLogIn()
    }
    const onEnterPassword=(e: any):void=>{
        setPassword(e.target.value);
        checkCanLogIn()
    }
    const emailchecker= () =>{
        return password.length > 0; // I will do regex here later.
    } 
    const checkCanLogIn= () =>{
        setcanLogin(emailchecker()&&password.length>0);
    }
    
  return (
    <LoginContainer>
        <LoginHeader>
            <img src={undraw_To_Do_List} alt={"To Do List"}/>
            <Loginh1>ToDoish</Loginh1>
            <Loginp>Do your wish, very easyish</Loginp>
        </LoginHeader>
        <LoginForm>
            <TextInput placeholder='Email' allowClear value={email} onPressEnter={onEnterEmail}/>
            <Input.Password placeholder="Password" allowClear value={password} onPressEnter={onEnterPassword}/>
            <Button label={"Login"} bType={"primary"} disabled={!canLogin} style={{"width":"80%"}}></Button>
        </LoginForm>
    </LoginContainer>
  )
}

export default Login