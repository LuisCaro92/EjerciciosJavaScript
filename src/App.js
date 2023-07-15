
import './App.css';

function App() {

  let prefijos = ["wonder", "spider", "ant", "iron"]
  let hombre = "man";
  let mujer = "woman";
  
  let nombresCompletos = prefijos.map(function(prefijo, indice) {
      return (indice == 0) ? prefijo + mujer : prefijo + hombre;
   });
  
  console.log(nombresCompletos);
  
  

  return (
    <div className="App">
     <h1>{nombresCompletos}</h1>
    </div>
  );
}

export default App;
