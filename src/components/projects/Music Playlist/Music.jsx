import { React, useState } from "react";
import { songs } from "./MusicData";
import "./Music.css";

function Music() {
  const uniqueGenres = [...new Set(songs.map((song) => song.genre))]; //In JavaScript, 'new' is a special keyword that we use when we're creating a new instance of something that's called a constructor or a class. Think of it like using a blueprint to create something.
  const [selectedGenre, setSelectedGenre] = useState("all");
  const filteredSongs = songs.filter(
    (song) => selectedGenre === "all" || song.genre === selectedGenre
  );
  const songCount = filteredSongs.length;
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div className="music-container">
      {" "}
      <div className="filter-container">
        <select className="genre-dropdown" onChange={handleGenreChange}>
          <option value="all">All Genres</option>
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        {""}
        <span className="song-count">Songs at Display: {songCount}</span>
      </div>
      <div className="song-page-container">
        {songs
          .filter(
            (song) => selectedGenre === "all" || song.genre === selectedGenre
          )

          .map((song) => (
            <div className="song-card" key={song.id}>
              <h2 className="song-card-title">{song.title}</h2>
              <h3 className="song-card-artist">Artist: {song.artist}</h3>
              <div className="song-card-details">
                {" "}
                <div className="song-card-year">Year: {song.year}</div>
                <div className="song-card-duration">
                  Duration: {song.duration}
                </div>
                <div className="song-card-genre">
                  Genre: <span className="genre-tag">{song.genre}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Music;
