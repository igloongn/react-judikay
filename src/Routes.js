

import React from 'react'
import Home from './Home';
import { Routes, Route, Link } from "react-router-dom";
import { Products } from './Products';


const MyRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/detail' element={<Home />} />
            
        </Routes>
    )
}

export default MyRoutes


