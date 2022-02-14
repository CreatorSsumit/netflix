import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {BrowserRouter,Link,NavLink,Route,Switch ,useNavigate } from "react-router-dom"
import './dashboard.css';

var dataurl = "http://localhost:3004/allmovies";

function App() {

var navigate = useNavigate();


const fetchtime = ()=>{
 
    
  //   axios.get("https://api.ipdata.co/?api-key=53635f78966edc14b4428a9e1317327cb7909ba9a88df7bb6d642f23").then(res=>{

  //     axios.get(`https://www.timeapi.io/api/Time/current/ip?ipAddress=${res.data.ip}`).then(res=>{
  //     console.log(res.data.time)
  //   })


  //  }).finally(fetchtime,1000)


  axios.get(dataurl).then(res=>{
    setdata(res.data);
  })
  
}




  const [data, setdata] = useState('');

 
 useEffect(() => {
  
  fetchtime();
 }, [])
 


  

  return (



    <div className="App">
       <div id="nav" class="nav">
      <img class="nav__logo" src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=5" alt="" />
      <img class="nav__avatar" src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=5" alt="" />
    </div>

    <header class="banner">
      <div class="banner__contents">
        <h1 class="banner__title">Lost In Space</h1>
        <div class="banner__buttons">
          <button onClick={()=>navigate(`/movies/banner`, {state: {data: {'name':"Lost in Space",'url':'https://flxt.tmsimg.com/assets/p15197696_b_v9_ab.jpg','imgsrc':'','desc':''},
}})} class="banner__button">Play</button>
          <button class="banner__button">My List</button>
        </div>
        <h1 class="banner__description">
        After crash-landing on an alien planet, the Robinson family fights against all odds to survive and escape. But they're surrounded by hidden dangers...
        </h1>
      </div>
      <div class="banner--fadeBottom"></div>
    </header>
  

{data?data.map((item,index) =>{
   
   return(

    <div>
  <div key={index} class="row">
    <h1 style={{fontSize:'1.5rem' ,fontWeight:'bold'}}>{item.movie.name}</h1>

    <div  class="row__posters">

{item.movie.list.map((item,index)=>{
  
  return(

 
    <img onClick={()=>navigate(`/movies/${index}`, {state: {data:item}})} key={index} class="row__poster row__posterLarge" src={item.url} alt="" />

  )
})}
    
    </div>
  </div>
  </div>
    )
  }):''}

    </div>
  );
}

export default App;
