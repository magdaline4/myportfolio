import React from 'react';
import styles from './AchievementCard.module.css';

const AchievementCard = ({ year, title, subtitle, isActive, onClick }) => {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.expanded : ''}`}
      onClick={onClick}
    >
      {!isActive ? (
        <>
          <p className={styles.year}>{year}</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
        </>
      ) : (
        <div className={styles.expandedContent}>
          <h2>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.year}>{year}</p>
          <p className={styles.details}>
            🏆 This prestigious award recognized outstanding creativity and innovation in UI/UX design. 
            Selected among hundreds of submissions.
          </p>
        </div>
      )}
    </div>
  );
};

export default AchievementCard;
