import styles from "./Calendar.module.css";

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <button className={styles.sun5Wrapper}>
        <div className={styles.sun5}>
          <p className={styles.sun}>Sun</p>
          <p className={styles.p}>5</p>
        </div>
      </button>
      <textarea className={styles.calendarChild} />
      <div className={styles.tue7Parent}>
        <div className={styles.tue7}>
          <p className={styles.tue}>Tue</p>
          <p className={styles.p}>7</p>
        </div>
        <img
          className={styles.assignmentIndIcon}
          alt=""
          src="/assignment-ind@2x.png"
        />
      </div>
      <div className={styles.wed8Wrapper}>
        <div className={styles.wed8}>
          <p className={styles.tue}>Wed</p>
          <p className={styles.p}>8</p>
        </div>
      </div>
      <div className={styles.thu9Wrapper}>
        <div className={styles.thu9}>
          <p className={styles.tue}>Thu</p>
          <p className={styles.p}>9</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
