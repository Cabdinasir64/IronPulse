import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home/Home';
import Service from './Pages/service/service';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Service' element={<Service />} />
    </Routes>
  );
};

export default App;
