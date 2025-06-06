import { projects } from '../data/ProjectsData';
import ProjectCard from './ProjectCard';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  return (
    <section className={styles.projectsContainer} id="projects">
      <h2 className={styles.sectionTitle}>My Projects</h2>
      
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;