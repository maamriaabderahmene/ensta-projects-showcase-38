
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "@/pages/Index";
import Projects from "@/pages/Projects";
import Developers from "@/pages/Developers";
import Technologies from "@/pages/Technologies";
import NotFound from "@/pages/NotFound";
import Department from "@/pages/Department";
import Supervisor from "@/pages/Supervisor";
import ProjectDetail from "@/pages/ProjectDetail";
import DFI from "@/pages/DFI";

// Individual project pages
import UniHubProject from "@/pages/UniHubProject";
import CourSpaceProject from "@/pages/CourSpaceProject";
import SmartStockProject from "@/pages/SmartStockProject";
import ReserviliProject from "@/pages/ReserviliProject";
import AmanahProject from "@/pages/AmanahProject";
import BaytiProject from "@/pages/BaytiProject";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/department" element={<Department />} />
          <Route path="/supervisor" element={<Supervisor />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/dfi" element={<DFI />} />

          {/* Individual project routes */}
          <Route path="/unihub" element={<UniHubProject />} />
          <Route path="/courspace" element={<CourSpaceProject />} />
          <Route path="/smartstock" element={<SmartStockProject />} />
          <Route path="/reservili" element={<ReserviliProject />} />
          <Route path="/amanah" element={<AmanahProject />} />
          <Route path="/bayti" element={<BaytiProject />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
