import React,{useState,useEffect,useContext, createContext} from 'react';
import {useLocation,useNavigate} from "react-router-dom";
import "./movies.css";
import Reviews from '../reviews/reviews';
import axios from 'axios';
import {connect} from "react-redux";
import {senddata } from "../actions/index"


var resurl = 'http://localhost:3004/allreviews';



function Movies(props) {

var location = useLocation();
var navigate = useNavigate();




const [data, setdata] = useState('')

const [state, setstate] = useState({});
const [reviewlist, setreviewlist] = useState([])



useEffect(() => {
   

  setdata(location.state.data);
   window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth', 
});
defaultfetch();

}, [location,location.pathname,data])


  const handelchanges = (e)=>{

    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setstate({...state,[e.target.name]:value});
    }


  
  const handelsubmit = (e) =>{
    e.preventDefault();
    fetchlist();
    
    setstate({});
  }

  const defaultfetch = ()=>{

    axios.get(resurl).then(res=>{
      setreviewlist([...res.data]);
      
     
        props.senddata([...res.data], data?data:'')
      
  });
  }
  

  const fetchlist = () =>{

   axios.post(resurl,{...state,...data}).then(e=>{
      axios.get(resurl).then(res=>{
          setreviewlist([...res.data]);
          props.senddata([...res.data], data?data:'')
      });
     
    }).catch(err=>{
      console.log('err',err)
     });
  }
  
  return (
    <>
    <section class="text-gray-600 body-font  bg-dark">
         <button style={{position:'absolute',top:'5%',left:'2%'}} onClick={()=>navigate('/')} class="ml-4  inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200  text-lg"> <i class="fa-solid fa-arrow-left"></i> </button>
       
    <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img  class="rounded mx-auto sm:w-80 w-full"  alt="hero" src={data.url} />
      </div>
      <div class="mx-auto lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-9xl text-7xl mb-4 font-bold text-gray-200">{data.name}
         
        </h1>
        <p class="mb-8 text-gray-300 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div class="flex justify-center">
          <button class="inline-flex sm:w-60 w-100 text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Play <span> <i class="fa-solid fa-circle-play ml-6"></i></span></button>
          <button data-bs-toggle="modal" data-bs-target="#exampleModalCenter" class="inline-flex sm:w-50 w-100  mx-3 text-white bg-red-400 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-lg">Review</button>
      
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-200 body-font">
  <div class="container px-5 py-2 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-400">2.7K</h2>
        <p class="leading-relaxed">Users</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-400">1.8K</h2>
        <p class="leading-relaxed">Subscribes</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-400">35</h2>
        <p class="leading-relaxed">Downloads</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-400">4</h2>
        <p class="leading-relaxed">Products</p>
      </div>
    </div>
  </div>
</section>


<Reviews  />



<form class="w-full max-w-lg" onSubmit={handelsubmit}>
<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-bold leading-normal text-gray-900" id="exampleModalScrollableLabel">
        {data.name} &nbsp; ~ Review
        </h5>
      
       
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
       
    

     
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input value={state.firstname ? state.firstname : ''} name='firstname' onChange={(e)=>handelchanges(e)}  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input value={state.lastname ? state.lastname : ''} name='lastname'  onChange={(e)=>handelchanges(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>

  <div class="w-full my-4">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      profession
      </label>
      <input value={state.profession ? state.profession : ''} name='profession'  onChange={(e)=>handelchanges(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Intersted Aera
      </label>
     
      <div class="flex">
  <div>
    <div class="form-check">
      <input name='horrormovie' checked={state.horrormovie?state.horrormovie:false}  onChange={(e)=>handelchanges(e)}      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="horror movies" id="flexCheckDefault" />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        Horror movies 
      </label>
    </div>
    <div class="form-check">
      <input name='adultmovie' checked={state.adultmovie?state.adultmovie:false}  onChange={(e)=>handelchanges(e)}    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="horror movies" id="flexCheckChecked"  />
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
        Adult movies
      </label>
    </div>
  </div>
</div>


    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
      City
      </label>
      <input value={state.city ? state.city : ''} name='city' onChange={(e)=>handelchanges(e)}  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select name='state' value={state.state ? state.state : ''} onChange={(e)=>handelchanges(e)} ss="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
        <option defaultValue={'select'}>Select options</option>
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full  px-3 mb-6 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
       Give Review
      </label>
      <input value={state.review ? state.review : ''} name='review'  onChange={(e)=>handelchanges(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
    </div>
  </div>


      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        {(state.firstname && state.lastname && state.city && state.review && state.state && state.profession) ? <button  type="submit" data-bs-dismiss="modal"
          class="inline-block  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes 
        </button>  : ''}
      
      </div>
    </div>
  </div>
</div>
</form>


  </>
  )
}


function mapStateToProps(state) {
  return {
      state: state
  }
}

const mapDispatchToProps = ({
  senddata: senddata
})

export default connect(mapStateToProps,mapDispatchToProps)(Movies);