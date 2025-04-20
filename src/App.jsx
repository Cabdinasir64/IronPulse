import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import Service from './Pages/service/service';
import Membership from './Pages/membership/membership';
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Service' element={<Service />} />
      <Route path='/Membership' element={<Membership />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
