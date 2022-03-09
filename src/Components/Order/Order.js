import React from 'react'
import './Order.css' 
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
function Order({order}) {
  return (
    <div className='order'>
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p>
        <p className="order-id">
            <small>{order.id}</small>
        </p>
        {order.data.basket?.map((item) => (
            <CheckoutProduct 
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
            />
        ))}
         <CurrencyFormat
            renderText={(values) => (
                <>
               <h3 className='order-total'>Order Total: {values}</h3>
                </>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={'$'}
            />
    </div>
  )
}

export default Order