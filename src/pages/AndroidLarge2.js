import FrameComponent3 from "../components/FrameComponent3";
import FebPMTime1 from "../components/FebPMTime1";
import FebPMTime from "../components/FebPMTime";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./AndroidLarge21.module.css";

const AndroidLarge21 = () => {
  return (
    <div className={styles.androidLarge8}>
      <section className={styles.androidLarge8Inner}>
        <FrameComponent3 />
      </section>
      <div className={styles.rectangle} />
      <section className={styles.circularProgressParent}>
        <div className={styles.circularProgress}>
          <div className={styles.whatToTrainContainer}>
            <h2 className={styles.upcomingWorkout}>Upcoming Workout</h2>
            <div className={styles.seeMoreWrapper}>
              <div className={styles.seeMore}>See more</div>
            </div>
          </div>
        </div>
        <FebPMTime1 />
        <FebPMTime />
        <div className={styles.whatDoYouWantToTrainWrapper}>
          <h2 className={styles.whatDoYou}>What Do You Want to Train</h2>
        </div>
        <FrameComponent2 />
      </section>
    </div>
  );
};

export default AndroidLarge21;
