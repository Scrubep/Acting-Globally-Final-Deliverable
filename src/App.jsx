import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Vision from './pages/Vision/Vision';
import Partners from './pages/Partners/Partners';
import Impact from './pages/Impact/Impact';
import Team from './pages/Team/Team';
import Volunteer from './pages/Volunteer/Volunteer';
import Donate from './pages/Donate/Donate';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
    return (
        <>
        <div className='app'>
            <Router>
                <ScrollToTop />
                <div className='main-content'>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Vision' element={<Vision/>}/>
                        <Route path='/Impact' element={<Impact/>}/>
                        <Route path='/Partners' element={<Partners/>}/>
                        <Route path='/Team' element={<Team/>}/>
                        <Route path='/Volunteer' element={<Volunteer/>}/>
                        <Route path='/Donate' element={<Donate/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
        </>
    )
}

export default App;