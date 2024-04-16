import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./AndroidLarge31.module.css";

const AndroidLarge31 = () => {
  const navigate = useNavigate();

  const onDontHaveAnClick = useCallback(() => {
    navigate("/android-large-4");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/android-large-8");
  }, [navigate]);

  return (
    <div className={styles.androidLarge5}>
      <h2 className={styles.welcomeBack}>Welcome Back</h2>
      <Form className={styles.wrapper}>
        <Form.Control type="text" placeholder="email" />
      </Form>
      <Form className={styles.container}>
        <Form.Control type="text" placeholder="password" />
      </Form>
      <div className={styles.forgotYourPassword}>Forgot your password?</div>
      <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
        <span>{`Don’t have an account yet? `}</span>
        <span className={styles.createAnAccount}>Create an account</span>
      </div>
      <div className={styles.androidLarge5Child} />
      <div className={styles.androidLarge5Item} />
      <div className={styles.androidLarge5Inner} />
      <div className={styles.or}>Or</div>
      <img className={styles.eyeOffIcon} alt="" src="/eyeoff@2x.png" />
      <div className={styles.signIn} onClick={onSignInTextClick}>
        Sign In
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.androidLarge5Child1} />
      <img
        className={styles.flatColorIconsgoogle}
        alt=""
        src="/flatcoloriconsgoogle@2x.png"
      />
      <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
      <header className={styles.status}>
        <div className={styles.rectangle} />
        <img className={styles.statusBarIcon} alt="" src="/status-bar@2x.png" />
        <div className={styles.time}>9:41</div>
      </header>
    </div>
  );
};

export default AndroidLarge31;
