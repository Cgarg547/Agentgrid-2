import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useTheme } from "../../hooks/useTheme";

export default function AppShell() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Topbar
        theme={theme}
        onThemeToggle={toggleTheme}
        onMenuToggle={() =>
          setMobileOpen((value) => !value)
        }
      />

      <div
        className={`app-layout ${
          mobileOpen ? "mobile-sidebar-open" : ""
        }`}
      >
        <Sidebar />

        <main id="main-content" className="app-main">
          <Outlet />
        </main>
      </div>

      {mobileOpen && (
        <button
          className="mobile-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  );
}
