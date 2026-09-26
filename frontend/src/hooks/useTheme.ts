import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("agentgrid-theme");

    if (saved === "light" || saved === "dark") {
      return saved;
    }

    return "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("agentgrid-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
