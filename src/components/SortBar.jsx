import React from "react";
import styles from "../css/SortBar.module.css"

function SortBar({sortOption,sortTracks}) {
  const clickHandler = (evt) => {
    sortTracks(evt.target.getAttribute('value'));
  }
  const getSortByClass=(option) =>{
    if(option === sortOption){
      return styles.active;
    }
    return "";
  }
  return (
    <div className={styles.SortBar}>
      <h2>Sort By:</h2>
      <p value="popularity" className={getSortByClass('popularity')} onClick={clickHandler}>Popularity</p>
      <p value="releaseDate" className={getSortByClass('releaseDate')} onClick={clickHandler}>Release Date</p>
      <p value="duration" className={getSortByClass('duration')} onClick={clickHandler}>Duration</p>
    </div>
  )
};

export default SortBar;