import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Community from "./pages/community/index";
import VCRadar from "./pages/community/VCRadar";
import VCTechStack from "./pages/community/VCTechStack";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/events" element={<Events />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/vc-radar" element={<VCRadar />} />
        <Route path="/community/vc-tech-stack" element={<VCTechStack />} />
      </Routes>
    </BrowserRouter>
  );
}
