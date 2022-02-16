import React from 'react';
import Dashboard from "./components/dashboard/dashboards";
import Movies from "./components/movies/movies"
import { BrowserRouter, Route,Routes as Switch  } from 'react-router-dom';


function App() {


  return (
<div className="App">
                <BrowserRouter >
                  

                        <Switch>
                            <Route exact={true} path='/' element={<Dashboard/>} />
                            <Route exact={true} path='/movies/:id' element={<Movies />} />
                        </Switch>

                  
                </BrowserRouter>
            </div>

  )
}

export default App