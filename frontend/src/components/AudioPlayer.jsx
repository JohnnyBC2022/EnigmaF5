import { useEffect } from "react";
import './AudioPlayer.css';

export const AudioPlayer = () => {
  useEffect(() => {
    const audio = new Audio(
      "https://api.soundcloud.com/tracks/1797647674/stream?secret_token=s-Akvs8H6OxEX"
    );
    audio.play();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div>
      <iframe className="music" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1797647674%3Fsecret_token%3Ds-Akvs8H6OxEX&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </div>
  );
};
