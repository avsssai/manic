import { Howl, Howler } from "howler";
//Todo
// 1. Setup howler singleton
// 2. export controls as a single global thing.

interface Playlist {
  title: string;
  file: string;
  howl: Howl;
}

type Direction = "forward" | "backward";

export class Player {
  index = 0;
  playlist: Playlist[];
  //   isPlaying: Boolean = false;
  constructor(playlist: Playlist[]) {
    this.playlist = playlist;
  }
  play(index: number) {
    let sound;
    index = typeof index === "number" ? index : this.index;
    let data = this.playlist[index];
    if (data.howl) {
      sound = data.howl;
    } else {
      sound = data.howl = new Howl({
        src: data.file, //Todo - give the whole file path/database blob here
        html5: true,
      });
    }
    // this.isPlaying = true;
    return sound.play();
  }

  pause() {
    let sound = this.playlist[this.index].howl;
    // this.isPlaying = false;
    return sound.pause();
  }
  stop() {
    let sound = this.playlist[this.index].howl;
    // this.isPlaying = false;
    return sound.stop();
  }

  skipOne(direction: Direction) {
    let index = 0;
    if (direction === "backward") {
      index = this.index - 1;
      if (index < 0) {
        index = this.playlist.length - 1;
      }
    } else {
      index = this.index + 1;
      if (index >= this.playlist.length) {
        index = 0;
      }
    }
    this.skipTo(index);
  }
  skipTo(index: number) {
    // stop current playing song
    if (this.playlist[this.index].howl) {
      //   this.isPlaying = false;
      this.playlist[this.index].howl.stop();
    }
    // this.isPlaying = true;
    this.play(index);
  }

  volume(value: number) {
    // update the global volume of all howls to value
    Howler.volume(value);
  }

  seek(percent: number) {
    let sound = this.playlist[this.index].howl;
    if (sound.playing()) {
      sound.seek(sound.duration() * percent);
    }
  }

  isPlaying() {
    let sound = this.playlist[this.index].howl;
    return sound.playing();
  }
}
