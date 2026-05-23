import {
  HiOutlineLocationMarker,
  HiOutlineHome,
  HiOutlineChip,
  HiOutlineOfficeBuilding,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineColorSwatch,
  HiOutlineCube,
} from "react-icons/hi";

const ICONS = {
  location: HiOutlineLocationMarker,
  space: HiOutlineHome,
  smart: HiOutlineChip,
  club: HiOutlineOfficeBuilding,
  pool: HiOutlineSparkles,
  security: HiOutlineShieldCheck,
  green: HiOutlineColorSwatch,
  build: HiOutlineCube,
};

export default function HighlightIcon({ name, className = "" }) {
  const Icon = ICONS[name] || HiOutlineCube;
  return <Icon className={className} />;
}
