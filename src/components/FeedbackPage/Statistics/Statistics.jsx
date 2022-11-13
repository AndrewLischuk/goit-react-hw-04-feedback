import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
