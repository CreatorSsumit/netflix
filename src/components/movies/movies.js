import React,{useState,useEffect} from 'react';
import {useLocation,useNavigate} from "react-router-dom";
import "./movies.css"

function Movies(props) {

var location = useLocation();
var navigate = useNavigate();

useEffect(() => {
 setdata(location.state.data)
}, [location])



  const [data, setdata] = useState('')
  
  return (
    <section class="text-gray-600 body-font  bg-dark">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img  class="rounded mx-auto sm:w-80 w-full"  alt="hero" src={data.url} />
      </div>
      <div class="mx-auto lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-9xl text-7xl mb-4 font-bold text-gray-200">{data.name}
         
        </h1>
        <p class="mb-8 text-gray-300 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Play</button>
          <button onClick={()=>navigate('/')} class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Back</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Movies