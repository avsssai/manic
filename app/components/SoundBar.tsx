import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";
import { Player } from "~/lib/musicControls";
import { PlayCircle, PauseCircle, SkipBack, SkipForward } from "lucide-react";
import { Button } from "./ui/button";

export default function SoundBar({ songUrl }: { songUrl: string }) {
  const [music, setMusic] = useState<Howl | undefined>();
  const [isPlaying, setIsPlaying] = useState(music?.playing());
  useEffect(() => {
    const newMusic = new Howl({
      src: songUrl,
      html5: true,
    });
    setMusic(newMusic);
  }, [songUrl]);
  const togglePlay = () => {
    if (!music) {
      return;
    }
    if (isPlaying) {
      music.pause();
      setIsPlaying(false);
    } else {
      music.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="sticky border-b-2 p-4">
      <div className="flex w-full items-center justify-between">
        <div>{songUrl}</div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">
            <SkipBack size={36} />
          </Button>
          <Button variant={"ghost"} onClick={togglePlay}>
            {isPlaying ? <PauseCircle size={36} /> : <PlayCircle size={36} />}
          </Button>
          <Button variant="ghost">
            <SkipForward size={36} />
          </Button>
        </div>
      </div>
    </div>
  );
}
