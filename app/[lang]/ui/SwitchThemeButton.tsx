import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ThemeState {
  selectedTheme: 'dark' | 'light';
}

export default function SwitchThemeButton() {
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<ThemeState | null>(null);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    const savedThemeString = localStorage.getItem('theme');
    if (savedThemeString) {
      setSelectedTheme({ selectedTheme: savedThemeString as "dark" | 'light' });
    } else {
      setTheme('dark')
    }
  }, [setTheme]);

  return (
    <Switch
      defaultSelected={selectedTheme?.selectedTheme === 'dark'}
      size="lg"
      color="secondary"
      onClick={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    />
  );
}
