// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import QuestionWizard from './components/QuestionWizard';
import ResultsPage from './components/ResultsPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './pages/Contact';
import Horoscope from './pages/Horoscope';
import Readings from './pages/Readings';
import BirthChart from './pages/BirthChart';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/questionnaire" element={<QuestionWizard />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/birthchart" element={<BirthChart />} />
        <Route path="/readings" element={<Readings />} />
        <Route path="/horoscope" element={<Horoscope/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
