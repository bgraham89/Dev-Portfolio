import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Teaching from './components/Teaching';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path='teaching' element={<Teaching/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
