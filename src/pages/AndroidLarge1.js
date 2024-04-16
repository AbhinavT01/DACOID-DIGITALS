import { useCallback, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Input } from "antd";
import { Checkbox, FormControlLabel } from "@mui/material";
import Property1Default from "../components/Property1Default";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge1.module.css";

const AndroidLarge1 = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/android-large-5");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onRectangle2Click = useCallback(() => {
    navigate("/android-large-6");
  }, [navigate]);

  const onCreateAnAccount1Click = useCallback(() => {
    navigate("/android-large-6");
  }, [navigate]);

  return (
    <div className={styles.androidLarge4}>
      <h2 className={styles.createAnAccount}>Create an account</h2>
      <Input
        className={styles.androidLarge4Child}
        placeholder="First Name"
        style={{ width: "343px" }}
        bordered={true}
      />
      <Input
        className={styles.androidLarge4Item}
        placeholder="Last Name"
        style={{ width: "343px" }}
        bordered={true}
      />
      <Input
        className={styles.androidLarge4Inner}
        placeholder="Last email"
        style={{ width: "343px" }}
        bordered={true}
      />
      <Input
        className={styles.rectangleInput}
        placeholder="password"
        style={{ width: "343px" }}
        bordered={true}
      />
      <div className={styles.byProceedingIContainer}>
        <span
          className={styles.byProceedingI}
        >{`By proceeding, I agree to all `}</span>
        <span className={styles.tc}>{`T&C`}</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.and}>{`and  `}</span>
        <span className={styles.tc}>Privacy Policy</span>
      </div>
      <Property1Default
        property1DefaultWidth="unset"
        property1DefaultHeight="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="26.938rem"
        property1DefaultLeft="1rem"
      />
      <div
        className={styles.alreadyHaveAnContainer}
        onClick={onAlreadyHaveAnClick}
      >
        <span>{`Already have an account? `}</span>
        <span className={styles.login}>Login</span>
      </div>
      <div className={styles.lineDiv} />
      <div className={styles.androidLarge4Child1} />
      <div className={styles.or}>Or</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.androidLarge4Child2} data-animate-on-scroll />
      <img
        className={styles.flatColorIconsgoogle}
        alt=""
        src="/flatcoloriconsgoogle@2x.png"
      />
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <div className={styles.androidLarge4Child3} onClick={onRectangle2Click} />
      <div
        className={styles.createAnAccount1}
        onClick={onCreateAnAccount1Click}
      >
        Create an Account
      </div>
      <header className={styles.status}>
        <div className={styles.rectangle} />
        <img className={styles.statusBarIcon} alt="" src="/status-bar@2x.png" />
        <div className={styles.time}>9:41</div>
      </header>
    </div>
  );
};

export default AndroidLarge1;
