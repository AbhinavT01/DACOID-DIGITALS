import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styles from "./AndroidLarge.module.css";

const AndroidLarge = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  return (
    <div className={styles.androidLarge1}>
      <main className={styles.frame}>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </main>
      <div className={styles.frame1}>
        <footer className={styles.frame2}>
          <img
            className={styles.frameChild}
            alt=""
            src="/group-12.svg"
            onClick={onGroupClick}
          />
        </footer>
        <div className={styles.frame3}>
          <div className={styles.trackYourGoal}>Track Your Goal</div>
        </div>
        <div className={styles.dontWorryIf}>
          Don’t worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </div>
        <img className={styles.frameIcon1} alt="" src="/image-13@2x.png" />
        <Header />
      </div>
    </div>
  );
};

export default AndroidLarge;
