import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Gallery from './components/Gallery';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Layout><Home /></Layout>}></Route>
            <Route exact path='/About' element={<Layout><About /></Layout>}></Route>
            <Route exact path='/Study' element={<Layout><Gallery /></Layout>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
