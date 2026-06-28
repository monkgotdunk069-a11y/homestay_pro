import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
<<<<<<< HEAD
import UIShowcase from "./pages/UIShowcase";
=======
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/showcase" element={<UIShowcase />} />
=======
>>>>>>> eeb9e88102dce2f4bd3a375a6704b2c4c99cf346
      </Routes>
    </BrowserRouter>
  );
}
