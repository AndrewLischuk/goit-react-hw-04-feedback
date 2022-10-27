import styles from '../Statistics/Statistics.module.css';

export const Notification = ({ message }) => {
  return <p className={styles.statItem}>{message}</p>;
};
