// sounds
import pianoSound from "../assets/sounds/piano.mp3";
import drumSound from "../assets/sounds/drum.mp3";
import fluteSound from "../assets/sounds/flute.mp3";
import guitarSound from "../assets/sounds/guitar.mp3";
import violinSound from "../assets/sounds/violin.mp3";
import trumpetSound from "../assets/sounds/trumpet.mp3";
import xylophoneSound from "../assets/sounds/xylophone.mp3";

// images
import pianoImg from "../assets/instruments/piano.jpg";
import drumImg from "../assets/instruments/drums.jpg";
import fluteImg from "../assets/instruments/flute.jpg";
import guitarImg from "../assets/instruments/guitar.png";
import violinImg from "../assets/instruments/violin.jpg";
import trumpetImg from "../assets/instruments/trumpet.jpg";
import xylophoneImg from "../assets/instruments/xylophone.jpg";

export const instruments = [
  {
    id: 1,
    name: "Piano",
    sound: pianoSound,
    image: pianoImg,
  },
  {
    id: 2,
    name: "Drum",
    sound: drumSound,
    image: drumImg,
  },
  {
    id: 3,
    name: "Flute",
    sound: fluteSound,
    image: fluteImg,
  },
  {
    id: 4,
    name: "Guitar",
    sound: guitarSound,
    image: guitarImg,
  },
  {
    id: 5,
    name: "Violin",
    sound: violinSound,
    image: violinImg,
  },
  {
    id: 6,
    name: "Trumpet",
    sound: trumpetSound,
    image: trumpetImg,
  },
  {
    id: 7,
    name: "Xylophone",
    sound: xylophoneSound,
    image: xylophoneImg,
  },
];
