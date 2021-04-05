import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetail from '../OrderDetail/OrderDetail';

const Order = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [order,setOrder] = useState([])
    useEffect(() => {
        fetch('https://vast-everglades-82847.herokuapp.com/order/?email='+loggedInUser.email)
        .then(response => response.json())
        .then(data => setOrder(data))
    },[loggedInUser.email])

    const checkout = orderNumber => {
        alert(`Your ${orderNumber} Order successful`)
    }
    return (
        <div>
            <h2 className="text-center">Checkout Your Order</h2>

            <table className="table table-hover text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                   
                </thead> 
                <tbody>
                    {
                        order.map((order => <OrderDetail key={order._id} order={order}></OrderDetail>))
                    }
                </tbody>
                <tfoot>
                    <tr className="border-top bg-danger text-white">
                        <th></th>
                        <th>{order.length}</th>
                        <th onClick={() => checkout(order.length)} className="pointer">CheckOut</th>
                    </tr>
                </tfoot>
            </table>
            
        </div>
    );
};

export default Order;