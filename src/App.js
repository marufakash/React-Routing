import React from 'react';
import style from './app.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Error from './Components/Error';
import User from './Components/User';
import Blog from './Components/Blog';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:title' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={<User />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
