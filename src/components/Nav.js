import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Compras from "../Ejercicios/Compras";

const Nav = ({allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {

  const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};



  return (
    <div className=" bg-slate-200 w-full h-15 text-center">
      <ul className="flex justify-end items-center">
	  <Link to="/AppTime">
          <li className="p-2 ml-20 text-2xl font-semibold text-black cursor-pointer hover:text-fuchsia-400">
            AppTime
          </li>
        </Link>


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

        
          <button
            onClick={() => setActive(!active)}
            className="mt-1 ml-20 mr-5 text-4xl cursor-pointer hover:scale-110 active:scale-90 transition-transform ease-in-out duration-200"
          >
         
			<div className=' flex justify-end container-icon relative'>
				<div
					className='container-cart-icon flex'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart w-10 h-10 cursor pointer '
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products absolute flex justify-content-center'>
						<span id='contador-productos relative flex justify-content-end'>0</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product flex justify-content-space.between'>
											<span className='cantidad-producto-carrito'>
												{product.quantity}
											</span>
											<p className='titulo-producto-carrito'>
												{product.nameProduct}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close h-20 w-20'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'></p>
					)}
				</div>
			</div>
           
          </button>
      
      </ul>
    </div>
  );
};

export default Nav;
