import React from "react";
import CardCategoria1 from "./CardCategoria1";
import CardCategoria2 from "./CardCategoria2";
import CardCategoria3 from "./CardCategoria3";
import CardCategoria4 from "./CardCategoria4";
import styles from "./style.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.tittle}> CATEGORIAS </h1>
      <div className={styles.containerPrincipal}>
        <div className={styles.container1}>
          <CardCategoria1></CardCategoria1>
        </div>
        <div className={styles.container2}>
          {" "}
          <CardCategoria2></CardCategoria2>
        </div>
        <div className={styles.container3}>
          {" "}
          <CardCategoria3></CardCategoria3>
        </div>
        <div className={styles.container4}>
          {" "}
          <CardCategoria4></CardCategoria4>
        </div>
        <div>
          <h3 className={styles.verMas}>Ver mas noticias y categorias</h3>
        </div>
      </div>
    </div>
  );
};

export default index;
