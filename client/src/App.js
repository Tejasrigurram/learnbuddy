import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import OCRPage from './components/OCRPage';
import StudyPlanPage from './components/StudyPlanPage';
import PerformanceTrackingPage from './components/PerformanceTrackingPage';
import RecommendationsPage from './components/RecommendationsPage';
import SettingsPage from './components/SettingsPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ocr" element={<OCRPage />} />
        <Route path="/studyplan" element={<StudyPlanPage />} />
        <Route path="/performance" element={<PerformanceTrackingPage />} />
        <Route path="/recommendations" element={<RecommendationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
