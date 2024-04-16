import { useCallback } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import Property1Default from "../components/Property1Default";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge2.module.css";

const AndroidLarge2 = () => {
  const navigate = useNavigate();

  const onRectangleFooterClick = useCallback(() => {
    navigate("/android-large-8");
  }, [navigate]);

  return (
    <div className={styles.androidLarge6}>
      <h2 className={styles.whatAreYour}>What are your goals?</h2>
      <div className={styles.androidLarge6Child} />
      <div className={styles.weightLoss}>Weight Loss</div>
      <div className={styles.androidLarge6Item} />
      <div className={styles.muscleGain}>Muscle Gain</div>
      <div className={styles.androidLarge6Inner} />
      <div className={styles.flexibilityAndMobility}>
        Flexibility and Mobility
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.generalFitness}>General Fitness</div>
      <div className={styles.androidLarge6Child1} />
      <div className={styles.eventSpecific}>Event - specific training</div>
      <div className={styles.androidLarge6Child2} />
      <div className={styles.mindfulnessAndMental}>
        Mindfulness and Mental Health
      </div>
      <Property1Default
        property1DefaultWidth="unset"
        property1DefaultHeight="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="9.313rem"
        property1DefaultLeft="20.063rem"
      />
      <Property1Default
        property1DefaultWidth="unset"
        property1DefaultHeight="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="13.438rem"
        property1DefaultLeft="20.063rem"
      />
      <Property1Default
        property1DefaultWidth="unset"
        property1DefaultHeight="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="17.563rem"
        property1DefaultLeft="20.063rem"
      />
      <Property1Default
        property1DefaultWidth="unset"
        property1DefaultHeight="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="21.688rem"
        property1DefaultLeft="20.063rem"
      />
      <Property1Default
        property1DefaultWidth="unset"
        property1DefaultHeight="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="25.813rem"
        property1DefaultLeft="20.063rem"
      />
      <Property1Default
        property1DefaultWidth="unset"
        property1DefaultHeight="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="29.938rem"
        property1DefaultLeft="20.063rem"
      />
      <footer
        className={styles.rectangleFooter}
        onClick={onRectangleFooterClick}
      />
      <div className={styles.confirm}>Confirm</div>
      <header className={styles.status}>
        <div className={styles.rectangle} />
        <img className={styles.statusBarIcon} alt="" src="/status-bar@2x.png" />
        <div className={styles.time}>9:41</div>
      </header>
    </div>
  );
};

export default AndroidLarge2;
