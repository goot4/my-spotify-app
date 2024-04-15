import React from "react";
import styles from "../css/SearchBar.module.css"

function SearchBar({searchTracks}) {
  const [query, setQuery] = React.useState("");
  const changeHandler = ({target}) => {
    setQuery(target.value);
  }
  const submitHandler = (event)=>{
    event.preventDefault();
    searchTracks(query);
  }
  return (
    <div className={styles.SearchBar}>
      <form onSubmit={submitHandler}>
        <input name="query" type="text" value={query} onChange={changeHandler}/>
        <input className={styles.SearchButton} type="submit" value="Search" />
      </form>
    </div>
  )
};

export default SearchBar;