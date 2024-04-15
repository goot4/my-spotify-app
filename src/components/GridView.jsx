import React from "react";
import styles from '../css/GridView.module.css';
import GridItem from "./GridItem";

function GridView({tracks}) {
  return (
    <div className={styles.GridView}>
      {tracks.map((track, i) => {
        return (<GridItem key={i} track={track} />);
      })}
    </div>
  )
}

export default GridView;