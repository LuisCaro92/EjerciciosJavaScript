import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculadora from "./Ejercicios/Calculadora";
import CarritoCompras from "./Ejercicios/CarritoCompras";
import Contador from "./Ejercicios/Contador";
import { useState } from "react";
import Nav from "./components/Nav";
import Compras from "./Ejercicios/Compras";
import Panel from "./Ejercicios/App Time/Panel";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    
    <div className="h-full bg-[url('imagenfondo.jpg')]  bg-cover max-xl:">
      <BrowserRouter className="bg-[url('imagenfondo.jpg')]  bg-cover max-xl:">
        <Nav
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setAllProducts}
        />

        <Routes>
          <Route path="/Panel" element={<Panel />} />
          <Route path="/Contador" element={<Contador />} />
          <Route path="/Calculadora" element={<Calculadora />} />
          <Route path="/Compras" element={<Compras />} />
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
