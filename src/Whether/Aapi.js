import React, { useEffect, useState } from 'react'
import Search from './Search';
import { BsFillCloudSunFill} from "react-icons/bs";
 import { FaCity} from "react-icons/fa";

export default function Aapi() {
    const[city,setcity]=useState(null)
    const[search,setsearch]=useState("pune")

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=cdfbc031871573b83474e8ca63f06538`)
        .then(response=>response.json())
        .then(dt=>setcity(dt.main))

    },[search]);
    console.log(city)


  return (
    <>
     <div className='inputdata'>
      <Search onChange={(e)=>{setsearch(e.target.value)}}/>
    </div>

  {!city?(<h1 style={{color:"green"}}><b>No such city Found</b></h1>)
  :(
    <div className='info'>
<h1><FaCity/>{search}</h1>
<h1>Temp:<BsFillCloudSunFill/>{city.temp}</h1>
  <h3>humidity:{city.humidity}</h3>
  <h3>pressure:{city.pressure}</h3>

</div>
)
}
 </>
  )
}
