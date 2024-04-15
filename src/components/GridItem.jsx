import React from 'react';
import styles from '../css/GridItem.module.css'

function GridItem({track}) {
  const dateString = new Date(track.releaseDate * 1000).toISOString().split('T')[0];
  const durationString = (timeInMs) =>{
    const timeInSec = Math.floor(timeInMs / 1000);
    const minutes = Math.floor(timeInSec / 60);
    const seconds = timeInSec % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  return (
    <div className={styles.GridItem}>
      <img src={track.albumImage} alt=""/>
      <div className={styles.InfoEntry}>
        <h2>{track.name}</h2>
        <div className={styles.Info}>
          <div className={styles.InfoLeft}>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
            <p>Release Date: {dateString}</p>
            <p>Duration: {durationString(track.duration)}</p>
          </div>
          <p>Popularity: <br/><span>{track.popularity}</span></p>
        </div>

      </div>
    </div>
  )
}

export default GridItem;