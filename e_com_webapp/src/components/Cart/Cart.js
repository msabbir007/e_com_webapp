import React from 'react';

const Cart = (props) => {
    const cart=props.cart_prop;
    const totalPrice=cart.reduce((total,prd) => total+prd.price,0);
    let shipping=12.00;
    if (totalPrice==0){
        shipping=0;
    }
    else if(totalPrice>35){
        shipping=0;
    }
    else if(totalPrice>15){
        shipping=4.9;
    }

    const tax=totalPrice/10;
    const grand_total=totalPrice+shipping+tax;
    const formatNumber= num =>{
        const precision=num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summery: </h4>
            <p>Items Order: {cart.length}</p>
            <p>Product Price: {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax+VAT:{formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grand_total)}</p>
            
        

        </div>
    );
};

export default Cart;