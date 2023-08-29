import { useState } from "react";

const Calculadora = () => {
  const [click, setClick] = useState("");

  const botones = [
    { id: 9 },
    { id: 6 },
    { id: 3 },
    { id: 1 },
    { id: 8 },
    { id: 5 },
    { id: 2 },
    { id: 0 },
    { id: 7 },
    { id: 4 },
  ];

  const operadores = [
    { id: "%" },
    { id: "," },
    { id: "+" },
    { id: "/" },
    { id: "x" },
    { id: "-" },
    
  ];

  const buttonText = (e) => {
    return setClick(click + e.target.value)
  };

  const handDelete =() => {
    return setClick("");
  }

  const buttonIgual = () => {
    return setClick(eval(click))
  }
  return (
    <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-slate-500  border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <h1 className=" text-5xl text-yellow-500 flex justify-center m-10">
        Calculadora
      </h1>

      <div className="bg-blue-300 rounded-sm">
        <span className="flex justify-end text-7xl">{click}</span>
      </div>

      <div className="flex bg-slate-500 ">
        <div className="grid grid-rows-4 grid-flow-col mx-auto m-3">
          {botones.map((boton) => (
            <button
              value={boton.id}
              onClick={buttonText}
              className="text-3xl w-20 h-20 rounded-xl bg-yellow-600 m-1 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:scale-110 active:scale-50 duration-500 ease-in-out hover:bg-yellow-400"
            >
              {boton.id}
            </button>
          ))}
           <button
            onClick={handDelete}
            className="text-3xl w-20 h-20 rounded-xl bg-yellow-700 m-1 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:scale-110 active:scale-50 duration-500 ease-in-out hover:bg-yellow-400"
          > 
          C
          </button>
        {operadores.map((operador) => (
            <button
            value={operador.id}
            onClick={buttonText}
            className="text-3xl w-20 h-20 rounded-xl bg-yellow-700 m-1 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:scale-110 active:scale-50 duration-500 ease-in-out hover:bg-yellow-400"
          > {operador.id}
          </button>
        ))}
        <button
            value = "="
            onClick={ buttonIgual}
            className="text-3xl w-20 h-20 rounded-xl bg-yellow-700 m-1 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:scale-110 active:scale-50 duration-500 ease-in-out hover:bg-yellow-400"
          > 
           =
          </button>
      
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
