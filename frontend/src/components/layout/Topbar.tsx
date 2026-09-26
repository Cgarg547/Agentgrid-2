import {
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react";

interface TopbarProps {
  theme: "dark" | "light";
  onThemeToggle: () => void;
  onMenuToggle: () => void;
}

export default function Topbar({
  theme,
  onThemeToggle,
  onMenuToggle,
}: TopbarProps) {
  return (
    <header className="app-topbar">
      <div className="topbar-left">
        <button
          className="mobile-menu-button"
          onClick={onMenuToggle}
          aria-label="Open navigation menu"
        >
          <Menu size={19} />
        </button>

        <div className="topbar-context">
          <span>AGENTGRID</span>
          <strong>Mission Control</strong>
        </div>
      </div>

      <div className="topbar-actions">
        <button
          className="topbar-icon-button"
          aria-label="Search AgentGrid"
          title="Search"
        >
          <Search size={18} />
        </button>

        <button
          className="topbar-icon-button"
          onClick={onThemeToggle}
          aria-label={
            theme === "dark"
              ? "Switch to light theme"
              : "Switch to dark theme"
          }
          title="Change theme"
        >
          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>
      </div>
    </header>
  );
}