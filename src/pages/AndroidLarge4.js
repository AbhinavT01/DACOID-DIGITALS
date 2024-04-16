import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge4.module.css";

const AndroidLarge4 = () => {
  const navigate = useNavigate();

  const onGroupImageClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  const onSkipTextClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  return (
    <div className={styles.androidLarge2}>
      <img
        className={styles.androidLarge2Child}
        alt=""
        src="/group-11@2x.png"
        onClick={onGroupImageClick}
      />
      <div className={styles.getBurn}>Get Burn</div>
      <div className={styles.letsKeepBurning}>
        Let’s keep burning to achieve your goals, it hurts only temporarily, if
        you give up now you will be in pain forever
      </div>
      <div className={styles.skip} onClick={onSkipTextClick}>
        Skip
      </div>
      <section className={styles.image16} />
      <header className={styles.status}>
        <div className={styles.rectangle} />
        <img className={styles.statusBarIcon} alt="" src="/status-bar@2x.png" />
        <div className={styles.time}>9:41</div>
      </header>
    </div>
  );
};

export default AndroidLarge4;
