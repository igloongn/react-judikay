import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




const Products = () => {
    const [pro, setProducts] = useState({ data: null, loading: true })
    const navigate = useNavigate()
    useEffect(() => {
        const url = 'http://localhost:1234/api/products/'
        // axios(url)
        //     .then(res => setProducts({
        //         data: res.data,
        //         loading: false
        //     }))
        //     .catch(err => {
        //         console.log('This is our Error')
        //         console.log(err.message)
        //     })

        // const fetcher = async () =>  {

        //     return 'Async is a Go!!'
        // }
        
        // // console.log(fetcher())
        // // fetcher().then(res => console.log(res))
        
        // // console.log(fetcher2)
        // const fetcher2  = async () => {
        //     const pop = await fetcher()
        //     return pop
        // }
        // fetcher2().then(res =>console.log(res))


        // Async Axios
        // const axiosFetcher = async () => {
        //     const res = await axios(url)
        //     console.log(res)
        // }
        // axiosFetcher()  
        
        
        const fetchFetcher = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setProducts({
                        data: data,
                        loading: false
                    })
            console.log(data)
        }
        fetchFetcher()


    }, []);

    return (
        <div>
            <center>This are the Products</center>
            <br />
            <br />
            <ul className="list-group">
                {pro.loading ? <center><h2>Loading...</h2></center> : pro.data.map((data, index) => {
                    // console.log(index)
                    return (
                        <pre key={index}><center><li onClick={() => navigate(`/details/${data.id}`)} className="list-group-item pointer">{data.name}</li></center></pre>
                    )
                })}
            </ul>
        </div>
    )
}

export { Products }
