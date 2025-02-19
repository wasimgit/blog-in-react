import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Navbar from './components/Navbar.tsx';
import PostDetail from './components/PostDetail.tsx';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/blogs/:slug' element={<PostDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
