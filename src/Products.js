import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Products = () => {
    const [pro, setProducts] = useState({ data: null, loading: true })
    useEffect(() => {
        const url = 'http://localhost:1234/api/products/'
        // Fetch
        // fetch(url).then(res=> res.json()).then(data => console.log(data)).catch(err=>console.error(err))

        // Axios
        // setTimeout(() => {
        axios(url)
            .then(res => setProducts({
                data: res.data,
                loading: false
            }))
            .catch(err => {
                console.log('This is our Error')
                console.log(err.message)
            })
        // }, 2000)
        // console.log(Products)


    }, []);

    return (
        <div>
            <center>This are the Products</center>
            <br />
            <br />
            <ul className="list-group">
                {pro.loading ? <center><h2>Loading..</h2></center> : pro.data.map(data => {

                    return(
                        <pre><li className="list-group-item pointer">Cras justo odio</li></pre>
                    )
                })}
            </ul>
        </div>
    )
}

export { Products }
