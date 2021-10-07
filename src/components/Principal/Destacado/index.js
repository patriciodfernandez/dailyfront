import React from "react";
import Primario from "./Primario";
import Secundario from "./Secundario";
import Publicidad from "./Publicidad";
import styles from "./style.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <Primario></Primario>

      <Secundario></Secundario>

      <Publicidad></Publicidad>
    </div>
  );
};

export default index;
