


const Calculadora = () => {

    const numbers =[0,1,2,3,4,5,6,7,8,9]

  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <div>
          0
        </div>
        <div>
            {numbers.map((number)=> 
             <button className="btn-b w-10 bg-yellow-400 border rounded-sm ">adsfg</button>)}
           
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
