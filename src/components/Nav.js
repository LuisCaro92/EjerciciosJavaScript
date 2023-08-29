import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const carro = <FontAwesomeIcon icon={faBagShopping} />;
  const [active, setActive] = useState(false);

  const compra = (
    <div className="container h-50 w-50">
      <div className="bg-gray">
ASEGadsg
      </div>
    </div>
  );

  return (
    <div className=" bg-slate-200 w-full h-15 text-center">
      <ul className="flex justify-end">
        <Link to="/Calculadora">
          <li className="p-2 ml-20 text-2xl font-semibold text-black cursor-pointer hover:text-fuchsia-400">
            Calculadora
          </li>
        </Link>

        <Link to="/Contador">
          <li className="p-2 ml-20 text-2xl font-semibold text-black cursor-pointer hover:text-fuchsia-400">
            Contador
          </li>
        </Link>

        <Link to="/Carrito">
          <button
            onClick={() => setActive(!active)}
            className="mt-1 ml-20 mr-5 text-4xl text-green-400 cursor-pointer hover:scale-110 active:scale-90 transition-transform ease-in-out duration-200"
          >
            {carro}
            <div>
            {compra}
            </div>
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
