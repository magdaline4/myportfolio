import '../assests/styles/WorkExperienceSection.css';

const experiences = [
  {
    role: "UI/UX Designer",
    duration: "2015–2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    label: "UI/UX Designer",
    percent: 90,
  },
  {
    role: "Web Designer",
    duration: "2015–2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    label: "Web Designer",
    percent: 80,
  },
  {
    role: "Front-end Developer",
    duration: "2015–2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    label: "Web Developer",
    percent: 75,
  },
  {
    role: "Graphic Designer",
    duration: "2015–2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    label: "Graphic",
    percent: 85,
  },
];

const WorkExperienceSection = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Work Experience</h2>
      <p className="experience-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
