import { ResetGlobalStyles } from '../../../constants/config/reset'
import Login from '../../template/Login'



const LogInPage = () => {
    //need to add firebaseauth
    const onLogin = ()=> {
        //add login
    }
  return (<>
    <Login onLogin={onLogin}/>
    <ResetGlobalStyles/>
    </>
  )
}

export default LogInPage