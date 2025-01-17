import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Song {
  id: number;
  title: string;
  artist: string;
}

const SongSelection: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simular que reciben canciones del backend
    const simulatedSongs: Song[] = [
      { id: 1, title: "Song X", artist: "Artist Y" },
      { id: 2, title: "Song A", artist: "Artist B" },
      { id: 3, title: "Song 1", artist: "Artist 1" },
    ];
    setSongs(simulatedSongs);
  }, []);
  // ################################################################################
  //   // Get the songs from the backend
  //   axios
  //     .get<Song[]>("/api/songs")
  //     .then((response) => {
  //       if (Array.isArray(response.data)) setSongs(response.data);
  //       else {
  //         console.error(
  //           "The response data of Song is not an array!",
  //           response.data
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the songs!", error);
  //     });
  // }, []);
  // ################################################################################
  const handleSongSelect = (song: Song) => {
    // Navigate to the lyrics displayed for the selected song
    navigate(`/lyrics?songId=${song.id}`);
  };

  return (
    <div>
      <h1>Song Selection</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id} onClick={() => handleSongSelect(song)}>
            {song.title} by {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongSelection;
