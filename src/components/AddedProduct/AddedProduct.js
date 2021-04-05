import React from 'react';
import './AddedProduct.css'
const AddedProduct = ({product}) => {
    const handelDeleteProduct = id => {
        fetch('https://vast-everglades-82847.herokuapp.com/deleteProduct/'+id, {
            method: 'DELETE'
        })
        .then(data => console.log(data))
    }
    
    return (
        <tr>
            <th className="fw-bold">*</th>
            <td className="fw-bold">{product.name}</td>
            <td className="fw-bold">${product.price}</td>
            <td onClick={() => handelDeleteProduct(product._id)} className="bg-danger text-white rounded fw-bold pointer">Delete</td>
        </tr>
    );
};

export default AddedProduct;