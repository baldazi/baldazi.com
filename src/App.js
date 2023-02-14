import React from 'react';
import './App.css';
import { Footer, Header } from './components';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
    <Router>
      <Header/>
      <main>
            <Routes>
                <Route path="/index" element={<Home/>}/>
            </Routes>
      </main>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
