import React from 'react';
import styles from './AchievementCard.module.css';

const AchievementCard = ({ year, title, subtitle, isActive, onToggle }) => {
  return (
    <div className={`${styles.card} ${isActive ? styles.expanded : ''}`}>
      <p className={styles.year}>{year}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>

      {isActive && (
        <div className={styles.expandedContent}>
          <p className={styles.details}>
            🏆 This prestigious award recognized outstanding creativity and innovation in UI/UX design. 
            Selected among hundreds of submissions.
          </p>
        </div>
      )}

      <button
        className={`${styles.readMoreButton} ${isActive ? styles.activeButton : ''}`}
        onClick={onToggle}
      >
        {isActive ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default AchievementCard;
