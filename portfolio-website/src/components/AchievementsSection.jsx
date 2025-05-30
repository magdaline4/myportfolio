import { useEffect, useRef, useState } from 'react';
import AchievementCard from './AchievementCard';
import '../assests/styles/AchievementsGrid.css';

const AchievementsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const data = [
    { year: "2022", title: "UI/UX Design Award", subtitle: "Breakthrough designer of the year" },
    { year: "2021", title: "Best Website Design", subtitle: "Awwwards Site of the Year" },
    { year: "2020", title: "Innovative Design", subtitle: "CSS Design Awards Winner" },
  ];

  const handleCardClick = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveIndex(null); // collapse
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="achievement-section">
        <h2 className="achievement-title">Achievements</h2>
      <div className="grid" ref={containerRef}>
        {data.map((item, i) => (
          <AchievementCard
            key={i}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
            isActive={activeIndex === i}
            onClick={() => handleCardClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
