import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" bg-slate-200 w-full h-12 text-center">
      <ul className="flex  justify-center text-center">
        <Link to="/Calculadora">
          <li className="mx-10 text-black ">Calculadora</li>
        </Link>

        <Link to="/Contador">
          <li className="mx-10 text-black ">Contador</li>
        </Link>

        <Link to="/Carrito">
          <li className="mx-10 text-black ">Carrito de Compras</li>
        </Link>

        <li className="mx-10 text-black "></li>
      </ul>
    </div>
  );
};

export default Nav;
