import React from 'react';
import { Header, Blog, Footer } from './containers';
import { Navbar, Gallery } from './components';
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Gallery />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
