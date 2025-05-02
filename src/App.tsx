
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./hooks/use-theme";

import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Developers from "./pages/Developers";
import Technologies from "./pages/Technologies";
import Department from "./pages/Department";
import Supervisor from "./pages/Supervisor";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Index />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
            <Route path="developers" element={<Developers />} />
            <Route path="technologies" element={<Technologies />} />
            <Route path="department" element={<Department />} />
            <Route path="supervisor" element={<Supervisor />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
