import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculadora from "./Ejercicios/Calculadora";
import CarritoCompras from "./Ejercicios/CarritoCompras";
import Contador from "./Ejercicios/Contador";
import { useState } from "react";
import Nav from "./components/Nav";
import Compras from "./Ejercicios/Compras";
import TimeApp from "./Ejercicios/App Time/TimeApp";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="bg-slate-400">
      <BrowserRouter>
        <Nav
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setAllProducts}
        />

        <Routes>
          <Route path="/AppTime" element={<TimeApp/>}/>
          <Route path="/Contador" element={<Contador />} />
          <Route path="/Calculadora" element={<Calculadora />} />
          <Route path="/Compras" element={<Compras/>} />
          <Route
            path="/Carrito"
            element={
              <CarritoCompras
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setAllProducts}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
