import React from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Blogs from './Routing/Blogs';
import Contact from './Routing/Contact';
import Home from './Routing/Home';
import NavBar from './Routing/NavBar';
import Blog from './Routing/Blog';
import User from './Routing/User';
import ErrorPage from './Routing/ErrorPage';

const App = () => {
  return (
    <div>
        <BrowserRouter> 
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/blogs/:title' element={<Blog />} />
              <Route path='/user' element={<User />} />
              <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;