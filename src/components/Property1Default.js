import { useMemo } from "react";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  rectangleDivBorder,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      border: rectangleDivBorder,
    };
  }, [rectangleDivBorder]);

  return (
    <div style={property1DefaultStyle}>
      <div className={styles.property1defaultChild} style={rectangleDivStyle} />
      <img className={styles.vectorIcon} alt="" src="/vector1@2x.svg" />
    </div>
  );
};

export default Property1Default;
