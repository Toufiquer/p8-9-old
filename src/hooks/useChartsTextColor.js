import { useContext } from "react";
import { ThemeMode } from "../App";

const useChartsTextColor = () => {
  const [themeMode] = useContext(ThemeMode);
  let colorStyle;
  switch (themeMode) {
    case "dark":
      colorStyle = "#14ad9c";
      break;
    case "light":
      colorStyle = "#3f3f46";
      break;
    case "sky":
      colorStyle = "#d8b4fe";
      break;
    default:
      colorStyle = "#14ad9c";
  }
  return colorStyle;
};

export default useChartsTextColor;
