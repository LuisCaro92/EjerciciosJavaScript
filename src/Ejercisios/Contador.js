import { useState } from "react";

const Contador = () => {
  
  const [click, setClick] = useState(0);

  const buttonAumentar = () => {
    return setClick(click + 1);
  };
  const buttonDisminuir = () => {
    return setClick(click - 1);
  };
  const buttonResetear = () => {
    return setClick(0);
  };
  return (
    <div className="flex justify-center m-20">
    <div className="container-xl bg-gray-300 flex items-center rounded-xl">
      <div className=" grid grid-cols-1  ">
        <div className="mx-auto"> 
      <h1 className="text-5xl my-10 font-semibold text-black-600">
        Contador JS
      </h1>
      </div>
      <div className="mx-auto">
      <span className="text-7xl text-fuchsia-500 my-10 columns-1">{click}</span>
      </div>
      <div className="m-10">
        <button
          className="bt-b text-center bg-slate-500 border-solid rounded-md w-40 h-15 m-5 p-5 hover:text-fuchsia-400 transition  hover:border-fuchsia-600 cursor-pointer shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] transform hover:scale-110  duration-500 ease-in-out"
          onClick={buttonDisminuir}
        >
          DISMINUIR
        </button>
        <button className="bt-b text-center bg-slate-500 border-solid rounded-md w-40 h-15 m-5 p-5 hover:text-fuchsia-400 transition  hover:border-fuchsia-600 cursor-pointer shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] transform hover:scale-110  duration-500 ease-in-out"
        onClick={buttonResetear}>
          RESETEAR
        </button>
        <button className="bt-b text-center bg-slate-500 border-solid rounded-md w-40 h-15 m-5 p-5 hover:text-fuchsia-400 transition  hover:border-fuchsia-600 cursor-pointer shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] transform hover:scale-110  duration-500 ease-in-out"
       onClick={buttonAumentar} >
          AUMENTAR
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Contador;
