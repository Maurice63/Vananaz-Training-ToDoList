import './App.css';
import { ResetGlobalStyles } from './constants/config/reset';
import { AuthHooksContext } from './hooks/auth';
import RootNavigator from './navigators/RootNavigator';
import * as firestoreAuthHooks from "./hooks/auth/firebase";

function App() {
  return (
    <AuthHooksContext.Provider value={firestoreAuthHooks}>
        <ResetGlobalStyles/>
        <RootNavigator/>
    </AuthHooksContext.Provider>
    
  );
}

export default App;
