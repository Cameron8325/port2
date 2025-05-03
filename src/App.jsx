import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Route-level code splitting via React.lazy
const Home = lazy(() => import('./pages/Home'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        {/* Suspense wraps routes for lazy-loading fallback */}
        <Suspense fallback={<div className="flex justify-center items-center min-h-screen text-lg text-[#94a3b8]">Loading...</div>}>
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
