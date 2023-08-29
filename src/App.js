import "./App.css";
import Calculadora from "./Ejercisios/Calculadora";
import Contador from "./Ejercisios/Contador";

import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-slate-400">
      
      <Nav/>
      <Contador />
      <Calculadora />
      
    </div>
  );
}

export default App;
