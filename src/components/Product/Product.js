import React, { useContext } from 'react';
import { Redirect, useHistory } from 'react-router';
import { UserContext } from '../../App';

const Product = ({product}) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const date = new Date()
    const history = useHistory()
    const handelBuyProduct = (id) => {
        if(loggedInUser.email){
            fetch('https://vast-everglades-82847.herokuapp.com/products')
            .then(response => response.json())
            .then(data =>{
                const orderedProductData = data.find(product => product._id === id)
                const orderProduct = {...loggedInUser,...orderedProductData,date}
                fetch('https://vast-everglades-82847.herokuapp.com/addOrder',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderProduct)
                })
                .then(response => response.json())
                .then(result => {
                    history.push('/order')
                })
            })
        }else{
            history.push('/login')
        }
       

    }


    return (
        <div className="col-md-3 mb-2 text-center rounded ">
            <div className="card">
                <div className="card-body">
                <img src={product.productImg} className="card-img-top" alt=""/>
                <h5 className="card-title">{product.name}</h5>
                <div className="d-flex justify-content-between p-1">
                    <h5 className="price">Price: ${product.price}</h5>
                    <div onClick={() =>handelBuyProduct(product._id)} className="btn btn-primary">Buy Now</div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Product;