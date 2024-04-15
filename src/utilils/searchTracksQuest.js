

async function searchTracksQuest(query, accessToken) {
  const endpoint = 'https://api.spotify.com/v1/search';
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  }
  const response = await fetch(`${endpoint}?q=${query}&type=track`, options);
  const responseJSON = await response.json();
  const tracks = responseJSON.tracks.items.map(item => {
    return {
      name: item.name,
      artist: item.artists[0].name,
      album: item.album.name,
      albumImage: item.album.images[1].url,
      releaseDate: item.album.release_date,
      popularity: item.popularity,
      duration: item.duration_ms,
    }
  });
  console.log(tracks);
  return tracks;
}

export default searchTracksQuest;