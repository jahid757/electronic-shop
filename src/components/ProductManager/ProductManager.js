import React, { useEffect, useState } from 'react';
import AddedProduct from '../AddedProduct/AddedProduct';

const ProductManager = () => {
    const [addedProduct,setAddProduct] = useState([]);
    useEffect(() => {
        fetch('https://vast-everglades-82847.herokuapp.com/products')
        .then(response => response.json())
        .then(data => setAddProduct(data))
    },[])
    return (
        <div>
            <h2>ProductManager</h2>
            <table className="table text-center">
            <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    addedProduct.map(product => <AddedProduct  product={product} key={product._id}></AddedProduct>)
                 }
                </tbody>
            </table>
            
        </div>
    );
};

export default ProductManager;