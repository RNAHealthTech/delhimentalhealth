import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import SecurityCheck from './components/SecurityCheck';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogRouter from './components/blog/BlogRouter';
import About from './pages/About';
import ReactGA from 'react-ga'
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
import ShalimarBaghPage from './pages/ShalimarBaghPage';
import AshokViharPage from './pages/AshokViharPage';
import PatelNagarPage from './pages/PatelNagarPage';
import AdarshNagarPage from './pages/AdarshNagarPage';
import KirtiNagarPage from './pages/KirtiNagarPage';
import NCRPage from './pages/NCRPage';
import AnxietyAssessment from './pages/AnxietyAssessment';




const App: React.FC = () => {
  
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-KZEBS8L8K4');
    //eslint-disable-next-line
  },[]);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  },[location]);

  return (
    <SecurityCheck>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-psychologist-in-shalimar-bagh" element={<ShalimarBaghPage />} />
          <Route path="/expert-psychiatrist-in-ashok-vihar" element={<AshokViharPage />} />
          <Route path="/best-mental-health-specialist-patel-nagar" element={<PatelNagarPage />} />
          <Route path="/leading-psychologist-in-adarsh-nagar" element={<AdarshNagarPage />} />
          <Route path="/best-psychiatrist-in-kirti-nagar" element={<KirtiNagarPage />} />
          <Route path="/top-psychologist-in-delhi-ncr" element={<NCRPage />} />
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
          <Route path="/check-your-anxiety" element={<AnxietyAssessment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </SecurityCheck>
  );
};

export default App;