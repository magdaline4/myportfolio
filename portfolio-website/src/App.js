import React from 'react';
import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection'; 
import AchievementsSection from './components/AchievementsSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProjectsSection />
      <AchievementsSection/>
      <WorkExperienceSection/>
      <FooterSection/>
     
    </div>
  );
}

export default App;