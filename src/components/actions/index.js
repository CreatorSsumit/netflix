import axios from "axios";


export const senddata = (data1,data2) => dispatch => {

   dispatch(send(data1,data2))
    
}

 export const send = (data1,data2) => ({
     type: 'data',
     payload: {reviewslist:data1,data:data2}
 })