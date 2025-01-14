import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Offers from './components/Offers';
import Services from './components/Services';
import Facility from './components/Facility';
import Member from './components/Member';
import News from './components/News';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ContactButton from './components/ContactButton';
import ScrollToTop from './components/ScrollToTop';

// Importing new components for footer headings
import OurTeam from './components/OurTeam';
import VisionValues from './components/VisionValues';
import Careers from './components/Careers';
import PlanFeedback from './components/PlanFeedback';

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div>
        <ContactButton />
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Offers />
              <Services />
              <Facility />
              <Member />
              <News />
              <Banner />
              <Footer />
            </>
          } />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/vision-values" element={<VisionValues />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/plan-feedback" element={<PlanFeedback />} />
          <Route path="/service" element={<Services/>} />
          <Route path="/offer" element={<Offers/>} />
          <Route path="/facility"element={<Facility />}/>
          <Route path="/banner"element={<Banner />}/>
          <Route path="/footer"element={<Footer/>}/>
          


          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
