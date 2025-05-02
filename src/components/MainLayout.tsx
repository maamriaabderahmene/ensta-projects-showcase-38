
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../hooks/use-theme";

export default function MainLayout() {
  const { setTheme } = useTheme();

  // Set theme to dark by default when the component mounts
  useEffect(() => {
    setTheme("dark");
    // Add dark class to document element to ensure proper initial rendering
    document.documentElement.classList.add("dark");
  }, [setTheme]);

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
