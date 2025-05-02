
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Department from "./pages/Department";
import Developers from "./pages/Developers";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";
import Projects from "./pages/Projects";
import Supervisor from "./pages/Supervisor";
import Technologies from "./pages/Technologies";
import SmartStockProject from "./pages/SmartStockProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/projects/smartstock" element={<SmartStockProject />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/department/:id" element={<Department />} />
        <Route path="/supervisor/:id" element={<Supervisor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
