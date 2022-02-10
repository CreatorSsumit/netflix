import React,{useState,useEffect} from 'react';
import {BrowserRouter,Link,NavLink,Route,Switch ,useNavigate } from "react-router-dom"
import './dashboard.css';

var movielist = [
  

{
  
  'type':"banner",'movie':{'name':'NETFLIX ORIGINALS','list':[
  
  {'name':"Morbius",'url':'https://www.comingsoon.net/assets/uploads/2021/12/FFzlXHlXoAIdHvW.jpeg','imgsrc':'','desc':'','bannerurl':'https://www.vvng.com/wp-content/uploads/2017/12/Jumanji-Welcome-To-The-Jungle-Movie.jpg'},

  {'name':"Shang-chi",'url':'https://lumiere-a.akamaihd.net/v1/images/p_shangchiandthelegendofthetenringshomeentupdate_22055_7b62fa67.jpeg?region=0%2C0%2C540%2C800','imgsrc':'','desc':''},

   
  {'name':"Venom",'url':'https://i.ytimg.com/vi/aPrXjzst6Ew/movieposter_en.jpg','imgsrc':'','desc':''},

  {'name':"The Colony",'url':'https://bloximages.chicago2.vip.townnews.com/siouxcityjournal.com/content/tncms/assets/v3/editorial/c/30/c3069d7f-b6df-56a9-a767-188e01459419/61242f0581559.image.jpg','imgsrc':'','desc':''},

   
  {'name':"The Call Up ",'url':'https://i.pinimg.com/originals/cd/87/ac/cd87ace1dcaa4a59acfc7be5a88edb9d.jpg','imgsrc':'','desc':''},

  {'name':"Jumanji",'url':'https://i.ytimg.com/vi/MJuFdpVCcsY/movieposter_en.jpg','imgsrc':'','desc':''},


]}

},



{
  
  'type':"movies",'movie':{'name':'TRENDING NOW','list':[
  
  {'name':"Gorzilla vs Kong",'url':'https://wehco.media.clients.ellingtoncms.com/img/photos/2021/06/10/homemovies_0611_rgb_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d','imgsrc':'','desc':''},

  {'name':"The Lost City",'url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCgXp2BmUnf83HOmkAYc7FbpIXoYcEmWrdg&usqp=CAU','imgsrc':'','desc':''},

   
  {'name':"Pow",'url':'https://wwwimage-us.pplusstatic.com/thumbnails/photos/370-q80/movie_asset/89/76/86/ppm_salone_poster_1400x2100.jpg','imgsrc':'','desc':''},

  {'name':"Scream",'url':'https://www.comingsoon.net/assets/uploads/2021/12/Scream-poster.jpeg','imgsrc':'','desc':''},

   
  {'name':"Zero Dark Thirty",'url':'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/images-1-1614194992.jpg?crop=1xw:1xh;center,top&resize=480:*','imgsrc':'','desc':''},

  {'name':"Eighty-three",'url':'https://timesofindia.indiatimes.com/photo/61934693.cms','imgsrc':'','desc':''},


]}

},




]

function App() {

var navigate = useNavigate()



  const [data, setdata] = useState('');

 
 useEffect(() => {
  setdata(movielist)
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
