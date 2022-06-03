

import React from 'react'
import Home from './Home';
import { Routes, Route, Link } from "react-router-dom";
import { Products } from './Products';
import { Detail } from './details';


const MyRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/details/:id' element={<Detail />} />
            
        </Routes>
    )
}

export default MyRoutes


