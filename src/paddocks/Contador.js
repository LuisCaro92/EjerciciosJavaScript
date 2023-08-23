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
    <div className="container ">
      <h1 className="text-5xl my-10 font-semibold text-fuchsia-600">
        Contador JS
      </h1>
      <span className="text-7xl my-10">{click}</span>
      <div className="m-10">
        <button
          className="bt-b text-center bg-slate-500 border-solid rounded-md w-40 h-15 m-5 p-5 hover:text-fuchsia-400 transition  hover:border-fuchsia-600 cursor-pointer"
          onClick={buttonAumentar}
        >
          AUMENTAR
        </button>
        <button className="bt-b text-center bg-slate-500 border-solid rounded-md w-40 h-15 m-5 p-5 hover:text-fuchsia-400 transition  hover:border-fuchsia-600 cursor-pointer"
        onClick={buttonResetear}>
          RESETEAR
        </button>
        <button className="bt-b text-center bg-slate-500 border-solid rounded-md w-40 h-15 m-5 p-5 hover:text-fuchsia-400 transition  hover:border-fuchsia-600 cursor-pointer"
       onClick={buttonDisminuir} >
          DISMINUIR
        </button>
      </div>
    </div>
  );
};

export default Contador;
