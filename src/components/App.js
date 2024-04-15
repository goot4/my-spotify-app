import React, {useEffect} from 'react';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import GridView from './GridView';
import styles from '../css/App.module.css';

import searchTracksQuest from "../utilils/searchTracksQuest";
import clientCredentialAuth from "../utilils/clientCredentialAuth";

let accessToken;

function App() {
  const [tracks, setTracks] = React.useState([]);
  const [sortOption, setSortOption] = React.useState("");
  const  searchTracks = async (query)=> {
    const data = await searchTracksQuest(query, accessToken);
    setTracks(data);
    setSortOption('');
  }
  const sortTracks = (selectedOption)=>{
    console.log(selectedOption);
    setSortOption(selectedOption);
    setTracks((prev=> {
      return prev.toSorted((a,b)=> b[selectedOption] - a[selectedOption]);
    }))
  };

  useEffect(() => {
    clientCredentialAuth().then(access_token => accessToken=access_token);
  }, []);
  return (
    <div className={styles.App}>
      <h1>Track Search</h1>
      <SearchBar searchTracks={searchTracks} />
      <SortBar sortOption={sortOption} sortTracks={sortTracks} />
      <GridView tracks={tracks}/>
    </div>
  );
}

export default App;
