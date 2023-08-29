import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculadora from "./Ejercisios/Calculadora";
import CarritoCompras from "./Ejercisios/CarritoCompras";
import Contador from "./Ejercisios/Contador";

import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-slate-400">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Contador" element={<Contador />} />
          <Route path="/Calculadora" element={<Calculadora />} />
          <Route path="/Carrito" element={<CarritoCompras />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
