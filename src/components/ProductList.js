import React from 'react'
import { useState } from 'react';
import { useFetch } from './hooks/useFetch';
import Loading from "../assets/loading.gif";

export const ProductList = () => {

    const [url,setUrl]=useState("http://localhost:8000/products/");   
    const { data: products ,loading,error} = useFetch(url);

   return (
    <section>
        <div className="filter">
            <button onClick={() => setUrl("http://localhost:8000/product")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
        </div>
         {error && <p className='error'>Error: {error}</p>}
        {/* {loading && <p className='loading'><img src={Loading} alt="Loading..." /></p>} */}
       
        { products && products.map((product) => (
            <div className="card" key={product.id}>
                <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                    <span>${product.price}</span>
                    <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                </p>
            </div>            
        )) }
    </section>
  )
}