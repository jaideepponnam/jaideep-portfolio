import { certifications, projects } from '../data/portfolio';
import TimelineRow from '../ui/TimelineRow';

export default function Products() {
  return (
    <section id="projects" className="modern-section content-section">
      <div className="container">
        <h2 className="section-label">projects</h2>

        <div className="exp-list">
          {projects.map((project) => (
            <TimelineRow key={project.id} item={project} link={project.link} />
          ))}
          <div className="about-divider" />
        </div>

        <h2 className="section-label cert-label">certifications</h2>
        <div className="cert-list" aria-label="certifications">
          {certifications.map((certification) => (
            <span key={certification} className="cert-pill">{certification}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
