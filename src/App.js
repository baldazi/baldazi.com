import React from 'react';
import './App.css';
import { Footer, Header } from './components';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AboutPage, ContactPage, HomePage, NotFound, ProjectPage } from './pages';


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
                <Route path="*" element={<NotFound/>} />
            </Routes>
      </main>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
