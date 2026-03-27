import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";

import Home from "./inHome.jsx";
import Weight from "./WeightMechine.jsx";
import Climate from "./climate.jsx";
import { QrCode } from "./QRgenerater.jsx";
import Converter from "./converter.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weight" element={<Weight />} />
        <Route path="/climate" element={<Climate />} />
        <Route path="/qr" element={<QrCode />} />
        <Route path="/converter" element={<Converter />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;