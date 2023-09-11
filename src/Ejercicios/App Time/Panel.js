import { useState } from "react"


function Panel (){
 
    let urlNow = "https://api.openweathermap.org/data/2.5/weather?&appid=9e57d62be476f11da70f&lang=es"
    
    let urlCity ="&q="

    let urlDia ="https://api.openweathermap.org/data/2.5/forecast?&appid=9e57d62be476f11da70f&lang=es"

   const [now,setNow] = useState({});
   const [dia, setDia] = useState({});
   const [loading, setLoading] = useState(false);
   const [show, setShow] = useState(false);
   const [location, setLocation]=useState("");

   const getLocation = async(loc) =>{
    setLoading(true);
    setLocation(loc);


    urlNow = urlNow + urlCity + loc;

    await fetch(urlNow).then((response) => {
        if(!response.ok) throw {response}
        return response.json();
    }).then((nowData) =>{
        console.log(nowData);
        setNow(nowData);
    }).catch(error => {
        console.log(error);
        setLoading(false);
        setShow(false);
    })
   }


    return(
        <div></div>
    )
}


export default Panel;