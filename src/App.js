import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path='services' element={<Services/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
