import React from 'react';
import './App.css';
import { Footer, Header } from './components';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutPage, ContactPage, HomePage, ProjectPage } from './pages';


function App() {
  return (
    <div>
    <Router>
      <Header/>
      <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/project" element={<ProjectPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
      </main>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
