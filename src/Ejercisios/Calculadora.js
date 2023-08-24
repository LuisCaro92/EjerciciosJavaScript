import { useState } from "react";

const Calculadora = () => {
  const [click, setClick] = useState(0);

  const botones = [
    { operador: "MC" },
    { operador: "M+" },
    { operador: "M-" },
    { operador: "MR" },
    { operador: "C" },
    { operador: "/" },
    { operador: "X" },
    { operador: "<=" },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { operador: "-" },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { operador: "+" },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { igual: "=" },
    { id: "%" },
    { id: 0 },
    { id: "," },
  ];

  return (
    <div className="justify-center mx-auto bg-slate-500">
      <h1 className=" text-5xl text-yellow-500 flex justify-center m-10">
        Calculadora
      </h1>
      <div className="flex justify-center bg-slate-300">
        <div className="bg-slate-500 w-xl">
          <span className="text-3xl">{click}</span>
        </div>
      </div>
      <div className="container-sm  flex justify-center items-center bg-slate-300">
        <div className="grid grid-cols-4 items-center">
          <div className="m-4">
            {botones.map((boton) => (
              <button className="w-20 h-20 rounded-xl bg-yellow-600 m-2 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:scale-110 active:scale-50 duration-500 ease-in-out hover:bg-yellow-400">
                {boton.operador}
                {boton.id}
                {boton.igual}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
