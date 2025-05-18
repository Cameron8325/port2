import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Starfield from './components/Starfield';

// Lazy-loaded route components
const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  // ✅ Dynamic viewport height variable for mobile fix
  useEffect(() => {
    const updateVhUnit = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVhUnit();
    window.addEventListener('resize', updateVhUnit);
    window.addEventListener('orientationchange', updateVhUnit);
    return () => {
      window.removeEventListener('resize', updateVhUnit);
      window.removeEventListener('orientationchange', updateVhUnit);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Starfield />

        <Suspense fallback={
          <div className="flex justify-center items-center min-h-screen text-lg text-[#94a3b8]">
            Loading...
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
