import React from 'react';
import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection'; 
import AchievementsSection from './components/AchievementsSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import FooterSection from './components/FooterSection';
import Certificate from './components/Certificate';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <ProjectsSection />
      <AchievementsSection/>
      <Certificate/>
      <WorkExperienceSection/>
      <FooterSection/>
     
    </div>
  );
}

export default App;