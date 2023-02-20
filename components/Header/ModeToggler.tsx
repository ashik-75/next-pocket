"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

function ModeToggler() {
  const { theme, setTheme } = useTheme();

  const handleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      {theme === "light" ? (
        <button onClick={handleMode}>
          <MoonIcon className="icon" />
        </button>
      ) : (
        <button onClick={handleMode}>
          <SunIcon className="icon" />
        </button>
      )}
    </div>
  );
}

export default ModeToggler;
