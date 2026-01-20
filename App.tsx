import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalNotice from './pages/LegalNotice';
import CookiesPolicy from './pages/CookiesPolicy';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/legal" element={<LegalNotice />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;