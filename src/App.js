import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import LoginPage from './LoginPage';
import HomeJokes from './HomeJokes';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element = {<LoginPage/>} />
        <Route path='/joker' element = {<HomeJokes />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
