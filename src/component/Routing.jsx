import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';



const Routing = () => {
    return (
        <>


        <Routes>

        <Route exact to path='/' element={<Home></Home>}></Route>


        </Routes>


            
        </>
    );
};

export default Routing;