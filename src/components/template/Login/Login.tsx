import { useState } from 'react'
import { LoginButtonField, LoginContainer, LoginForm, Loginh1, LoginHeader, LoginHeaderimgField, LoginHeaderTextField, Loginp, LoginTextField } from './elements'
import undraw_To_Do_List from '../../../assets/undraw_To_do_list_re_9nt71.png'
import TextInput from '../../atom/TextInput'
import {Input} from 'antd'
import Button from '../../atom/Button'

type props = {

}
const Login = (props:props) => {
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [canLogin,setcanLogin] = useState<boolean>(false)
    //TextInputs helper functions>
    const onEnterEmail=(e: React.KeyboardEvent<HTMLInputElement>):void=>{
        setEmail(e.currentTarget.value);
        checkCanLogIn()
    }
    const onEnterPassword=(e: React.KeyboardEvent<HTMLInputElement>):void=>{
        setPassword(e.currentTarget.value);
        checkCanLogIn()
    }
    const onPasswordChange=(e: React.ChangeEvent<HTMLInputElement>):void=>{
        setPassword(e.currentTarget.value);
        checkCanLogIn()
    }
    const onEmailChange=(e: React.ChangeEvent<HTMLInputElement>):void=>{
        setEmail(e.currentTarget.value);
        checkCanLogIn()
    }
    const emailchecker= () =>{
        return password.length > 0; // I will do regex here later.
    } 
    const checkCanLogIn= () =>{
        setcanLogin(emailchecker()&&password.length>0);
    }
    //<
  return (
    <LoginContainer>
        <LoginHeader>
            <LoginHeaderimgField>
            <img src={undraw_To_Do_List} alt={"To Do List"} width={"100%"}/>
            </LoginHeaderimgField>
            <LoginHeaderTextField>
            <Loginh1>ToDoish</Loginh1>
            <Loginp>Do your wish, very easyish</Loginp>
            </LoginHeaderTextField>
        </LoginHeader>
        <LoginForm>
            <LoginTextField>
            <p>Email</p>
            <TextInput placeholder='Email' allowClear value={email} style={{"width":"100%"}} onChange={onEmailChange} onPressEnter={onEnterEmail}/>
            </LoginTextField>
            <LoginTextField>
            <p>Password</p>
            <Input.Password aria-label={"Password"} placeholder="Password" allowClear value={password} style={{"width":"100%"}} onChange={onPasswordChange} onPressEnter={onEnterPassword} />
            </LoginTextField>
            <LoginButtonField>
            <Button label={"Login"} bType={"primary"} disabled={!canLogin} style={{"width":"100%"}}></Button>
            </LoginButtonField>
        </LoginForm>
    </LoginContainer>
  )
}

export default Login