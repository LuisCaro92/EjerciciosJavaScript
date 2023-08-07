



const AdminPadocks =(props) =>{
 
    return(

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          <div class="group relative  bg-green-100 ">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img src={props.picture}  class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div className="bg-gray-300 rounded-md">
                <p className="text-black">{props.name}</p>
                <p className="text-black">Rut</p>
            </div>
          </div>
        </div>
    )
}

export default AdminPadocks;