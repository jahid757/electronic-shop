import React from 'react';

const OrderDetail = ({order}) => {
    return (
            <tr>
                <th>{order.name}</th>
                <th>1</th>
                <th>{order.price}</th>
            </tr>
    );
};

export default OrderDetail;