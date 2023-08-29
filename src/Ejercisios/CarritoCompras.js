import { useEffect, useState } from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CarritoCompras = () => {
    
    const carrito =<FontAwesomeIcon icon={faCartPlus}/>
    const [products, setProducts] = useState([]);




  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
  };

  useEffect(() => {
    getProducts()
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-6xl font-bold mb-40 tracking-tight text-gray-900 text-center">
          Tienda Ramdon
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div className="group relative bg-slate-400 rounded-md hover:shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
              <div className="flex items-center mx-auto aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={""}
                  className="mx-auto object-cover object-center  h-50 w-50"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="max-h-2.5 mx-auto">
                  <h3 className="text-sm text-gray-700">
                    <a href={""}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 text-xl"
                      />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500"></p>
                </div>
              </div>
              <div className="my-5 flex justify-center">
                <p className="text-xl font-medium text-gray-900 mt-10">
                  Precio: ${product.price}
                </p>
              </div>
              <div className="flex justify-center my-10 ">
                <button className="group [transform:translateZ(0)] px-6 py-3 w-40 rounded-lg bg-gray-200 overflow-hidden relative before:absolute before:bg-green-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500">
                  <span className="text-xl relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">
                  {carrito}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarritoCompras;
