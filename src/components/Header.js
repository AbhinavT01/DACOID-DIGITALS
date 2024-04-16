import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const onSkipTextClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  return (
    <div className={styles.frame}>
      <div className={styles.skip} onClick={onSkipTextClick}>
        Skip
      </div>
      <header className={styles.status}>
        <div className={styles.rectangle} />
        <img className={styles.statusBarIcon} alt="" src="/status-bar@2x.png" />
        <div className={styles.time}>9:41</div>
      </header>
    </div>
  );
};

export default Header;
