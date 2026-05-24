import {
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineSun,
  HiOutlineCube,
  HiOutlineFilm,
  HiOutlineEmojiHappy,
  HiOutlineDesktopComputer,
  HiOutlineCloud,
  HiOutlineColorSwatch,
} from "react-icons/hi";

const ICONS = {
  pool: HiOutlineSparkles,
  gym: HiOutlineHeart,
  yoga: HiOutlineSun,
  games: HiOutlineCube,
  theatre: HiOutlineFilm,
  kids: HiOutlineEmojiHappy,
  cowork: HiOutlineDesktopComputer,
  sky: HiOutlineCloud,
  garden: HiOutlineColorSwatch,
};

export default function AmenityIcon({ name, className = "" }) {
  const Icon = ICONS[name] || HiOutlineSparkles;
  return <Icon className={className} />;
}
