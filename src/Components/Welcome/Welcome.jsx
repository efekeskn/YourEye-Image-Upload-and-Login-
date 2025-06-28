import React from "react";
import styles from "./Welcome.module.css";

function Welcome({ name }) {
  return <h1 className={styles.welcome}>Hoşgeldin {name}!</h1>;
}

export default Welcome;
