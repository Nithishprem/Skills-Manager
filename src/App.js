import ManageskillsPage from "./pages/ManageskillsPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from "./pages/Register";
import {UserProvider} from './context/UserContext'


function App() {
  return (
    
    <div className="App">
      <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/manageskills' element={<ManageskillsPage/>}/>
        </Routes>
        <ToastContainer/>
        </Router>
        </UserProvider>
    </div>
  );
}

export default App;
