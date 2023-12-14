import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register'
import NotFound from './components/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Home' element={<Home></Home>}></Route>
      <Route path='/Register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default App;
