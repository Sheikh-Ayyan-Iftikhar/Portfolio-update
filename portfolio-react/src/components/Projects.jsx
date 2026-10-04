import { Section, SectionHeading } from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import FeaturedProject from './FeaturedProject.jsx';
import { featuredProject, gridProjects } from '../data/projects.js';

export default function Projects() {
  return (
    <Section id="projects" className="border-t border-line-soft">
      <SectionHeading
        eyebrow="Selected work"
        title="Work I'm proud of"
        lede="Live, deployed and reachable right now. Each one was built to solve a specific frontend problem."
      />

      <div className="mt-16">
        <FeaturedProject project={featuredProject} />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gridProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
