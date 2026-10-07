import Projects from '../components/Projects.jsx';
import PageIntro from '../components/PageIntro.jsx';
import PageMeta from '../components/PageMeta.jsx';

export const meta = {
  title: 'Projects — Sheikh Ayyan Iftikhar',
  description:
    'Selected work by Sheikh Ayyan Iftikhar — live, shipped web applications built with React, JavaScript and modern CSS.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageMeta {...meta} />
      <PageIntro
        eyebrow="Selected work"
        title="Things I've built and shipped."
        lede="Every project below is live and clickable — no dead links, no mockups. Each one started as a real brief and ended as something people could actually use."
      />
      <Projects />
    </>
  );
}
