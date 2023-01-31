import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import { message } from "antd";


export const useSignIn=(email:string,password:string) :void=>{
  const history = useHistory();
  
  auth.signInWithEmailAndPassword(email,password)
  .then(result => {
      console.log(result)
      history.push('/home');
  })
  .catch(error =>{
      message.error("Unable to sign in. please try again later.");
  }
  )
}

export const useSignOut=() :void=>{
  const history = useHistory();
  
  auth.signOut()
  .then(result => {
      history.push('/login');
  })
  .catch(error =>{
      message.error("Unable to sign out. please try again later.");
  }
  )
}