import { lazy, Suspense, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

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

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
