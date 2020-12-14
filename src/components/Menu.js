import React, { useContext } from "react";
import MenuCard from "./MenuCard";
import MenuOrder from "./MenuOrder";
import UnavailableBeers from "./UnavailableBeers";
import { OrderContext } from "./OrderContext";

function Menu(props) {
  // eslint-disable-next-line
  const [orderObj, setOrderObj] = useContext(OrderContext);

  return (
    <article className="menu-wrapper">
      <div className="menu">
        <h1>Our Beer selection</h1>

        <MenuCard filteredBeers={props.filteredBeers} />
        <h1 className="unavailable-beer-heading"> Currently unavailable beers</h1>
        <UnavailableBeers unavailableBeers={props.unavailableBeers} />
      </div>

      <div className="order">
        <h1>Your Order</h1>
        <div className="order-grid">
          <div className="order-cards">
            <ul>
              {orderObj.map((order) => {
                if (order.amount > 0) {
                  return (
                    <li key={order.name + Math.random()}>
                      <h1>{order.name}</h1>
                      <MenuOrder showCheckoutPrice={true} name={order.name} />
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
          <div className="order-price">
            <div className="overall-price">
              <h1>Total</h1>
              <span>{orderObj.reduce((acc, value) => {
                return acc + value.price;
              }, 0)}DKK</span>
              <br />
            </div>

            <button onClick={() => orderObj.map(beer => beer.price > 0 ? props.setPage('formPage') : null)}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Menu;
