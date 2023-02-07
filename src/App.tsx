import "./App.css";
import { ResetGlobalStyles } from "./constants/config/reset";
import { AuthHooksContext } from "./hooks/auth";
import RootNavigator from "./navigators/RootNavigator";
import * as firestoreAuthHooks from "./hooks/auth/firebase";
import * as firestoreTodoHooks from "./hooks/todo/firestore";
import { TodoHooksContext } from "./hooks/todo";

function App() {
  return (
    <AuthHooksContext.Provider value={firestoreAuthHooks}>
      <TodoHooksContext.Provider value={firestoreTodoHooks}>
        <ResetGlobalStyles />
        <RootNavigator />
      </TodoHooksContext.Provider>
    </AuthHooksContext.Provider>
  );
}

export default App;
