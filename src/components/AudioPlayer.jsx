import { useEffect, useState } from "react";
import themeSong from "../audio/Pokemon Blue Red - Route 1.mp3";

const usePlayer = () => {
  const [audio] = useState(new Audio(themeSong));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      audio.volume = 0.05;
      audio.play();
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });

  return [playing, toggle];
};

const Player = () => {
  const [playing, toggle] = usePlayer(); // Who ever wrote this ?????? UsePlayer does not take in parameter. Seems like inconsistency in they way the code is being wrote

  return (
    <div className="audio-player">
      <button className="play-button" onClick={toggle}>
        {playing ? "Pause" : "Play"}
      </button>
      <span className="audio-notif">{playing ? "♪ audio playing  ♪" : ""}</span>
      <br />
    </div>
  );
};

const AudioPlayer = () => {
  return <Player />;
};

export default AudioPlayer;
