import '../assests/styles/WorkExperienceSection.css';

const experiences = [
  {
    role: "HTML",
    description: "Skilled in writing clean and semantic HTML to build accessible and SEO-friendly webpages.",
    label: "HTML",
    percent: 90,
  },
  {
    role: "CSS",
    description: "Experienced in creating responsive layouts and modern UI designs using Flexbox, Grid, and media queries.",
    label: "CSS",
    percent: 80,
  },
  {
    role: "JavaScript",
    description: "Proficient in using JavaScript for dynamic functionality, DOM manipulation, and basic data handling.",
    label: "JavaScript",
    percent: 75,
  },
  {
    role: "React js",
    description: "Capable of building reusable components, managing state, and creating interactive UIs using React.",
    label: "React js",
    percent: 75,
  },
];


const WorkExperienceSection = () => {
  return (
    <section className="experience-section">
     <h2 className="experience-title">Technical Skills</h2>
<p className="experience-subtitle">A snapshot of the core technologies and tools I specialize in as a Front-End Developer.</p>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <p className="experience-duration">{exp.duration}</p>
            <p className="experience-description">{exp.description}</p>
            <div className="experience-footer">
              <div className="experience-bar">
                <div className="experience-progress" style={{ width: `${exp.percent}%` }}>
                  <span className="progress-label">{exp.label} - {exp.percent}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
