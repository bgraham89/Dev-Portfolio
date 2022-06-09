import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
