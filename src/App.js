
import './App.css';

function App() {


const FuncionSiglos =(numero) =>{
let years = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
const siglo = years.map(year => year) 
if (siglo === numero)
return ("siglo 20")

}


console.log(FuncionSiglos(1992))

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
