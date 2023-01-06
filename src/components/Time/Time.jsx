import React from "react";
import styles from "./time.module.scss";

const Time = () => {
  const now = new Date();
  const futureDate = new Date(2023, 1, 14);
  const differenceInTime = futureDate.getTime() - now.getTime();
  const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);
  return (
    <span className={styles.time_out}>
      son {differenceInDays.toFixed()} gün
    </span>
  );
};

export default Time;
