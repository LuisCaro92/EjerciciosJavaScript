import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


function TimeApp() {

const lupa = <FontAwesomeIcon icon={faMagnifyingGlass}/>

  return (
    <div className="container mx-auto justify-center">
      <form action="#">
        <div className="mt-5 h-30">
          <div className="flex">
            <span>Agregue su direccion</span>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-200 py-1 px-2 rounded-lg w-full"
            />
           <button className="ml-5 w-40 h-10 rounded-xl bg-slate-700 cursor-pointer">{lupa}</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TimeApp;
