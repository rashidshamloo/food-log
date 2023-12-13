"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const modes = {
  light: <Sun size={16} className="flex-shrink-0" />,
  dark: <Moon size={16} className="flex-shrink-0" />,
  system: <Monitor size={16} className="flex-shrink-0" />,
};

const ModesButton = ({
  theme,
  onClick,
}: {
  theme: keyof typeof modes;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <Button
    variant="outline"
    className="h-8 w-8"
    onClick={onClick}
    title={theme[0]?.toUpperCase() + theme.slice(1)}
  >
    {modes[theme]}
  </Button>
);

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? "system");
  }, []);

  if (!theme) return null;
  return (
    <Popover>
      <h3 className="sr-only">Change Theme</h3>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-8 w-8"
          title={theme[0]?.toUpperCase() + theme.slice(1)}
        >
          {modes[theme as keyof typeof modes]}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-1 p-1">
        {Object.keys(modes).map((mode, i) => {
          return (
            mode !== theme && (
              <ModesButton
                theme={mode as keyof typeof modes}
                key={i}
                onClick={() => {
                  setTheme(mode);
                  localStorage.setItem("theme", mode);
                  let newTheme = mode;
                  if (mode === "system")
                    newTheme = window.matchMedia("(prefers-color-scheme: dark)")
                      .matches
                      ? "dark"
                      : "light";
                  newTheme === "dark"
                    ? document.documentElement.classList.add("dark")
                    : document.documentElement.classList.remove("dark");
                }}
              />
            )
          );
        })}
      </PopoverContent>
    </Popover>
  );
};

export default ThemeSwitch;
