import { useEffect, useState } from "react";

const CarritoCompras = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
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
              <div className="flex justify-end my-10 hover:scale-110 active:scale-50 duration-500 ease-in-out">
                <button className="border-solid  mx-auto w-40 h-10  rounded-lg text-white bg-green-700 cursor-pointer hover:scale-110 active:scale-50 duration-500 ease-in-out">
                  Buy
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
