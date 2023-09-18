import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/app.css';

function App() {
    let Component 
    switch (window.location.pathname) {
        // case "/":
        //     Component = App 
        //     break 
            case "/":
                Component = AboutMe
                break
                case "/portfolio":
                    Component = Portfolio
                    break
                    case "/contact":
                        Component = Contact
                        break
    }
    return (
        <div>
            <Navbar />   
            <Header />
            <Component />
            <Footer />
        </div>
    );
}

export default App;