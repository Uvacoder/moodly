import {
  FiCloudLightning,
  FiCloudRain,
  FiCloudSnow,
  FiCoffee,
  FiMoon,
  FiMusic,
  FiTwitter,
  FiWind,
} from "react-icons/fi";
import {
  RiCloudWindyLine,
  RiPlantLine,
  RiRoadMapLine,
  RiSeedlingLine,
  RiShip2Line,
} from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import { BiFootball, BiTrain, BiWalk, BiWater } from "react-icons/bi";
import { FaRegKeyboard } from "react-icons/fa";
import { BsBook, BsBriefcase, BsClock } from "react-icons/bs";
import { IoLogoOctocat } from "react-icons/io";

const sounds = [
  {
    name: "rain",
    icon: <FiCloudRain className="text-7xl" />,
  },
  {
    name: "lightning",
    icon: <FiCloudLightning className="text-7xl" />,
  },
  {
    name: "snow",
    icon: <FiCloudSnow className="text-7xl" />,
  },
  {
    name: "campfire",
    icon: <AiOutlineFire className="text-7xl" />,
  },
  {
    name: "forest",
    icon: <RiPlantLine className="text-7xl" />,
  },
  {
    name: "birds",
    icon: <FiTwitter className="text-7xl" />,
  },
  {
    name: "rowing",
    icon: <RiShip2Line className="text-7xl" />,
  },
  {
    name: "wind",
    icon: <RiCloudWindyLine className="text-7xl" />,
  },
  {
    name: "leaves",
    icon: <RiSeedlingLine className="text-7xl" />,
  },
  {
    name: "cafe",
    icon: <FiCoffee className="text-7xl" />,
  },
  {
    name: "farm",
    icon: <RiSeedlingLine className="text-7xl" />,
  },
  {
    name: "keyboard",
    icon: <FaRegKeyboard className="text-7xl" />,
  },
  {
    name: "ocean",
    icon: <BiWater className="text-7xl" />,
    soundLink: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/ocean.mp3",
  },
  {
    name: "library",
    icon: <BsBook className="text-7xl" />,
    soundLink:
      "https://e8b8e3q2.ssl.hwcdn.net/sounds/people/delft-library160.mp3",
  },
  {
    name: "night",
    icon: <FiMoon className="text-7xl" />,
  },
  {
    name: "road",
    icon: <RiRoadMapLine className="text-7xl" />,
    soundLink: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/highway160.mp3",
  },
  {
    name: "fan",
    icon: <FiWind className="text-7xl" />,
    soundLink: "https://e8b8e3q2.ssl.hwcdn.net/sounds/objects/fan-two160.mp3",
  },
  {
    name: "windchime",
    icon: <FiMusic className="text-7xl" />,
    soundLink: "https://e8b8e3q2.ssl.hwcdn.net/sounds/windchime160.mp3",
  },
  {
    name: "train",
    icon: <BiTrain className="text-7xl" />,
    soundLink: "https://e8b8e3q2.ssl.hwcdn.net/sounds/hipster/train160.mp3",
  },
  {
    name: "stadium",
    icon: <BiFootball className="text-7xl" />,
  },
  {
    name: "steps",
    icon: <BiWalk className="text-7xl" />,
  },
  {
    name: "clock",
    icon: <BsClock className="text-7xl" />,
  },
  {
    name: "office",
    icon: <BsBriefcase className="text-7xl" />,
  },
];

export default sounds;
