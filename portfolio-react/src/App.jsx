import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import JourneyPage from './pages/JourneyPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFound from './pages/NotFound.jsx';

// only pull these in once the curtain has lifted
const CustomCursor = lazy(() => import('./components/CustomCursor.jsx'));
const Loader = lazy(() => import('./components/Loader.jsx'));

/** Skip link for keyboard users. */
function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only rounded-full bg-mist-100 px-4 py-2 text-sm font-medium text-ink-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110]"
    >
      Skip to content
    </a>
  );
}

/**
 * A client-side navigation does not reset scroll the way a document load
 * does, so without this every route change lands halfway down the new page.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // let the target render before scrolling to it
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <div className="grain relative min-h-screen bg-ink-900">
      <SkipLink />

      {!ready && (
        <Suspense fallback={<div className="fixed inset-0 z-[100] bg-ink-950" />}>
          <Loader onDone={() => setReady(true)} />
        </Suspense>
      )}

      {ready && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}

      {/* fixed ambient wash behind everything */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-ink-900" />
        <div className="absolute left-1/2 top-[-20%] h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(77,141,255,0.09),transparent)] blur-3xl" />
        <div className="absolute bottom-[-14%] right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.08),transparent)] blur-3xl" />
      </div>

      <ScrollToTop />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
