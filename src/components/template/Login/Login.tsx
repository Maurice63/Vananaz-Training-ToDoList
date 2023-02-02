import { useState } from "react";
import {
  LoginButtonField,
  LoginContainer,
  LoginForm,
  LoginFormP,
  Loginh1,
  LoginHeader,
  LoginHeaderimgField,
  LoginHeaderTextField,
  LoginP,
  LoginTextField,
} from "./elements";
import undraw_To_Do_List from "../../../assets/undraw_To_do_list_re_9nt71.svg";
import TextInput from "../../atom/TextInput";
import { Input } from "antd";
import Button from "../../atom/Button";
import { useAuthAction } from "../../../hooks/auth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { loginWithEmail } = useAuthAction();
  //need to add firebaseauth

  const OnLogin = () => {
    //add login
    loginWithEmail(email, password)
    
  };
  //TextInputs helper functions>
  const onEnterEmail = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
    checkCanLogIn();
  };
  const onEnterPassword = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
    checkCanLogIn();
  };
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
    checkCanLogIn();
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
    checkCanLogIn();
  };
  const emailchecker = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };
  const checkCanLogIn = () => {
    return emailchecker() && password.length > 6;
  };
  //<
  return (
    <LoginContainer>
      <LoginHeader>
        <LoginHeaderimgField>
          <img src={undraw_To_Do_List} alt={"To Do List"} width={"100%"} />
        </LoginHeaderimgField>
        <LoginHeaderTextField>
          <Loginh1>ToDoish</Loginh1>
          <LoginP>Do your wish, very easyish</LoginP>
        </LoginHeaderTextField>
      </LoginHeader>
      <LoginForm>
        <LoginTextField>
          <LoginFormP>Email</LoginFormP>
          <TextInput
            placeholder="Email@gmail.com"
            allowClear
            value={email}
            style={{ width: "100%" }}
            onChange={onEmailChange}
            onPressEnter={onEnterEmail}
          />
        </LoginTextField>
        <LoginTextField>
          <LoginFormP>Password</LoginFormP>
          <Input.Password
            placeholder="Password"
            allowClear
            value={password}
            style={{ width: "100%" }}
            onChange={onPasswordChange}
            onPressEnter={onEnterPassword}
          />
        </LoginTextField>
        <LoginButtonField>
          <Button
            label={"Login"}
            bType={"primary"}
            bsize={"middle"}
            disabled={!checkCanLogIn()}
            style={{ width: "100%", marginTop: "30px" }}
            onClick={OnLogin}
          />
        </LoginButtonField>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
