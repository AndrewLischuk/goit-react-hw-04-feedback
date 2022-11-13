import styles from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className={styles.statItem}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
