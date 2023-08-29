import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";



const Nav = () => {
    const carro = <FontAwesomeIcon icon={faCartPlus} />;
  return (
    <div className=" bg-slate-200 w-full h-12 text-center">
      <ul className="flex  justify-center">
        <Link to="/Calculadora">
          <li className="p-2 mx-10 text-black ">Calculadora</li>
        </Link>

        <Link to="/Contador">
          <li className="p-2 mx-10 text-black ">Contador</li>
        </Link>

        <Link to="/Carrito">
          <li className="p-2 mx-10 text-black ">{carro}</li>
        </Link>

        <li className="p-2 mx-10 text-black "></li>
      </ul>
    </div>
  );
};

export default Nav;
