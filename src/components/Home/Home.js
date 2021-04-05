import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Home = () => {
    const [product,setProduct] =useState([])
    useEffect(() => {
        fetch('https://vast-everglades-82847.herokuapp.com/products')
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div className="container">
            <Link  to="/" className="navbar-brand text-danger fw-bold">Electro</Link>
            <div className="row pt-4">
                {
                    product.length === 0 && 
                    <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                }
                {
                    product.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;