import { useMemo } from "react";
import styles from "./Property1Default1.module.css";

const Property1Default1 = ({
  rectangleDivBorderRadius,
  rectangleDivBackgroundColor,
  rectangleDivBorder,
  ellipseDivHeight,
  ellipseDivWidth,
  ellipseDivTop,
  ellipseDivRight,
  ellipseDivBottom,
  ellipseDivLeft,
}) => {
  const rectangleDiv1Style = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
      backgroundColor: rectangleDivBackgroundColor,
      border: rectangleDivBorder,
    };
  }, [
    rectangleDivBorderRadius,
    rectangleDivBackgroundColor,
    rectangleDivBorder,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      height: ellipseDivHeight,
      width: ellipseDivWidth,
      top: ellipseDivTop,
      right: ellipseDivRight,
      bottom: ellipseDivBottom,
      left: ellipseDivLeft,
    };
  }, [
    ellipseDivHeight,
    ellipseDivWidth,
    ellipseDivTop,
    ellipseDivRight,
    ellipseDivBottom,
    ellipseDivLeft,
  ]);

  return (
    <div>
      <div
        className={styles.property1defaultChild}
        style={rectangleDiv1Style}
      />
      <div className={styles.property1defaultItem} style={ellipseDivStyle} />
    </div>
  );
};

export default Property1Default1;
