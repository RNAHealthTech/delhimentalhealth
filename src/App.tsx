import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogRouter from './components/Blog/BlogRouter';
import About from './pages/About';

import './index.css';

import DepressionAnxiety from './components/services/DepressionAnxiety';
import BipolarDisorder from './components/services/BipolarDisorder';
import AddictionDisorders from './components/services/Addiction';
import OCDPTSDandADHD from './components/services/Ocd';
import RelationshipCounseling from './components/services/Relationship';
import SleepAndSexualHealth from './components/services/SleepSex';
import Psychotherapy from './components/services/Psychotherapy';
import Dementia from './components/services/Dementia';
import Schizophrenia from './components/services/Schizophrenia';



const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/depression-anxiety" element={<DepressionAnxiety />} />
          <Route path="/services/bipolar-disorder" element={<BipolarDisorder />} />
          <Route path='/services/dementia' element={<Dementia />} />
          <Route path='/services/schizophrenia' element={<Schizophrenia />} />
          <Route path="/services/addiction-disorders" element={<AddictionDisorders />} />
          <Route path="/services/relationship-counseling" element={<RelationshipCounseling />} />
          <Route path="/services/ocd-ptsd-adhd" element={<OCDPTSDandADHD />} />
          <Route path="/services/sleep-sexual-health" element={<SleepAndSexualHealth />} />
          <Route path="/services/psychotherapy" element={<Psychotherapy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogRouter />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;