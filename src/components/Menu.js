import React, { useContext } from 'react';
import MenuCard from './MenuCard';
import UnavailableBeers from './UnavailableBeers';
import { OrderContext } from './OrderContext';


function Menu(props) {
  const [orderObj, setOrderObj] = useContext(OrderContext);

  return (
    <article className="menu-wrapper">
      <div className="menu">
        <h1>Our Beer selection</h1>

        <MenuCard filteredBeers={props.filteredBeers} />
        <h1 className="unavailable-beer-heading" > Currently unavailable beers</h1>
        <UnavailableBeers apiData={props.apiData} />
      </div>

      <div className="order">
        <h1>Your Order</h1>
        <div className="order-flex">
          <div className="order-cards">
            <ul>

              {orderObj.map(order => {
                if (order.amount > 0) {
                  return (
                    <li>
                      <h1>{order.name}</h1>
                      <br />
                      <div className="menu-order_order">
                        <h3>50DKK</h3>
                        <button>-</button>
                        <span>{order.amount}</span>
                        <button>+</button>
                      </div>
                    </li>)
                } return null;
              })}

            </ul>
          </div>
          <div className="order-price">
            <div className="overall-price">
              <h1>Total</h1>
              <span>50DKK</span>
              <br />
            </div>

            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Menu;
