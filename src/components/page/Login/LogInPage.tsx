import { ResetGlobalStyles } from '../../../constants/config/reset'
import { useHistory } from 'react-router-dom'
import Login from '../../template/Login'



const LogInPage = () => {
    //need to add firebaseauth
    const history = useHistory();
    const onLogin = ()=> {
        //add login
        history.push('/home');
    }
  return (<>
    <Login onLogin={onLogin}/>
    <ResetGlobalStyles/>
    </>
  )
}

export default LogInPage