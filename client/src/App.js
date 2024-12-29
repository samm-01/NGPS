import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Home from './pages/Home';
import Journey from "./components/Journey";
import Gallery from './pages/GalleryPage';
import Contact from './pages/ContactPage';
import MandatoryDisclosures from './pages/MandatoryDisclosures';
import FranchisePage from './pages/FranchisePage';
import Sitemap from './pages/Sitemap';
import BlogsPage from './pages/BlogPage';
import TermsAndConditions from './pages/Terms&ConditionPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BlogDetailPage from './pages/BlogDetailPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Use element prop to render components */}
        <Route path="/about" element={<AboutPage />} /> {/* Use element prop to render components */}
        <Route path="/journey" element={<Journey />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/disclosures" element={<MandatoryDisclosures />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/blog/:blogId" element={<BlogDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
