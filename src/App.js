import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import '@mui/material'
import{BrowserRouter} from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
   <Signup/>
   </BrowserRouter>
  );
}

export default App;
