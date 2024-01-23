import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

import './styles/app.css';

function App() {
    let Component; 
    switch (window.location.pathname) {
            case "/":
                Component = AboutMe
                break
                case "/portfolio":
                    Component = Project
                    break
                    case "/contact":
                        Component = Contact
                        break
                        case "/resume":
                            Component = Resume
                            break
                            default:
                                Component = AboutMe;
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