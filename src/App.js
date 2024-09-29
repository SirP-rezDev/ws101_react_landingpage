import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Body from './Component/Body/Body';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';


// Home and About components (replace Body if needed)
function Home() {
  return <Body/>
}

function Abouts() {
  return <About/>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Abouts />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

