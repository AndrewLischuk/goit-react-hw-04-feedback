import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={styles.statistics}>
      <span className={styles.statItem}>Good: {good}</span>
      <span className={styles.statItem}>Neutral: {neutral}</span>
      <span className={styles.statItem}>Bad: {bad}</span>
      <span className={styles.statItem}>Total: {total()}</span>
      <span className={styles.statItem}>
        Positive Feedback: {positivePercentage() + '%'}
      </span>
    </div>
  );
};
