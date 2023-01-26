import './App.css';
import { ResetGlobalStyles } from './constants/config/reset';
import RootNavigator from './navigators/RootNavigator';

function App() {
  return (
    <>
    <ResetGlobalStyles/>
    <RootNavigator/></>
  );
}

export default App;
