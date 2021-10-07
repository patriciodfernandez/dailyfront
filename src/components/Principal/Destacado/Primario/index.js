import React from "react";
import styles from "./style.module.css";
import Lottie from "react-lottie";
import animationData from "../../../../animations/animati.json";

const index = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className={styles.cardContainer}>
        <div className={styles.bgAnimated}>
          {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
        </div>

        <div className={styles.containerData}>
          <div>title</div>
          <div>titlesub </div>
          <div>title lorem17</div>
        </div>
      </div>
    </div>
  );
};

export default index;
