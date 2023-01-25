import { ResetGlobalStyles } from '../../../constants/config/reset'
import Login from '../../template/Login'

type Props = {
    
}

const LogInPage = (props: Props) => {
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