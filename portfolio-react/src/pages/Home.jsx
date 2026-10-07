import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Services from '../components/Services.jsx';
import PageMeta from '../components/PageMeta.jsx';

// kept identical to index.html so returning to `/` restores the first paint
const META = {
  title: 'Sheikh Ayyan Iftikhar — Frontend Developer & Creative Web Developer',
  description:
    'Portfolio of Sheikh Ayyan Iftikhar — a frontend developer building modern, interactive and responsive web experiences.',
};

export default function Home() {
  return (
    <>
      <PageMeta {...META} />
      <Hero />
      <About />
      <Skills />
      <Services />
    </>
  );
}
