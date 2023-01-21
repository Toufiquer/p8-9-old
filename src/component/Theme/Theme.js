import React, { useContext, useState } from "react";
import { ChevronDownIcon, MoonIcon, StarIcon, SunIcon } from "@heroicons/react/24/solid";
import { ThemeData, ThemeMode } from "../../App";
import getThemeVariants from "./getThemeVariants";

const Theme = () => {
  const [themeMode, setThemeMode] = useContext(ThemeMode);
  const [themeData, setThemeData] = useContext(ThemeData);
  const [toggle, setToggle] = useState(true); //   Get Next Theme data and set it to themeData
  const SetNewTheme = (themeName) => {
    const themeData = getThemeVariants(themeName);
    setThemeData(themeData);
    setThemeMode(themeName);
  };
  const handleTheme = () => {
    //   Set Theme Variant.
    //  Theme Value or custom css in getThemeVariants.js
    switch (themeMode) {
      case "dark":
        SetNewTheme("light");
        console.log(themeMode, "inside");
        break;
      case "light":
        SetNewTheme("sky");
        break;
      case "sky":
        SetNewTheme("dark");
        break;
      default:
      // setThemeMode(themeMode);
    }
  };
  const { backgroundII, text, hoverTextII } = themeData;
  const iconClass = ` h-6 w-6 ${text} cursor-pointer`;
  return (
    <div className={`flex gap-2`}>
      <div className="" onClick={handleTheme}>
        {(themeMode === "dark" && <SunIcon className={`${iconClass}`} />) || (themeMode === "light" && <StarIcon className={`${iconClass}`} />) || (themeMode === "sky" && <MoonIcon className={`${iconClass}`} />) || "Theme"}
      </div>
      <div>
        <ChevronDownIcon className={`${iconClass}`} onClick={() => setToggle(!toggle)} />
        <div className={`${toggle ? "hidden" : "block"} absolute ${backgroundII} py-2 px-1 ml-[-5px]`}>
          <SunIcon onClick={() => SetNewTheme("light")} className={`${iconClass} ${hoverTextII} m-1`} />
          <MoonIcon onClick={() => SetNewTheme("dark")} className={`${iconClass} ${hoverTextII} m-1`} />
          <StarIcon onClick={() => SetNewTheme("sky")} className={`${iconClass} ${hoverTextII} m-1`} />
        </div>
      </div>
    </div>
  );
};

export default Theme;
