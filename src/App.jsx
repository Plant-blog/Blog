import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import PlantDetail from "./pages/PlantDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css";

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/archive/:slug" element={<PlantDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

