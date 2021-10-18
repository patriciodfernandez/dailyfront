import React from "react";
import Destacado from "./Destacado";
import Categorias from "./Categorias";
import styles from "./style.module.css";

// import Lottie from "react-lottie";
// import animationData from "../../animations/67986-business-deal.json";

const index = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <div className={styles.containerMain}>
      <div>
        {/* <div className={styles.bgAnimated}>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div> */}
        <Destacado className={styles.containerItem}></Destacado>
      </div>
      <Categorias className={styles.containerItem}></Categorias>
    </div>
  );
};

export default index;
