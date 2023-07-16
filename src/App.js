import "./App.css";

function App() {
  let prefijos = ["wonder", "spider", "ant", "iron"];
  let hombre = "man";
  let mujer = "woman";

  let nombresCompletos = prefijos.map(function (prefijo, indice) {
    return indice == 0 ? prefijo + mujer : prefijo + hombre;
  });

  console.log(nombresCompletos);


  //Funcion de años a Siglos ****************************
  function YearsCentury(year) {
    if (typeof year === "string")
      if (year.toString().slice(-2) == "00") return year.toString().slice(0, 2);
      else return (Math.floor(+year / 100) + 1).toString();


    else if (typeof year == "number") return Math.floor((year - 1) / 100) + 1;
    else return undefined;
  }
 console.log(YearsCentury("1567"))
  
 
 
 return (
    <div className="App">
      <h1>{nombresCompletos}</h1>
    </div>
  );
}

export default App;
