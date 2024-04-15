import React from "react";
import styles from "../css/SortBar.module.css"

function SortBar() {
  return (
    <div className={styles.SortBar}>
      <h2>Sort By:</h2>
      <p>option1</p>
      <p>option2</p>
      <p>option3</p>
    </div>
  )
};

export default SortBar;