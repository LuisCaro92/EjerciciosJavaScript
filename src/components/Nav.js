import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const carro = <FontAwesomeIcon icon={faBagShopping} />;
 

 


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
           // onClick={() => setActive(!active)}
            className="mt-1 ml-20 mr-5 text-4xl text-green-400 cursor-pointer hover:scale-110 active:scale-90 transition-transform ease-in-out duration-200"
          >
           <svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
           
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
