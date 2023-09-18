import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Navbar />   
            <Header />
            <AboutMe />    
            <Contact />
        </div>
    );
}

export default App;