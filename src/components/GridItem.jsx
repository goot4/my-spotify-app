import React from 'react';
import styles from '../css/GridItem.module.css'

function GridItem({track}) {
  return (
    <div className={styles.GridItem}>
      <img src={track.albumImage} alt=""/>
      <div className={styles.InfoEntry}>
        <h2>{track.name}</h2>
        <div className={styles.Info}>
          <div className={styles.InfoLeft}>
            <p>Artist: {track.artist}</p>
            <p>Album: {track.album}</p>
            <p>Release Date: {track.releaseDate}</p>
            <p>Duration: {track.duration}</p>
          </div>
          <p>Popularity: <br/><span>{track.popularity}</span></p>
        </div>

      </div>
    </div>
  )
}

export default GridItem;