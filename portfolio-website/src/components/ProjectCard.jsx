import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.card}>
        <img 
          src={project.image} 
          alt={project.title} 
          className={styles.media}
        />
        
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          
          <div className={styles.tagsContainer}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.demoButton}>
            Live Demo <ArrowRightAlt />
          </button>
          <button className={styles.codeButton}>
            View Code
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;