import React, { useEffect, useState } from "react";
// import axios from "axios";
import { useLocation } from "react-router-dom";

interface Lyrics {
  songId: number;
  lyrics: string;
}

const LyricsDisplay: React.FC = () => {
  const [lyrics, setLyrics] = useState<string>("Simular letras de la canción");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const songId = params.get("songId");

    if (songId) {
      // Simular busqueda de letas de la canción
      setLyrics(`Letras de la canción ${songId}`);
      //  ################################################################################
      // Get the lyrics for the selected song from the backend
      // axios
      //   .get<Lyrics>(`/api/lyrics?songId=${songId}`)
      //   .then((response) => {
      //     setLyrics(response.data.lyrics);
      //   })
      //   .catch((error) => {
      //     console.error("There was an error fetching the lyrics!", error);
      //   });
      // ################################################################################
    }
  }, [location.search]);

  return (
    <div>
      <h1>Lyrics Display</h1>
      <pre>{lyrics}</pre>
    </div>
  );
};

export default LyricsDisplay;
