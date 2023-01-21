import React, { useContext, useState } from "react";
import { CheckCircleIcon, ChevronDownIcon, MoonIcon, StarIcon, SunIcon } from "@heroicons/react/24/solid";
import { ThemeData, ThemeMode } from "../../App";
import getThemeVariants from "./getThemeVariants";

const Theme = () => {
  const [themeMode, setThemeMode] = useContext(ThemeMode);
  const [themeData, setThemeData] = useContext(ThemeData);
  const [toggle, setToggle] = useState(true);
  const handleTheme = () => {
    //   Get Next Theme data and set it to themeData
    const setData = (themeName) => {
      const themeData = getThemeVariants(themeName);
      setThemeData(themeData);
    };
    //   Set Theme Variant.
    //  Theme Value or custom css in getThemeVariants.js
    switch (themeMode) {
      case "dark":
        setData("light");
        setThemeMode("light");
        break;
      case "light":
        setData("sky");
        setThemeMode("sky");
        break;
      case "sky":
        setData("dark");
        setThemeMode("dark");
        break;
      default:
        setThemeMode(themeMode);
    }
  };
  const { card, backgroundII, text, hoverTextII } = themeData;
  console.log(card, themeMode);
  const iconClass = ` h-6 w-6 ${text} cursor-pointer`;
  return (
    <div className={`flex gap-2`}>
      <div className="" onClick={handleTheme}>
        {(themeMode === "dark" && <SunIcon className={`${iconClass}`} />) || (themeMode === "light" && <StarIcon className={`${iconClass}`} />) || (themeMode === "sky" && <MoonIcon className={`${iconClass}`} />)}
      </div>
      <div>
        <ChevronDownIcon className={`${iconClass}`} onClick={() => setToggle(!toggle)} />
        <div className={`${toggle ? "hidden" : "block"} absolute ${backgroundII} py-2 px-1 ml-[-5px]`}>
          <SunIcon className={`${iconClass} ${hoverTextII} m-1`} />
          <MoonIcon className={`${iconClass} ${hoverTextII} m-1`} />
          <StarIcon className={`${iconClass} ${hoverTextII} m-1`} />
        </div>
      </div>
    </div>
  );
};

export default Theme;
