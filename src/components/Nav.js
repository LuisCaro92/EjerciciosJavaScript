import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";



const Nav = () => {

    const carro = <FontAwesomeIcon icon={faCartPlus} />;

  return (
    <div className=" bg-slate-200 w-full h-15 text-center">
      <ul className="flex justify-end">
        <Link to="/Calculadora">
          <li className="p-2 ml-20 text-2xl font-semibold text-black cursor-pointer hover:text-fuchsia-400">Calculadora</li>
        </Link>

        <Link to="/Contador">
          <li className="p-2 ml-20 text-2xl font-semibold text-black cursor-pointer hover:text-fuchsia-400">Contador</li>
        </Link>

        <Link to="/Carrito">
          <li className="mt-1 ml-20 mr-5 text-4xl text-green-400 cursor-pointer hover:scale-110 active:scale-90 transition-transform ease-in-out duration-200">{carro}</li>
        </Link>

      </ul>
    </div>
  );
};

export default Nav;
