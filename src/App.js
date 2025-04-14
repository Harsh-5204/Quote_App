import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Quotedetail from './Page/Quotedetail';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quotedetail/:id' element={<Quotedetail/>}/>

        
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
