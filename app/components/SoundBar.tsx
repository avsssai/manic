// @ts-ignore
import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";

export default function SoundBar({ songUrl }: { songUrl: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Howl({
    src: [songUrl],
    html5: true,
    onend: () => {
      sound.unload();
    },
    onplay: () => setIsPlaying(true),
    onpause: () => setIsPlaying(false),
  });

  console.log(sound);
  return (
    <div>
      <button onClick={() => (sound.playing() ? sound.pause() : sound.play())}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
