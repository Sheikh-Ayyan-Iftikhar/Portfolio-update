import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Services from '../components/Services.jsx';
import Testimonials from '../components/Testimonials.jsx';
import PageMeta from '../components/PageMeta.jsx';

// kept identical to index.html so returning to `/` restores the first paint
const META = {
  title: 'Sheikh Ayyan Iftikhar — Product Builder & GTM Engineer',
  description:
    'Product Builder at Aplinode building Conspera (GTM intelligence platform). Former co-founder AperaBoost & Markaaf Studio. 14+ live websites shipped.',
};

export default function Home() {
  return (
    <>
      <PageMeta {...META} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Testimonials />
    </>
  );
}
